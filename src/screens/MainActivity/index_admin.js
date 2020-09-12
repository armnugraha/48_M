import React, { Component } from "react";
import {Platform,StyleSheet,Text,View,StatusBar,TouchableOpacity,BackHandler,I18nManager,Alert} from "react-native";
import { Container } from "native-base";
import {Scene,Router,Actions,Reducer,Overlay,Tabs,Stack,Lightbox} from "react-native-router-flux";
import TabIcon from "./TabIcon";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Signin from '../BaseActivity/Signin/index';
import Home from "./Home/index";
import Kosong from "./kosong";
import SignUpScreen from "../BaseActivity/SignUp";
import ProfileEditScreen from "./ProfileEdit";
import AdminScreen from "./index_admin";
import ProfileScreen from "./Profile/index";

const styles = StyleSheet.create({
    container: {flex: 1,backgroundColor: "transparent",justifyContent: "center",alignItems: "center"},
    tabBarStyle: {backgroundColor: "#F4F4F4",height: 50,
    borderTopColor: '#FFF',
    borderTopWidth: 1,
    opacity: 0.98,
    justifyContent:'space-between'},
    tabBarSelectedItemStyle: {backgroundColor: "#ddd"}
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: "#F5FCFF",shadowOpacity: 1,shadowRadius: 3
});

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === "android" ? "mychat://mychat/" : "mychat://";

const onBackPress = () => {
    if (Actions.state.index !== 0) {return false;}
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{text: 'Cancel',style: 'cancel'
            }, {
            text: 'OK',
            onPress:()=> BackHandler.exitApp(),
            }, ], {
            cancelable: false
        }
    )
    return true;
};

export default class Example extends Component {
    componentWillMount(){
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
        if(ROLEID[2] == 2){
            this.setState({admin:true})
        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate("Login");
        return true;
    };

    constructor(props) {
        super(props);
        this.state = {title: "Nearby",cek:true,admin:false};
    }

    render() {
        StatusBar.setBarStyle("light-content", true);
        if (Platform.OS == "android") {
            StatusBar.setBackgroundColor("#F4F4F4", true);
            StatusBar.setTranslucent(true);
        }
    
        return (
            <Container>
                <StatusBar barStyle="light-content" />

                <Router
                    createReducer={reducerCreate} getSceneStyle={getSceneStyle} uriPrefix={prefix} backAndroidHandler={onBackPress}
                >
                    <Overlay key="overlay">
                        <Lightbox key="lightbox">

                            <Stack hideNavBar key="root" titleStyle={{ alignSelf: "center" }}>
                            
                                <Scene key="MainActivityScreen" component={Example} hideNavBar />
                                <Scene key="AdminMainActivity" component={AdminScreen} hideNavBar />

                                <Scene key="SigninScreen" component={Signin} hideNavBar />
                                <Scene key="SignUpScreen" component={SignUpScreen} hideNavBar />

                                <Scene key="profile" component={ProfileScreen} />
                                <Scene key="profile_edit" component={ProfileEditScreen} hideNavBar/>

                                <Scene key="kos" component={Kosong} hideNavBar />

                                <Scene hideNavBar initial panHandlers={null} key="mainTab">
                                    <Tabs
                                        key="tabbar" swipeEnabled={false} legacy={true} showLabel={false} tabBarStyle={styles.tabBarStyle} activeBackgroundColor="white" inactiveBackgroundColor="white"tabBarPosition={"bottom"}
                                    >
                                        <Stack
                                            initial
                                            key="tab_1" title="Home" tabBarLabel="TAB #1" inactiveBackgroundColor="#F4F4F4" activeBackgroundColor="#F4F4F4" icon={TabIcon} titleStyle={{ color: "green", alignSelf: "center" }}
                                        >
                                            <Scene
                                                key="tab1_1" component={Home} onRight={() => alert("Right button")} rightTitle="Right" hideNavBar
                                            />
                                        </Stack>
                                        <Stack key="tab_4" title="Navigation" icon={TabIcon}>
                                            <Scene
                                                key="tab_4_1" component={NavigationScreen} title="Favorite" hideNavBar icon={TabIcon}
                                            />
                                        </Stack>
                                        <Stack key="tab_5" title="Profile" icon={TabIcon}>
                                            <Scene
                                                key="tab_5_1" component={ProfileScreen} title="Profile" icon={TabIcon} hideNavBar
                                            />
                                        </Stack>
                                        <Stack key="tab_6" title="Pengelola" icon={TabIcon}>
                                            <Scene
                                                key="tab_6_1" component={PengelolaEditScreen} title="Pengelola" hideNavBar icon={TabIcon}
                                            />
                                        </Stack>
                                    </Tabs>
                                </Scene>

                            </Stack>
                        </Lightbox>
                    </Overlay>
                </Router>
            </Container>
        );
    }
}