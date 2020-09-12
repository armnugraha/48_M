import React, { Component } from "react";
import {View,Text,Platform,StatusBar,I18nManager,ActivityIndicator,TouchableOpacity,BackHandler,ToastAndroid,AsyncStorage,TextInput} from "react-native";
import { Content, Toast, Header, Left, Body, Right, Container, Form, Input, Item, Picker, Title } from "native-base";
import { Fonts, Images } from "../../../resources/Themes";
import NetInfo from "@react-native-community/netinfo";
import styles from "./style";
import default_styles from "../../../resources/Themes/DefaultStyles";
import Api from '../../../libs/Api';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

export default class ProfileEditScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",name: "",phone: "",address:"",password: "",birthday: "",email: "",gender: 0,birth: "",height: "",weight: "",
            ActionToSignin: "SigninScreen",
            isConnected: true,loading: false,statusButton: false,
            dataUser:""
        };
    }

    componentDidMount() {
        NetInfo.addEventListener(state => {this.setState({ isConnected: state.isConnected }); });
        let getDataUserId = JSON.parse(USERID);
        let splitUserId = JSON.parse(getDataUserId);
    
        this.setState({statusButton: true,loading: true})
    
        Api.get("/users/" + splitUserId).then(resp =>{
            console.log(resp)
            this.setState({username: resp.data.username, name: resp.data.name, phone: resp.data.phone, email: resp.data.email, address: resp.data.address, birth: resp.data.birth, gender: resp.data.gender})
            this.setState({height: resp.data.height, weight: resp.data.weight})
            // this.setState({password: resp.data.password})
    
            this.setState({statusButton: false,loading: false})
        })
        .catch(error =>{
            // ToastAndroid.show("'"+error+"'", ToastAndroid.SHORT)
        });
        BackHandler.addEventListener("hardwareBackPress", this.backPressed);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
    }

    backPressed = () => {
        Actions.pop()
        return true;
    };

    onValueChange(value) {
        this.setState({ gender: value });
    };

    updateUser(username, name, phone, email, password,birth,gender){

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // let getDataUserId = USERID;
        // let splitUserId = getDataUserId.split('"',2);
        let getDataUserId = JSON.parse(USERID);
        let splitUserId = JSON.parse(getDataUserId)

        if (!this.state.isConnected) {
            Toast.show({text: "Harap periksa koneksi terlebih dahulu",duration:2000,type: "danger"});
        }else{
            if (username != "" && name != "" && phone != null && email != "" && birth != "") {
                if (email.match(mailformat)) {
                    this.setState({loading: true})
                    var getPsw = null;
                    if(password != ""){
                        getPsw = password
                    }
                    let params = {
                        id:splitUserId,username: username,name: name,phone: phone,email:email,password: getPsw,birth:birth,gender:Number(gender)
                    };
                    
                    Api.patch('/users/'+splitUserId, params).then(resp =>{
                        if(resp.status == "ok"){
                            // USERNAME = username;
                            // NAME = name;
                            // EMAIL = email;
                            // BIO = bio;
                            ToastAndroid.show('Profil telah di perbaharui :)', ToastAndroid.SHORT)

                            AsyncStorage.setItem('user_name', username);
                            AsyncStorage.setItem('name', name);
                            AsyncStorage.setItem('email', email);

                            this.props.callReloadData(username)
                            Actions.pop()

                        }else{
                            this.setState({statusButton: false})
                            ToastAndroid.show("Maaf register anda gagal!", ToastAndroid.SHORT)
                            this.setState({loading: false})
                        }
                    })
                    .catch(error => {
                        this.setState({statusButton: false})
                        ToastAndroid.show("'"+ error +"'", ToastAndroid.SHORT)
                    });

                } else {
                    Toast.show({
                        text: "Inputan email tidak valid",
                        duration:2000,
                        type: "danger"
                    });
                }

            } else {
                Toast.show({
                    text: "Inputan tidak boleh kosong",
                    duration:2000,
                    type: "danger"
                });
            }
        }
    }

    viewConnection(){
        if (!this.state.isConnected) {
            return(<View style={styles.offlineContainer}><Text style={styles.offlineText}>Tidak ada koneksi</Text></View>)
        }
    }

    loadingView(){
        if(this.state.loading){
            return(<ActivityIndicator />)
        }
    }

    render() {
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("#F4F4F4", true);
            StatusBar.setTranslucent(true);
        }

        return (

            <Container style={styles.bgBody}>
            
                <Header androidStatusBarColor={"#F4F4F4"} style={default_styles.header}>
                    <Left style={{flex:0.4}}>
                        <TouchableOpacity onPress={() => Actions.pop()}><FontAwesome name="arrow-left" size={18} color="#616161" /></TouchableOpacity>
                    </Left>
                    <Body style={default_styles.vwLfH}>
                        <Title style={default_styles.cl00}>Ubah Profil</Title>
                    </Body>
                    <Right style={{flex:2}}>
                    </Right>
                </Header>

                <StatusBar barStyle="dark-content" />

                {this.viewConnection()}

                <Content>
                    <Form style={styles.form}>
                        
                        {/* Username */}
                        <View style={styles.bodyFormInput}>
                            <View style={styles.searchViewFormInput}><FontAwesome name="user" size={18} color="#616161" /></View>
                            <Input
                                placeholder="Username"
                                placeholderTextColor="#616161" underlineColorAndroid="transparent" selectionColor={"#6f6f6f"} style={styles.searchTextFormInput}
                                autoCapitalize="none"
                                returnKeyType='next'
                                keyboardType="default"
                                value={this.state.username}
                                onSubmitEditing={() => this.refs.nameInput._root.focus()} 
                                onChangeText={(text) => {this.setState({username:text})}}
                            />
                        </View>
                        {/* Name */}
                        <View style={styles.bodyFormInput}>
                            <View style={styles.searchViewFormInput}><FontAwesome name="user-circle" size={18} color="#616161" /></View>
                            <Input
                                ref='nameInput'
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Name"
                                placeholderTextColor="#616161" underlineColorAndroid="transparent" selectionColor={"#6f6f6f"} style={styles.searchTextFormInput}
                                returnKeyType='next'
                                autoCapitalize='none'
                                value={this.state.name}
                                onSubmitEditing={() => this.refs.phoneInput._root.focus()} 
                                onChangeText={(text) => {this.setState({name:text})}}
                            />
                        </View>
                        {/* Phone */}
                        <View style={styles.bodyFormInput}>
                            <View style={styles.searchViewFormInput}><FontAwesome name="phone" size={18} color="#616161" /></View>
                            <Input
                                ref='phoneInput'
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Phone"
                                keyboardType='numeric'
                                autoCapitalize='none'
                                maxLength={13}
                                placeholderTextColor="#616161" underlineColorAndroid="transparent" style={styles.searchTextFormInput} selectionColor={"#6f6f6f"}
                                returnKeyType='next'
                                value={this.state.phone}
                                onSubmitEditing={() => this.refs.emailInput._root.focus()}
                                onChangeText={(text) => {this.setState({phone:text})}}
                            />
                        </View>

                        {/* Email */}
                        <View style={styles.bodyFormInput}>
                            <View style={styles.searchViewFormInput}><FontAwesome name="envelope" size={18} color="#616161" /></View>
                            <Input
                                ref='emailInput'
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Email"
                                keyboardType='email-address' 
                                placeholderTextColor="#616161" underlineColorAndroid="transparent" selectionColor={"#6f6f6f"} style={styles.searchTextFormInput}
                                returnKeyType='next'
                                autoCapitalize='none'
                                value={this.state.email}
                                onSubmitEditing={() => this.refs.addInput._root.focus()}
                                onChangeText={(text) => {this.setState({email:text})}}
                            />
                        </View>

                        {/* Address */}
                        {/* <View style={styles.bodyFormInputArea}>
                            <View style={styles.searchViewFormInput}><FontAwesome name="map-marker" size={18} color="#616161" /></View>
                            <Input
                                ref='addInput'
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Address"
                                placeholderTextColor="#616161" underlineColorAndroid="transparent" selectionColor={"#6f6f6f"} style={styles.searchTextFormInput}
                                returnKeyType='next'
                                multiline
                                autoCapitalize='none'
                                value={this.state.address}
                                onChangeText={(text) => {this.setState({address:text})}}
                            />
                        </View> */}

                        {/* Password */}
                        <View style={styles.bodyFormInput}>
                            <View style={styles.searchViewFormInput}><FontAwesome name="lock" size={18} color="#616161" /></View>
                            <Input
                                ref='passwordInput'
                                textAlign={I18nManager.isRTL ? "right" : "left"}
                                placeholder="Kosongkan password jika tidak ada perubahan"
                                placeholderTextColor="#616161" underlineColorAndroid="transparent" selectionColor={"#6f6f6f"} style={styles.searchTextFormInput}
                                secureTextEntry={true}
                                // returnKeyType='next'
                                autoCapitalize='none'
                                value={this.state.password}
                                onChangeText={(text) => this.setState({password:text})}
                                // onSubmitEditing={() => this.refs.heightInput._root.focus()}
                            />
                        </View>

                        {this.loadingView()}

                        <TouchableOpacity
                            info style={styles.signInbtn}
                            onPress={() => this.updateUser(this.state.username, this.state.name, this.state.phone, this.state.email, this.state.password, this.state.birth, this.state.gender)}
                        >
                            <Text autoCapitalize="words" style={styles.buttongetstarted}>Simpan</Text>
                        </TouchableOpacity>
                    </Form>

                </Content>

            </Container>
        );
    }
}