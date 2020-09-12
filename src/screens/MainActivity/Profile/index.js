import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform,Alert,TouchableOpacity,View, BackHandler, Linking, ToastAndroid, RefreshControl, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container,Left,Content,Header,List, ListItem, Title} from 'native-base';
import NetInfo from "@react-native-community/netinfo";
import Api from '../../../libs/Api';
// Screen Styles
import styles from './styles_new';
import default_styles from "../../../resources/Themes/DefaultStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

import { withNavigation,StackActions,NavigationActions } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import { Images } from '../../../resources/Themes';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
            getUsername:"",
            name:"",email:"",phone:"",getBio:"",birth:"",gender:"",
            isConnected: true,refreshing: false,
        };
    }
    
    _renderProfileImageRow(rowData) {
        return (
          <View>
            <Image
              style={
                rowData.id == "1"
                  ? styles.suggestedPeopleImg
                  : styles.suggestedPeopleImgOther
              }
              source={rowData.profileImage}
            />
          </View>
        );
    }
    
    _renderProfileDetailRow(rowData) {
        return (
          <View style={styles.mainviewrow}>
            <Image source={rowData.profileImage} style={styles.mainimgrow} />
            <View style={styles.row}>
              <View style={styles.details}>
                <Text style={styles.name}>{rowData.name}</Text>
                <Text style={styles.status}>{rowData.status}</Text>
              </View>
              {rowData.isTimeStatusOn == "true" ? (
                <View style={styles.details}>
                  <Ionicons name="md-time" size={15} color="#b7b7b7" />
                  <Text style={styles.time}>{rowData.timeStatus}</Text>
                </View>
              ) : (
                <Text style={styles.descrow}>{rowData.description}</Text>
              )}
            </View>
          </View>
        );
    }

    componentDidMount(){
        NetInfo.addEventListener(state => {this.setState({ isConnected: state.isConnected }); });
        this.fetchProfile()
        if(BIO == null){
            this.setState({getBio: "mulih kajati mulang ka asal"})
        }else{
            this.setState({getBio: BIO})
        }
    }

    fetchProfile(){
        this.setState({refreshing:true})
        let getDataUserId = JSON.parse(USERID);
        let splitUserId = JSON.parse(getDataUserId);
        Api.get("/users/" + splitUserId).then(resp =>{
            var gender;
            if(resp.data.gender == 0){
                gender = "Laki-Laki"
            }else{
                gender = "Perempuan"
            }
            this.setState({getUsername: resp.data.username, name: resp.data.name, phone: resp.data.phone, email: resp.data.email, birth:resp.data.birth,gender:gender,refreshing:false})
        })
        .catch(error =>{
            this.setState({refreshing:false})
        });
    }
    
    viewConnection(){
        if (!this.state.isConnected) {
            return(<View style={styles.offlineContainer}><Text style={styles.offlineText}>Tidak ada koneksi</Text></View>)
        }
    }
    
    onValueChange(value) {
        if(value == "logout"){
          this.props.navigation.navigate("SigninScreen")
          AsyncStorage.removeItem('user_id')
                AsyncStorage.removeItem('user_name')
                AsyncStorage.removeItem('email')
                AsyncStorage.removeItem('pengelola')
                AsyncStorage.removeItem('mount_id')
        }else{
          this.props.navigation.navigate("profile_edit", {callReloadData:this.callReloadData})
        }
    }

    editView(){
        this.props.navigation.navigate("profile_edit", {callReloadData:this.callReloadData})
    }

    recordMap(){
        this.props.navigation.navigate("maps_record")
    }

    logout(){
        Alert.alert(
            'Keluar Aplikasi',
            'Apakah anda yakin ingin keluar ? dan Aplikasi akan menutup terlebih dahulu', [{
                text: 'Batal',
                style: 'cancel'
            }, {
                text: 'OK',
                onPress:()=> this.goToLogout(),
            }, ], {
                cancelable: false
            }
        )
        return true;
    }

    goToLogout(){
        // AsyncStorage.multiRemove(ListOffline)
        AsyncStorage.removeItem('user_id')
		AsyncStorage.removeItem('user_name')
		AsyncStorage.removeItem('email')
		AsyncStorage.removeItem('pengelola')
        AsyncStorage.removeItem('mount_id')
        AsyncStorage.removeItem('mount_name')
        AsyncStorage.removeItem(MOUNTNAME+"jalur")
        AsyncStorage.removeItem(MOUNTNAME+"tmpt")
        HASINTRO = null;
        HASLOGIN2 = '';
        hasLogin = '';
        USERID = null;
        ROLEID = null;
        MOUNTID = null;
        MOUNTNAME = null;        
        USERNAME = null;
        EMAIL = null;
        BIO = null;
        const resetAction = StackActions.reset({
            index: 0,
            key: undefined,
            actions: [NavigationActions.navigate({ routeName: 'SigninScreen' })],
        });
        BackHandler.exitApp()
    }

    goToWA(){
        if (this.state.isConnected) {
            Linking.openURL('whatsapp://send?text=hello&phone=+6287822516625')
        }else{
            ToastAndroid.show('Harap periksa koneksi terlebih dahulu', ToastAndroid.SHORT)
        }
    }
    
    //CALLBACK FOR ANOTHER COMPONENT USE THIS METHOD
    callReloadData = (usernameUpdate) =>{
        const { store } = this.props;
        this.fetchProfile()
        this.setState({getUsername: usernameUpdate})
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchProfile()
    }

    render(){
        StatusBar.setBarStyle("dark-content", true);
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("#F4F4F4", true);
            StatusBar.setTranslucent(true);
        }

        var that = this;

        var name = this.state.getUsername;
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

        return(
            <Container style={styles.main}>

                <Header androidStatusBarColor={"#F4F4F4"} style={default_styles.header}>
                    <Left style={default_styles.vwLfH}>
                        <Title style={default_styles.cl00}>Profil</Title>
                    </Left>
                </Header>

                {this.viewConnection()}

                <Content style={styles.contentBg} refreshControl={
                    <RefreshControl
                        tintColor="green"
                        colors={['green', 'green', 'green']}
                        style={{backgroundColor: 'transparent'}}
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }>

                    <View style={default_styles.listMainview}>
                        <View style={default_styles.contentProfil}>
                            <View style={default_styles.pageProfilHeader1}>
                                <ImageBackground source={Images.ic_about_profil} style={{height: 142,flex: 1,alignItems: "stretch",justifyContent: 'center', alignItems: 'center',width: null}} />
                            </View>
                            <View style={default_styles.pageProfilHeader2}>
                                <Text style={default_styles.titleTextProfil}>{this.state.name}</Text>
                                <Text style={default_styles.titleTextProfil}>{this.state.birth}</Text>
                                <TouchableOpacity style={styles.normalButton} onPress={()=>this.editView()}>
                                    <Text style={styles.normalButtonTxt}>Ubah</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>

                    <View style={styles.cardBg}>

                        <View style={styles.connectTextView}>
                            <Text style={styles.connectionPhotosTxt}>Informasi Pribadi</Text>
                        </View>

                        <List style={styles.detailNew}>

                            <ListItem style={styles.listItem}>
                                <View>
                                    <View style={{flexDirection:'row',marginBottom:32}}>
                                        <Ionicons name="md-people" style={styles.iconLeft}/>
                                        <Text style={styles.listItemText}>
                                            {name}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginBottom:32}}>
                                        <Ionicons name="md-mail" style={styles.iconLeft}/>
                                        <Text style={styles.listItemText}>
                                            {this.state.email}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginBottom:32}}>
                                        <Ionicons name="md-transgender" style={styles.iconLeft}/>
                                        <Text style={styles.listItemText}>
                                            {this.state.gender}
                                        </Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginBottom:32}}>
                                        <Ionicons name="md-call" style={styles.iconLeft}/>
                                        <Text style={styles.listItemText}>
                                            {this.state.phone}
                                        </Text>
                                    </View>
                                </View>
                            </ListItem>

                        </List>
                    </View>

                    <View style={styles.cardBg}>
                        <List style={styles.details}>

                            <ListItem style={styles.listItem}>
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons name="md-bookmarks" style={styles.iconLeft}/>
                                    <Text style={styles.listItemText}>V 1.3</Text>
                                </View>
                            </ListItem>

                        </List>
                    </View>

                    <View style={styles.cardBg}>
                        <ListItem style={styles.listFooter} onPress={()=>this.logout()}>
                            <Text style={styles.listFooterText}>Keluar</Text>
                        </ListItem>
                    </View>

                </Content>
            </Container>
        )
    }

}

export default withNavigation(ProfileScreen);