import React, { Component } from "react";
import {View,Text,Image,StatusBar,Platform,FlatList,ActivityIndicator,TouchableOpacity,ToastAndroid,BackHandler,TextInput, ImageBackground, RefreshControl} from "react-native";
import {Container,Left,Content,Body,Header,Right, Title, Subtitle,Toast,Fab, Icon, Button} from "native-base";
// import Swiper from "react-native-swiper";
// import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import { Images, Metrics } from '../../../resources/Themes';
import Ionicons from "react-native-vector-icons/Ionicons";
import Api from '../../../libs/Api';
import NetInfo from "@react-native-community/netinfo";
import ListItemRekomendasi from './ListItemRekomendasi';
// import OneSignal from 'react-native-onesignal';
// Screen Styles
import styles from "../../../resources/Themes/DefaultStyles";

const cardBgOne = "https://images.unsplash.com/photo-1570174032494-50cc461b334b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoading: true,isSearch:false,textSearch:"",titleListGunung: "Daftar Produk",nameCity:"Bandung",tempCity:"0",randomSearch:"",
            dataFilterObjects: [
                {
                    id: 1,name: "Terpopuler",color:["#3598F3", "#891E85"],route:"/popular"
                },
                {
                    id: 2,name: "Terdekat",color:["#F37935", "#C834C2"],route:"/near"
                },
                {
                    id: 3,name: "Termudah",color:["#24CDB9", "#3516B0"],route:"/easiest"
                },
                {
                    id: 4,name: "7 Summit",color:["#31CD24", "#B522DA"],route:"/seven"
                }
                ],
                idFilterSelected:1,selectedLots: [],isConnected: true,loading:false,
                new_collection: [
                {
                    id: 1,image: { uri: cardBgOne },title: "",description: ""
                },
                {
                    id: 2,image: { uri: cardBgOne },title: "",description: ""
                },
                {
                    id: 3,image: { uri: cardBgOne },title: "",description: ""
                }
            ],
            dataListSource: [],
            refreshing: false,
            activeFab: false
        };
    }

    componentDidMount(){
        NetInfo.addEventListener(state => {
            this.setState({ isConnected: state.isConnected });
        });
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
        this.fetchData();
        this.randomSearch();
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData()
        this.randomSearch();
        this.setState({refreshing: false});
    }
    fetchData(){
        this.setState({loading: true})
        Api.get('/products/?page=1').then(resp =>{
            this.setState({dataListSource: resp.data,loading:false})
        })
        .catch(error =>{ToastAndroid.show("'"+error+"'", ToastAndroid.SHORT)});
    }

    randomSearch(){
        var data = ["Manglayang Yuk","Jaya Giri Seru","Bandung","Lembang","Curug Cilengkrang","Ciwangun","Cilengkrang"]
        var i = Math.floor(7*Math.random())
        this.setState({randomSearch: data[i]})
    }

    fetchFilter(route){
        this.setState({loading: true})
        Api.get(route).then(resp =>{
            this.setState({dataListSource: resp})
            this.setState({loading: false})
        })
        .catch(error =>{
            ToastAndroid.show("'"+error+"'", ToastAndroid.SHORT)
            this.setState({loading: false})
        });
    }

    viewConnection(){
        if (!this.state.isConnected) {
            return( <View style={styles.offlineContainer}><Text style={styles.offlineText}>Tidak ada koneksi</Text></View> )
        }
    }

    showDetail(data){
        Actions.gunung_detail({dataProps:data});
    }

    _renderRow(rowData) {
        return (<ListItemRekomendasi rowData={rowData} />);
    }

    _renderFilterRow(rowData, index) {
        return (      
            <View style={styles.rowMainFilter}>
                <TouchableOpacity style={styles.cardFilter}
                    onPress={() => [this.fetchFilter(rowData.route), this.setState({idFilterSelected: rowData.id}) ]}
                >
                    {/* <LinearGradient locations={[0.1, 0.75]} colors={rowData.color} start={{ x: 0, y: 1 }} end={{ x: 1.5, y: 1 }} style={styles.cardFilterBg}> */}
                        <View style={styles.filterDetailBg}><Text style={rowData.id == index ? styles.nameFilterTxtSelected : styles.nameFilterTxt }>{rowData.name}</Text></View>
                    {/* </LinearGradient> */}
                </TouchableOpacity>
            </View>
        );
    }

    _renderList(rowData) {
        var that = this;

        return (
            <TouchableOpacity style={styles.listMainview}
                onPress={() => this.showDetail(rowData)}
            >
                {/* <CachedImage
                source={rowData.destinationImg}
                style={styles.destinationimg}
                >
                <TouchableOpacity />
                </CachedImage> */}
                <Text style={styles.destinationnamelist}>{rowData.name}</Text>
                    {/* <Text style={styles.mexicotext}> {rowData.destinationName} </Text> */}
                    {/* <View style={styles.placeDistanceBg}>
                            <View style={styles.mapPin}> <FontAwesome name="map-marker" size={12} color="#b7b7b7" /> </View>
                            <Text style={styles.placeDistanceTxt}>{rowData.place}</Text>
                    </View> */}
            </TouchableOpacity>
        );
    }

    searchFilter(text){
        if(text == ""){
            this.fetchData()
            this.setState({isSearch: false,textSearch: null,titleListGunung: "Sudah Pernah Kesini ?"})
        }else{
            if (!this.state.isConnected) {
                Toast.show({text: "Harap periksa koneksi terlebih dahulu",duration:2000,type: "danger"});
            }else{
                this.setState({loading: true,isSearch: true,textSearch: text,titleListGunung: "Hasil Pencarian"})

                Api.get("/mounts/search/" + text).then(resp =>{
                    this.setState({dataListSource: resp.data,loading: false})
                })
                .catch(error =>{
                    ToastAndroid.show("'"+error+"'", ToastAndroid.SHORT)
                    this.setState({loading: false})
                });
            }
        }
    }

    clearFilter(){
        this.fetchData()
        this.randomSearch()
        this.setState({isSearch: false,textSearch: null,titleListGunung: "Sudah Pernah Kesini ?"})
    }

    renderCloseSearch(){
        if(this.state.isSearch){
            return(
                <TouchableOpacity onPress={() => this.clearFilter() }>
                    <View style={styles.closeView}><Ionicons name="ios-close-circle-outline" size={18} color="#616161" /></View>
                </TouchableOpacity>
            );
        }else{return null;}
    }

    loadingView(){
        if(this.state.loading){return(<ActivityIndicator style={{zIndex:1}} />)}
    }

    render() {
        StatusBar.setBarStyle("dark-content", true);
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("#F4F4F4", true);
            StatusBar.setTranslucent(true);
        }

        return (
            <Container style={styles.main}>

                <Header style={styles.header}>
                    <Left style={styles.vwLfH}>
                        <Title style={styles.cl00}>Selamat Datang</Title>
                        <Subtitle style={{color:"#000"}}>{this.state.nameCity}, {this.state.tempCity}{"\u2103"}</Subtitle>
                    </Left>
                    {/* <Body style={styles.left}>
                    </Body> */}
                    <Right style={styles.right}>
                        {this.loadingView()}
                    </Right>
                </Header>

                <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4"/>

                {this.viewConnection()}

                <Content refreshControl={
                    <RefreshControl tintColor="green" colors={['green', 'green', 'green']} style={{backgroundColor: 'transparent'}} refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
                }>

                    <View style={styles.contentHeader}>
                        <View style={styles.pageHeader1}>
                            <ImageBackground source={Images.ic_search_img} style={{height: 112,flex: 1,alignItems: "stretch",justifyContent: 'center', alignItems: 'center',width: null}} />
                        </View>
                        <View style={styles.pageHeader2}>
                            <Text style={styles.titleTextSearch}>Cari Produk ?</Text>
                            <View style={styles.bodySearch}>
                                <View style={styles.searchView}><Ionicons name="ios-search" size={18} color="#616161" /></View>
                                <TextInput
                                    style={styles.searchText} selectionColor={"#6f6f6f"} underlineColorAndroid="transparent"
                                    placeholder={this.state.randomSearch} placeholderTextColor="#616161"
                                    autoCapitalize="none" keyboardType="default"
                                    value={this.state.textSearch}
                                    onChangeText={text => this.setState({textSearch: text})}
                                    onSubmitEditing={(text) => this.searchFilter(this.state.textSearch)}
                                />
                                {this.renderCloseSearch()}
                            </View>
                        </View>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{this.state.titleListGunung}</Text>
                    </View>

                    {this.state.dataListSource == null ? 
                        <View>
                            <Image
                                style={{height: 300,flex: 1,alignItems: "stretch",justifyContent: 'center',alignItems: 'center',width: null}}
                                source={Images.ic_not_found_new}
                            />
                            <Text style={{textAlign:"center"}}>Maaf Data Tidak Ditemukan</Text>
                        </View>
                    :
                        <FlatList
                            data={this.state.dataListSource}
                            numColumns={2}
                            style={styles.listContent}
                            renderItem = {({item, index}) => ( this._renderRow(item) )}
                            keyExtractor = {(item, index) => index.toString()}
                        />
                    }
                </Content>

                <Fab
                    active={this.state.activeFab}
                    direction="up"
                    containerStyle={{ marginLeft: 10 }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ activeFab: !this.state.activeFab })}
                >
                    <Icon name="md-share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                    </Button>
                </Fab>
            </Container>
        );
    }
}