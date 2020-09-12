import React, { Component } from "react";
import {
  View,
  AsyncStorage
} from "react-native";

import { Router, Scene} from 'react-native-router-flux';

import Example from '../MainActivity/index';

export default class BaseActivityController extends Component {

    componentDidMount(){
        
        AsyncStorage.getItem('has_walk_through').then((has_walk_through) => {
            
            if(has_walk_through != null){
                HASINTRO = has_walk_through
            }
            
            if(HASINTRO == null){
                this.props.navigation.navigate("WalkThroughScreen")
            }else{
                this.props.navigation.navigate("SigninScreen")
            }

        })
        
    }

    render(){

        // if (!this.state.isLoaded) {
            return (
            // <ActivityIndicator />
            <View></View>
            )
        // }else{
            // return (
            //     <Router>

            //         <Scene key='root2'>
                        
            //             <Scene key="main_activity" hideNavBar initial component={Example}/>

            //         </Scene>
            //     </Router>
            // );

        // }
        
    }

}