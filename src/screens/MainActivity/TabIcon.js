import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Fonts, Metrics, Colors, Images } from "../../resources/Themes";

const styles = StyleSheet.create({
  tabItemBg: {
    alignItems: "center",
    marginTop: Metrics.WIDTH * 0.035,
    marginBottom: Metrics.WIDTH * 0.035
  },

  tabIcon: {
    justifyContent: "center",
    resizeMode: "contain"
  }
});

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string
};

const TabIcon = props => {
  var myTabIcon = [];
  if (props.title == "Home") {
    myTabIcon.push(
      <View style={styles.tabItemBg} key={1}>
        {/* <Image
          source={props.focused ? Images.nearByActiveIcon : Images.nearByIcon}
          style={[
            {
              height: Metrics.WIDTH * 0.052,
              width: Metrics.WIDTH * 0.03,
              marginTop: -2
            },
            styles.tabIcon
          ]}
        /> */}
        <FontAwesome name="home" size={32} color={props.focused ? "#59c264" : "#CCCCCC"} />
        {/* <Text
          style={{
            color: props.focused ? "#59c264" : "grey",
            marginTop: Metrics.WIDTH * 0.008,
            fontSize: Fonts.moderateScale(13)
          }}
        >
          {props.title}
        </Text> */}
      </View>
    );
  } 
  // else if (props.title == "Message") {
  //   myTabIcon.push(
  //     <View key={2} style={styles.tabItemBg}>
  //       <Image
  //         source={props.focused ? Images.messageActiveIcon : Images.messageIcon}
  //         style={[
  //           { height: Metrics.WIDTH * 0.045, width: Metrics.WIDTH * 0.05 },
  //           styles.tabIcon
  //         ]}
  //       />
  //       <Text
  //         style={{
  //           color: props.focused ? "#ff7354" : "grey",
  //           marginTop: Metrics.WIDTH * 0.008,
  //           fontSize: Fonts.moderateScale(13)
  //         }}
  //       >
  //         {props.title}
  //       </Text>
  //     </View>
  //   );
  // } 
  else if (props.title == "Pengelola") {
    myTabIcon.push(
      <View key={3} style={styles.tabItemBg}>
        {/* <Image
          source={
            props.focused ? Images.ic_mountain : Images.ic_mountain_transparent
          }
          style={{
            // height: Metrics.WIDTH * 0.045,
            // width: Metrics.WIDTH * 0.045,
            justifyContent: "center",
            resizeMode: "contain"
          }}
        /> */}
        <FontAwesome name="cogs" size={32} color={props.focused ? "#59c264" : "#CCCCCC"} />
        {/* <Text
          style={{
            color: props.focused ? "#ff7354" : "grey",
            marginTop: Metrics.WIDTH * 0.008,
            fontSize: Fonts.moderateScale(13)
          }}
        >
          {props.title}
        </Text> */}
      </View>
    );
  } 
  else if (props.title == "Navigation") {
    myTabIcon.push(
      <View key={3} style={styles.tabItemBg}>
        <FontAwesome name="location-arrow" size={32} color={props.focused ? "#59c264" : "#CCCCCC"} />
        {/* <Text
          style={{
            color: props.focused ? "#59c264" : "grey",
            marginTop: Metrics.WIDTH * 0.008,
            fontSize: Fonts.moderateScale(13)
          }}
        >
          {props.title}
        </Text> */}
      </View>
    );
  } else if (props.title == "Profile") {
    myTabIcon.push(
      <View key={3} style={styles.tabItemBg}>
        <FontAwesome name="user-circle" size={32} color={props.focused ? "#59c264" : "#CCCCCC"} />
        {/* <Text
          style={{
            color: props.focused ? "#59c264" : "grey",
            marginTop: Metrics.WIDTH * 0.008,
            fontSize: Fonts.moderateScale(13)
          }}
        >
          {props.title}
        </Text> */}
      </View>
    );
  } else {
    myTabIcon.push(
      <View key={4} style={{ alignItems: "center" }}>
        <FontAwesome name="clock" size={16} color={props.focused ? "#59c264" : "grey"} />
        <Text
          style={{
            color: props.focused ? "#59c264" : "grey",
            marginTop: Metrics.WIDTH * 0.008,
            fontSize: Fonts.moderateScale(13)
          }}
        >
          {props.title}
        </Text>
      </View>
    );
  }

  return myTabIcon;
};

TabIcon.propTypes = propTypes;

export default TabIcon;
