import { Platform, StyleSheet, Dimensions } from "react-native";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Fonts.moderateScale(25)
      }
    }),
    elevation: 0
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  backArrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  bgBody:{
    backgroundColor: "#FFF"
  },
  logosec: {
    width: Metrics.WIDTH,
    height: Metrics.WIDTH * 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: Metrics.WIDTH * 0.08
  },
  logostyle: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.88,
    height: Metrics.WIDTH * 0.2
  },
  form: {
    width: Metrics.WIDTH,
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Metrics.WIDTH * 0.008
  },
  inputStyle: {
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8
  },
  inputmain: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow,
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8,
    backgroundColor: "#E2E2E2"
  },
  signInbtn: {
    backgroundColor: "#51B252",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    // 0.8
    width: Metrics.WIDTH * 0.6,
    marginTop: 35,
    marginBottom: Metrics.HEIGHT * 0.032
  },
  buttongetstarted: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: Colors.snow
  },
  buttongettext: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: Colors.white,
    marginTop: 25
  },
  bottomView: {
    // marginTop: 30
    
  },
  fbButton: {
    backgroundColor: "#3b5998",
    height: Metrics.HEIGHT * 0.07,
    width: Metrics.WIDTH * 0.8,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  fbview: {
    // flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: 'flex-end',
		alignItems: 'center',
    paddingBottom: Fonts.moderateScale(20),
    height: (Metrics.HEIGHT * 0.12),
  },
  fbButtonText: {
    color: "#fff",
    fontSize: Fonts.moderateScale(17),
    left: 10,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignItems: "center",
    alignSelf: "center"
  },
  sgButton: {
    backgroundColor: "#E2E2E2",
    height: Metrics.HEIGHT * 0.07,
    // 0.8
    width: Metrics.WIDTH * 0.6,
    borderRadius: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  sgview: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  sgButtonText: {
    color: "#F37935",
    fontSize: Fonts.moderateScale(17),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignItems: "center",
    alignSelf: "center"
  },
  sgText: {
    color: "#000000",
    fontSize: Fonts.moderateScale(17),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignItems: "center",
    alignSelf: "center"
  },
  bottomText: {
    width: "100%",
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row"
  },

  bottomText01: {
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  bottomText02: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#969696"
  },
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    position: 'absolute',
    top: 24,
    zIndex:1
  },
  offlineText: { color: '#fff' },

  bodyFormInput: {
    // flex: 3.7,
    borderColor: "transparent",
    // justifyContent: "center",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,

    flexDirection:'row',
    backgroundColor: "transparent",
    borderRadius:5,
    height: (Metrics.HEIGHT * 0.072),
    marginTop: (Metrics.HEIGHT * 0.012),
    borderColor:'#E2E2E2',
    borderWidth: 2,
    borderRadius:20,
    backgroundColor:"#E2E2E2"
  },

  bodyFormInputArea: {
    borderColor: "transparent",
    justifyContent: "center",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,

    flexDirection:'row',
    backgroundColor: "transparent",
    borderRadius:5,
    height: (Metrics.HEIGHT * 0.124),
    marginTop: (Metrics.HEIGHT * 0.012),
    borderColor:'#E2E2E2',
    borderWidth: 2,
    borderRadius:20,
    backgroundColor:"#E2E2E2"
  },

  searchViewFormInput:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:"center",
    alignSelf:"center",
    marginLeft: (Metrics.WIDTH) * 0.03,
    backgroundColor: 'transparent',
    height:30
  },

  searchTextFormInput:{
    flex:2,
    // height:(Metrics.HEIGHT) * 0.066,
    marginLeft: (Metrics.WIDTH) * 0.02,
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#616161",
    alignSelf:'center',
    backgroundColor: 'transparent',
  },

});
export default styles;