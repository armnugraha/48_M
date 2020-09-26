import React, {Component} from 'react';
import {Platform, StatusBar, Image, View, PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Images } from "./src/resources/Themes";
import { Root } from "native-base";
import App from './src/App';
// import './src/stores/global';
import { Provider as MobXProvider} from 'mobx-react';
import  * as Store from './src/stores';
import Home from './src/screens/MainActivity/index.js';
import HomeAdmin from './src/screens/MainActivity/index_admin';

export default class admingrosir extends Component {

    constructor(){
        super();this.splashScreen();this.requestCameraPermission();this.checkLogin()
        this.state = {isLoading: false,status_login: false,pengelola: false};
    }
    
    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
                {'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                            'so you can take awesome pictures.'}
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {} else {}
        } catch (err) {}
    }
    
    async checkLogin() {

        AsyncStorage.getItem('pengelola').then((token) => {
            if(token != null){this.setState({pengelola: true})}
        })

        AsyncStorage.getItem('user_id').then((token) => {
            if(token != null){USERID = token}
            if(USERID != null){this.setState({status_login: true})}
        })
    
        AsyncStorage.getItem('role_id').then((token) => {
            if(token != null){ROLEID = token}
        })

        AsyncStorage.getItem('mount_id').then((token) => {
            if(token != null){MOUNTID = token}
        })

        AsyncStorage.getItem('mount_name').then((token) => {
            if(token != null){MOUNTNAME = token}
        })
    
        AsyncStorage.getItem('user_name').then((token) => {
            if(token != null){USERNAME = token}
        })
    
        AsyncStorage.getItem('email').then((token) => {
            if(token != null){EMAIL = token}
        })
    
      }
    
    splashScreen(){
        setTimeout(() => {this.setState({isLoading:true})}, 4000)
    }

    render (){
        if(!this.state.isLoading){
            return (
				<View style={{flex: 1,flexDirection: "row",alignItems: "stretch"}}><Image style={{flex: 1,width: null,height: null,resizeMode:"contain"}} source={Images.main_logo_e} /></View>
			)
        }

        if (this.state.status_login) {
            // if (this.state.pengelola) {
            //     return(<Root><HomeAdmin/></Root>)
            // }
            return(
                <Root>
                    <StatusBar
                        backgroundColor='#F4F4F4'
                        barStyle="dark-content"
                        translucent={true}
                    />
                    <MobXProvider store={Store}>
                        <Home />
                    </MobXProvider>
                </Root>
            )
        }
    
        return (
            <Root>
                <StatusBar
                    backgroundColor='#F4F4F4'
                    barStyle="dark-content"
                    translucent={true}
                />
                <MobXProvider store={Store}>
                    <App />
                </MobXProvider>
            </Root>
        );
    };
};