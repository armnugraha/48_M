import { Platform, StyleSheet } from "react-native";
import { Images, Metrics, Fonts, Colors } from "../../../resources/Themes";

const styles = StyleSheet.create({

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    position: 'absolute',
    bottom: 0
  },
  imgHeader: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.46
  },
  mainviewrow:{
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center'
  },
  mainimgrow:{
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06
  },
  backArrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  row:{
    marginLeft: 15,
    flexDirection: 'column'
  },
  details:{
    flexDirection:'row',
    alignItems:'center'
  },
  name:{
    color: "#363636",
    fontSize: Fonts.moderateScale(15)
  },
  status:{
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(12),
    alignSelf: 'flex-end'
  },
  left:{
    flex:1
  },
  body:{
    flex:2, alignItems:'center'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },
  time:{
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(13),
    marginLeft: 2
  },
  descrow:{
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    marginTop: 3,
    textAlign: 'left'
  },
  mainview:{
    borderRadius: 10,
    backgroundColor:'#FFFFFF',
    top:50,
    marginBottom: 10
  },
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "transparent",
    flexDirection: 'column'
  },

  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomWidth:0,
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
    //remove border bottom
    elevation: 0,
    shadowOpacity: 0,
},

  profileImg: {
    width: (Metrics.WIDTH) * 0.26,
    height: (Metrics.WIDTH) * 0.26,
    borderRadius: (Metrics.WIDTH) * 0.13,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 10
  },

  profileImgHeader: {
    width: (Metrics.WIDTH) * 0.42,
    height: (Metrics.WIDTH) * 0.42,
    borderRadius: (Metrics.WIDTH) * 0.26,
    zIndex: 10,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginTop: (Metrics.HEIGHT) * 0.008
  },

  profileDataBg: {
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center',
    flexDirection: 'column',
    marginTop: (Metrics.HEIGHT) * 0.03
  },

  personalInfoBg: {
      flexDirection: 'column',
      marginTop: (Metrics.HEIGHT) * 0.08,
  },

  nameTxt: {
    color: "#363636",
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(20),
    alignSelf: 'center'
  },

  designationTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    marginTop: 3,
    alignSelf: 'center'
  },

  followBg: {
    borderColor: "#0691ce",
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    width: (Metrics.WIDTH) * 0.40,
    height: (Metrics.HEIGHT) * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.02,
  },

  followTxt: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    color: "#0691ce",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Metrics.WIDTH) * 0.28,
  },

  dividerHorizontal: {
    backgroundColor: "#ebebeb",
    height: 1,
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center'
  },

  countBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.02,
    marginRight: (Metrics.WIDTH) * 0.02,
    marginTop: (Metrics.WIDTH) * 0.04,
    marginBottom: (Metrics.WIDTH) * 0.04,
  },

  titleCountBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.30,
  },

  countTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    textAlign: 'center'
  },

  titleTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    textAlign: 'center'
  },


  descTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    marginLeft: (Metrics.WIDTH) * 0.02,
    marginRight: (Metrics.WIDTH) * 0.02,
    textAlign: 'center',
    marginTop: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.WIDTH) * 0.03,
  },

  viewMoreLessTxt: {
    color: "#0691ce",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.SFUIDisplayRegular
  },

  SuggestedPeopleBg: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: (Metrics.WIDTH) * 0.03,
    marginTop: 50,
    marginBottom: 10,
    justifyContent: 'space-between'
  },

  suggestConnectionBg: {
    flexDirection: 'column',
  },

  suggestConnectionTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    textAlign: 'left'
  },

  peopleTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    marginTop: 5
  },

  suggestedPeopleImg: {
    width: (Metrics.WIDTH * 0.12),
    height: (Metrics.WIDTH * 0.12),
    borderRadius: (Metrics.WIDTH * 0.06),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: 'cover',
  },

  suggestedPeopleImgOther: {
    width: (Metrics.WIDTH * 0.12),
    height: (Metrics.WIDTH * 0.12),
    borderRadius: (Metrics.WIDTH * 0.06),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: 'cover',
    marginLeft: -10
  },

  detailProfileBg: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: (Metrics.WIDTH) * 0.03,
    marginBottom: 10
  },

  textName: {
    textAlign:"center",
    fontSize: Fonts.moderateScale(24),
  },

  textMotiv: {
    textAlign:"center",
    fontSize: Fonts.moderateScale(14),
    fontStyle:"italic",
    color: "#736B6B"
  },

  morePicker: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: (Metrics.HEIGHT) * 0.03,
    width: undefined
  },

  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: Metrics.HEIGHT * 0.014,
    // paddingBottom: Metrics.HEIGHT * 0.008,
    marginLeft: Metrics.HEIGHT * 0.002,
    marginRight: Metrics.HEIGHT * 0.01
  },

  listMainview: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.345,
        width: Metrics.WIDTH * 0.47
      },
      android: {
        height: Metrics.HEIGHT * 0.322,
        width: Metrics.WIDTH * 0.485,
        paddingLeft: Metrics.HEIGHT * 0.014
      }
    }),
    borderRadius: Metrics.HEIGHT * 0.008,
    borderWidth:1,
    borderColor:"transparent"
    // borderColor: "#bec1c2"
  },

  destinationimg: {
    // width: Metrics.WIDTH * 0.47,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.27,
        borderRadius: 1.8
      },
      android: {
        height: Metrics.HEIGHT * 0.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        // borderWidth:1,
        borderColor:"transparent"
      }
    })
  },

});

export default styles;