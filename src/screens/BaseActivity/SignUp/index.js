import React, { Component } from "react";
import {View,Text,Platform,StatusBar,I18nManager,ActivityIndicator,TouchableOpacity,BackHandler,Image,TextInput,ImageBackground} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { Content, Toast, Container, Form, Input, Item,Picker } from "native-base";
import { Images} from "../../../resources/Themes";
import styles from "./style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Api from '../../../libs/Api';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",name: "",password: "",email: "",gender: 0,birth: "",height: null,weight: null,
            ActionToSignin: "SigninScreen",ActionToSignup: "SignUpScreen",
            isConnected: true,loading: false,statusButton: false,
        };
    }

    componentDidMount() {
        NetInfo.addEventListener(state => { this.setState({ isConnected: state.isConnected }); });
    }

    componentWillMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
    }

    backPressed = () => {
        this.props.navigation.navigate(this.state.ActionToSignin);
        return true;
    };

    onValueChange(value) {
        this.setState({ gender: value });
    };

    signUp(username,name,email,password,birth,gender,height,weight){
        if (!this.state.isConnected) {
            Toast.show({text: "Harap periksa koneksi terlebih dahulu",duration:2000,type: "danger"});
        }else{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (username != "" && name != "" && email != "" && password != "" && birth != "") {
                if (email.match(mailformat)) {
                    this.setState({loading: true})
                    let params = {
                        username: username,name: name,phone: null,email:email,password: password,birth:birth,gender:Number(gender),height:height,weight:weight,role_id:3 //3 for user
                    };

                    Api.post('/users', params).then(resp =>{
                        if(resp.status == "ok"){
                            Toast.show({text: "Selamat, anda telah berhasil di daftarkan. Silahkan login terlebih dahulu",duration:2000,type: "success"});
                            this.props.navigation.navigate(this.state.ActionToSignin)
                        }else{
                            this.setState({statusButton: false,loading: false})
                            Toast.show({text: resp.message,duration:2000,type: "danger"});
                        }
                    })
                    .catch(error => {
                        this.setState({statusButton: false})
                        Toast.show({text: error,duration:2000,type: "danger"});
                    });
                    
                } else {
                    Toast.show({text: "Harap masukan email dengan format yang benar.",duration:2000,type: "danger"});
                }
                
            } else {
                // if (username == "" || name == "" || email == "" || password == '' || gender == "" || birth == "") {
                    Toast.show({text: "Inputan tidak boleh kosong",duration:2000,type: "danger"}); return;
                // }
            }
        }
    }

    viewConnection(){
        if (!this.state.isConnected) {
            return(<View style={styles.offlineContainer}><Text style={styles.offlineText}>Tidak ada koneksi</Text></View>)
        }
    }

    loadingView(){
        if(this.state.loading){return(<ActivityIndicator />)}
    }

    render() {
        if (Platform.OS === "android") {
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
                        {/* <Text style={styles.titleLogin}>Register</Text> */}
                    </View>
                    <Form style={styles.form}>
                        <Item rounded style={styles.inputStyle}>
                            <Input
                                placeholderTextColor="#FFF" textAlign={I18nManager.isRTL ? "right" : "left"} style={styles.inputmain} returnKeyType='next'
                                placeholder="Username" autoCapitalize='none'
                                onSubmitEditing={() => this.refs.nameInput._root.focus()} 
                                onChangeText={(text) => {this.setState({username:text})}}
                            />
                        </Item>
                        <Item rounded style={[styles.inputStyle, {marginTop:10}]}>
                            <Input
                                ref='nameInput'
                                placeholderTextColor="#FFF" textAlign={I18nManager.isRTL ? "right" : "left"} style={styles.inputmain} returnKeyType='next'
                                placeholder="Name"
                                onSubmitEditing={() => this.refs.emailInput._root.focus()} 
                                onChangeText={(text) => {this.setState({name:text})}}
                            />
                        </Item>
                        <Item rounded style={[styles.inputStyle, {marginTop:10}]}>
                            <Input
                                ref='emailInput'
                                placeholderTextColor="#FFF" textAlign={I18nManager.isRTL ? "right" : "left"} style={styles.inputmain} returnKeyType='next'
                                keyboardType='email-address' placeholder="Email" autoCapitalize='none'
                                onSubmitEditing={() => this.refs.passwordInput._root.focus()} 
                                onChangeText={(text) => {this.setState({email:text})}}
                            />
                        </Item>
                        <Item rounded style={[styles.inputStyle, {marginTop:10}]}>
                            <Input
                                placeholderTextColor="#FFF" placeholder="Password" textAlign={I18nManager.isRTL ? "right" : "left"} style={styles.inputmain}
                                ref='passwordInput' autoCapitalize='none' //returnKeyType='next'
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({password:text})}
                            />
                        </Item>

                        {this.loadingView()}

                        <TouchableOpacity info style={styles.signInbtn} onPress={() => this.signUp(this.state.username, this.state.name, this.state.email, this.state.password, this.state.birth, this.state.gender, this.state.height, this.state.weight)}>
                            <Text autoCapitalize="words" style={styles.buttongetstarted}>Daftar</Text>
                        </TouchableOpacity>
                    </Form>

                    <View iconRight style={styles.fbview}>
                        <Text autoCapitalize="words" style={styles.sgText}>Sudah punya akun?</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.sgButton} onPress={() => this.props.navigation.navigate(this.state.ActionToSignin)}>
                            <View style={styles.sgview}><Text autoCapitalize="words" style={styles.sgButtonText}>Masuk</Text></View>
                        </TouchableOpacity>
                    </View>

                </Content>

                </ImageBackground>

            </Container>
        );
    }
}