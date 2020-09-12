import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  AsyncStorage,
  I18nManager,
  BackHandler,
  TextInput,
  FlatList
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header,
  Title,
  Separator
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import Stars from 'react-native-stars';
import Api from '../../../libs/Api';

// Screen Styles
import styles from "./styles";

const cardBgOne = { uri: "https://i.imgur.com/6gs6CWz.png" };

export default class ListItemData extends Component {

  showDetail(data){
    Actions.gunung_detail({dataProps:data});
  }

  componentDidMount(){
    // alert(JSON.stringify(this.props))
  }
  
  render(){
    var {img} = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.listMainview}
      >
        <View style={{backgroundColor:"#FFF", borderRadius: 8}}>
          <ImageBackground source={Images.No_image_found} style={styles.destinationimg}>
            <Image
                source={img}
                style={styles.destinationimg}
            >
              <TouchableOpacity />
            </Image>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }

}