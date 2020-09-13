import React, { Component } from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
// import Swiper from "react-native-swiper";
// import LinearGradient from "react-native-linear-gradient";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";
// import Stars from 'react-native-stars';
import Api from '../../../libs/Api';

// Screen Styles
import styles from "../../../resources/Themes/DefaultStyles";

export default class ListItemRekomendasi extends Component {

    showDetail(data){
        Actions.gunung_detail({dataProps:data});
    }

    render(){
        var { rowData } = this.props;

        return (
            <View style={styles.rowMain}>
                <Image style={styles.cardBgImage} source={Images.No_image_found} />
                <TouchableOpacity
                    style={styles.cardImage}
                    onPress={() =>
                        this.showDetail(rowData)
                    }
                >
                    <View style={styles.postDetailBg}>
                        <View style={styles.profileDetailBg}>
                            <Text style={styles.itemCardProduct}>{rowData.name}</Text>
                            {rowData.price.dozen ?
                            <View style={styles.watchDistanceBg}>
                                <Text style={styles.itemCardProduct}>Rp. {rowData.price.dozen} (/dozen)</Text>
                            </View>
                            : null }
                            {rowData.price.box ?
                            <View style={styles.watchDistanceBg}>
                                <Text style={styles.itemCardProduct}>Rp. {rowData.price.box} (/box)</Text>
                            </View>
                            : null }
                            {rowData.price.unit ?
                            <View style={styles.watchDistanceBg}>
                                <Text style={styles.itemCardProduct}>Rp. {rowData.price.unit} (/pcs)</Text>
                            </View>
                            : null }
                            {rowData.price.pack ?
                            <View style={styles.watchDistanceBg}>
                                <Text style={styles.itemCardProduct}>Rp. {rowData.price.pack} (/pack)</Text>
                            </View>
                            : null }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}