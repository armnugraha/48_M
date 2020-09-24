import React, { Component } from "react";
import {View,Text,Image,StatusBar,Platform,FlatList,ActivityIndicator,TouchableOpacity,ToastAndroid,BackHandler, Picker} from "react-native";
import {Container,Left,Content,Body,Header,Right, Title, Subtitle,Toast,Fab, Icon, Button, Form, Item, Label, Input} from "native-base";
import { Actions } from "react-native-router-flux";
import { Images, Metrics } from '../../../resources/Themes';
import Ionicons from "react-native-vector-icons/Ionicons";
import Api from '../../../libs/Api';
import NetInfo from "@react-native-community/netinfo";
// Screen Styles
import styles from "../../../resources/Themes/DefaultStyles";

export default class ProductCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            dataListSource: [],
            refreshing: false,
            is_category:0,
            is_unit:0,
        };
    }

    componentDidMount(){
        NetInfo.addEventListener(state => {
            this.setState({ isConnected: state.isConnected });
        });
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
        this.fetchData();
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData()
        this.setState({refreshing: false});
    }
    fetchData(){
        this.setState({loading: true})
        Api.get('/products/?page=1').then(resp =>{
            this.setState({dataListSource: resp.data,loading:false})
        })
        .catch(error =>{ToastAndroid.show("'"+error+"'", ToastAndroid.SHORT)});
    }

    onCategory(value) {
        this.setState({is_category: value});
    }

    onUnit(value) {
        this.setState({is_category: value});
    }

    viewConnection(){
        if (!this.state.isConnected) {
            return( <View style={styles.offlineContainer}><Text style={styles.offlineText}>Tidak ada koneksi</Text></View> )
        }
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
                        <Title style={styles.cl00}>Tambah Barang</Title>
                    </Left>
                    <Right style={styles.right}>
                        {this.loadingView()}
                    </Right>
                </Header>

                <StatusBar barStyle="dark-content" backgroundColor="#F4F4F4"/>

                {this.viewConnection()}

                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Nama</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Kategori</Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: 232, marginTop:16, marginRight:88 }}
                                placeholder="Kategori"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.is_category}
                                onValueChange={this.onCategory.bind(this)}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                        <Item stackedLabel>
                            <Label>Satuan</Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: 232, marginTop:16, marginRight:88 }}
                                placeholder="Satuan"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.is_unit}
                                onValueChange={this.onUnit.bind(this)}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                        <Item stackedLabel>
                            <Label>Harga Dus</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Harga Box</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel>
                            <Label>Harga Pack</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Harga PCS</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}