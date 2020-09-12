import React, { Component } from "react";
import {View,Text,ImageBackground,TouchableOpacity,Image} from "react-native";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Images } from "../../../resources/Themes";
import styles from "../../../resources/Themes/DefaultStyles";

const cardBgOne = { uri: "https://i.imgur.com/6gs6CWz.png" };

export default class ListItemData extends Component {

    showDetail(data){
        Actions.gunung_detail({dataProps:data, img: cardBgOne});
    }

    render(){
        var {thumb,name,address,mount_announcements} = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.listMainview}
                onPress={() => this.showDetail(this.props)}>
                <View style={styles.listCard}>
                    <ImageBackground source={Images.No_image_found} style={styles.destinationimg} imageStyle={{ borderTopLeftRadius: 16, borderTopRightRadius:16 }}>
                        <Image source={{uri: thumb}} style={styles.destinationimg} />
                    </ImageBackground>
                    {mount_announcements.length != 0 ?
                        <TouchableOpacity style={styles.normalButton}><Text style={styles.normalButtonTxt}>Ditutup Sementara</Text></TouchableOpacity>
                    : null}
                    <Text numberOfLines={1} style={styles.destinationnamelist}>{name}</Text>
                    <View style={styles.placeDistanceBg}>
                        <View style={styles.mapPin}><FontAwesome name="map-marker" size={12} color="#b7b7b7" /></View>
                        <Text numberOfLines={1} style={styles.placeDistanceTxt}>{address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}