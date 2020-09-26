import React, { Component } from "react";
import {Text,View,StatusBar,TouchableOpacity,Platform,ImageBackground,ActivityIndicator,BackHandler,I18nManager,ToastAndroid,PermissionsAndroid, Image} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Form,Item,Input,Content,Toast} from "native-base";
import styles from "./styles";
import NetInfo from "@react-native-community/netinfo";
import { Images } from "../../../resources/Themes";
import Api from '../../../libs/Api';
import base64 from 'react-native-base64'

import { inject, observer } from 'mobx-react';
@inject('store')
@observer

export default class SigninScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ActionToSignin: "SigninScreen",ActionToSignup: "SignUpScreen",
            usernameText:'arman',emailText:'1234',passwordText:'',
            getDataWalkThroug:null,
            isConnected: true,loading: false,statusButton: false,
        };
    }

    componentDidMount() {
        NetInfo.addEventListener(state => { this.setState({ isConnected: state.isConnected }); });
        this.requestLocationPermission();
    }

    async requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {'title': 'Cool Location Permission','message': 'Cool Location App needs access to your location '}
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {} else {}
        } catch (err) {
        }
    }

    componentWillMount() {
        // BackHandler.addEventListener("hardwareBackPress", this.backPressed);      
        const { state } = this.props.navigation;
        this.splashScreen()
        if(this.props.navigation.state.params){this.setState({getDataWalkThroug:state.params.setFromIntro})}
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
    }

    backPressed = () => {
        return BackHandler.exitApp();
    };

    login(username, password){
        let { store } = this.props;

        if (!this.state.isConnected) {
            Toast.show({text: "Harap periksa koneksi terlebih dahulu",duration:2000,type: "danger"});
        }else{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (username != "" && password != "") {

                // if (email.match(mailformat)) {

                    this.setState({loading: true,statusButton: true})

                    store.userStore.login(username, password)
                    .then(resp =>{

                        // if(resp.status == "ok"){
                            USERID = JSON.stringify(store.userStore.user_id);
                            USERNAME = username

                            this.props.navigation.navigate("MainActivityScreen")

                            ToastAndroid.show('Selamat datang :)', ToastAndroid.SHORT)
                            AsyncStorage.setItem('user_id', JSON.stringify(store.userStore.user_id));
                            AsyncStorage.setItem('user_name', username);
                            AsyncStorage.setItem('email', JSON.stringify(store.userStore.email));
                            AsyncStorage.setItem('role_id', JSON.stringify(store.userStore.role_id));
                        // }else{
                        //     this.setState({statusButton: false,loading: false})
                        //     Toast.show({text: resp.message,duration:2000,type: "danger"});
                        //     return;
                        // }
                    })
                    .catch(error => {
                        this.setState({statusButton: false,loading: false})
                        Toast.show({text: "Maaf sedang terjadi gangguan",duration:2000,type: "danger"});
                        return;
                    });
                } else {
                    if (username == "" || password == '') {
                        Toast.show({text: "Inputan tidak boleh kosong",duration:2000,type: "danger"});
                        return;
                    }
                }
            // }
        }
    }

    splashScreen(){
        setTimeout(() => {this.setState({isLoading:true})}, 4000)
    }
  
    viewConnection(){
        if (!this.state.isConnected) {return(<View style={styles.offlineContainer}><Text style={styles.offlineText}>Tidak ada koneksi</Text></View>)}
    }

    loadingView(){
        if(this.state.loading){return(<ActivityIndicator />)}
    }

    render() {
        const { state } = this.props.navigation;
        
        StatusBar.setBarStyle("dark-content", true);
        if (Platform.OS == "android") {
            StatusBar.setBackgroundColor("#F4F4F4", true);
            StatusBar.setTranslucent(true);
        }

        return (
            <Container style={styles.bgBody}>
                <StatusBar barStyle="dark-content" />

                <ImageBackground source={Images.main_bg_front} style={styles.bgImage}>
                    {this.viewConnection()}
                    <Content>

                        <View style={styles.logosec}>
                            <Image source={Images.main_logo_transparent} style={styles.logostyle} />
                            {/* <Text style={styles.titleLogin}>Login</Text> */}
                        </View>

                        <Form style={styles.form}>
                            <Item rounded style={styles.inputStyle}>
                                <Input
                                style={styles.inputmain} placeholderTextColor="#ffffff" textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Username" returnKeyType='next' autoCapitalize='none'
                                // keyboardType='email-address'
                                onSubmitEditing={() => this.refs.passwordInput._root.focus()} 
                                onChangeText={(text) => {this.setState({usernameText:text})}}
                                />
                            </Item>
                            <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
                                <Input
                                style={styles.inputmain} placeholderTextColor="#ffffff" textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Password" ref='passwordInput' autoCapitalize='none' secureTextEntry={true}
                                onChangeText={(text) => this.setState({passwordText:text})}
                                onSubmitEditing={() => this.login(this.state.usernameText, this.state.passwordText)}
                                />
                            </Item>

                            {this.loadingView()}

                            <TouchableOpacity
                                info style={styles.signInbtn} disabled={this.state.statusButton}
                                onPress={() => this.login(this.state.usernameText, this.state.passwordText)}
                            >
                                <Text autoCapitalize="words" style={styles.buttongetstarted}>Masuk</Text>
                            </TouchableOpacity>

                        </Form>
                        <View iconRight style={styles.fbview}>
                            <Text autoCapitalize="words" style={styles.sgText}>Belum punya akun?</Text>
                        </View>
                        <View style={styles.bottomView}>
                            <TouchableOpacity style={styles.sgButton} disabled={this.state.statusButton} onPress={() => this.props.navigation.navigate(this.state.ActionToSignup)}>
                                <View style={styles.sgview}>
                                    <Text autoCapitalize="words" style={styles.sgButtonText}>Daftar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
}