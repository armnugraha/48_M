import { StyleSheet, I18nManager } from 'react-native';

// Screen Styles
import { Metrics, Fonts, Colors } from "../../../resources/Themes";

const styles = StyleSheet.create({

    main: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        backgroundColor: Colors.snow,
        flexDirection: 'column'
    },

  header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.12,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.03),
		elevation: 0,
		paddingLeft:(Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},
    backArrow: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
	left: {
		flex: 1.5,
		backgroundColor: Colors.transparent,
	},

	menuIconWhite: {
		justifyContent: 'center',
		alignItems: 'flex-start'
	},

	body: {
		flex: 2.5,
		alignItems: 'center',
		backgroundColor: Colors.transparent
	},

	textTitle: {
		color: '#363636',
		fontSize: Fonts.moderateScale(17),
		marginTop: (Metrics.HEIGHT * 0.001),
		alignSelf: 'center',
		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},

	right: {
		flex: 0.5
	},

  dividerHorizontal:{
    height: (Metrics.HEIGHT) * 0.001,
    width: Metrics.WIDTH * 0.950,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignSelf:'center',
    alignItems: 'center'
  },

  headerContainer: {
    marginTop: (Metrics.HEIGHT) * 0.001,
  	width:(Metrics.WIDTH),
  	padding: (Metrics.HEIGHT * 0.017),
  	backgroundColor: Colors.snow,
  },

  profileContainer: {
  	paddingBottom: (Metrics.HEIGHT * 0.03),
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  },

  profileBodySec: {
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	alignItems: 'center'
  },

  profileImage: {
  	height:(Metrics.HEIGHT * 0.08),
  	width:(Metrics.HEIGHT * 0.08),
  	borderRadius:(Metrics.HEIGHT * 0.04),
  },

  profileDetail: {
  	marginLeft: (Metrics.WIDTH * 0.03)
  },

  profileName: {
  	fontFamily: Fonts.type.sfuiDisplaySemibold,
  	fontSize: Fonts.moderateScale(17),
  	color:'#363636',
  },

  post: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	fontSize: Fonts.moderateScale(12),
  	color:'#b7b7b7',
  	backgroundColor: Colors.transparent,
  	marginTop: (Metrics.HEIGHT * 0.004),
    textAlign: 'left'
  },

  activeButton: {
  	height:(Metrics.HEIGHT * 0.055),
  	width:(Metrics.WIDTH * 0.3),
  	borderRadius:(Metrics.HEIGHT * 0.0275),
  	backgroundColor: '#0691ce',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },

  normalButton: {
  	height:(Metrics.HEIGHT * 0.055),
  	width:(Metrics.WIDTH * 0.42),
  	marginTop:(Metrics.HEIGHT * 0.016),
  	borderRadius:(Metrics.HEIGHT * 0.0275),
  	borderWidth: 1.5,
  	borderColor: '#59c264',
  	alignItems: 'center',
  	justifyContent: 'center',
  	overflow: 'hidden'
  },

  activeButtonTxt: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	fontSize: Fonts.moderateScale(17),
  	color: 'white',
  },

  normalButtonTxt: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	fontSize: Fonts.moderateScale(17),
  	color: '#59c264',
  },

  contentCircle:{
    width: 38,
    height: 38,
    borderRadius: 50,
    zIndex: 2,
    backgroundColor:'#59c264',
  },
  textContent:{
    color:"#FFF",
    textAlign: 'center',
    top:"25%"
  },

  separatorStyle: {
  	height: 0.5,
  	backgroundColor: '#d7d7d7'
  },

  followContainer: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
    borderRadius: (Metrics.HEIGHT) * 0.060,
    borderWidth: 1,
    borderColor: '#e1e1e1'
  },

  followSec: {
  	flex:1,
  	alignItems: 'center',
  	justifyContent: 'center',
    paddingTop: (Metrics.HEIGHT * 0.008),
    paddingBottom: (Metrics.HEIGHT) * 0.008,
  },

  followCount: {
  	fontFamily: Fonts.type.sfuiDisplaySemibold,
  	fontSize: Fonts.moderateScale(17),
  	color: '#363636'
  },

  followText: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	fontSize: Fonts.moderateScale(12),
  	color: '#959595'
  },

  verticalSeparator:{
    width: (Metrics.HEIGHT) * 0.001,
    backgroundColor:'#e1e1e1',
    height: (Metrics.HEIGHT) * 0.07
  },

  contentBg:{
    backgroundColor: '#e6e6e6'
  },

  cardBg: {
    backgroundColor: Colors.snow,
    width: (Metrics.WIDTH),
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02
  },

  aboutLabelTxt: {
    margin: (Metrics.WIDTH) * 0.03,
    color: "#595959",
    fontSize: Fonts.moderateScale(14),
    textAlign: 'left'
  },

  aboutDescriptionTxt: {
    color: "#d2d2d2",
    fontSize: Fonts.moderateScale(14),
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.WIDTH) * 0.03,
    textAlign: 'left'
  },

  fbTwitterGoogleLinkedInView:{
    flexDirection: 'row',
    marginTop: (Metrics.WIDTH) * 0.04,
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.WIDTH) * 0.04
  },

  fbView:{
    width: (Metrics.WIDTH) * 0.22,
    alignItems: 'center',
    justifyContent: 'center'
  },

  googleImg:{
    height: (Metrics.HEIGHT) * 0.035,
    width: (Metrics.WIDTH) * 0.070,
    resizeMode: 'contain'
  },

  connectTextView:{
    margin: (Metrics.WIDTH) * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  connectionPhotosTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15)
  },

  connectCountView:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  connectionPhotosCountTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    marginRight: (Metrics.WIDTH) * 0.012
  },

  connectionImgView:{
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    marginTop: (Metrics.WIDTH) * 0.02,
    marginBottom: (Metrics.WIDTH) * 0.04
  },

  connectImg:{
    width: (Metrics.WIDTH) * 0.176,
    flexDirection: 'row',
    marginLeft: (Metrics.HEIGHT) * 0.004
  },

  connectionUserImg: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    resizeMode: 'cover'
  },

  socialBg: {
  	width:(Metrics.HEIGHT*0.035),
  	height:(Metrics.HEIGHT*0.035),
  	borderRadius:(Metrics.HEIGHT*0.0175),
  	borderWidth: 1.5,
  	borderColor: Colors.snow,
  	right:(Metrics.WIDTH*0.015),
  	bottom:(Metrics.HEIGHT*0.009),
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center'
  },

  photodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: (Metrics.WIDTH) * 0.03
  },

  photoImgView:{
   flexDirection: 'row',
   margin: (Metrics.WIDTH) * 0.03
  },

  galleryImg: {
    width: (Metrics.WIDTH) * 0.3,
    height: (Metrics.HEIGHT) * 0.18,
    resizeMode: 'cover'
  },

  imgView:{
    width: (Metrics.WIDTH) * 0.02,
    height: (Metrics.HEIGHT) * 0.18,
    backgroundColor: Colors.transparent
  },

  details:{
    backgroundColor: 'white',
    paddingLeft: (Metrics.WIDTH*0.016)
  },

  detailNew:{
    backgroundColor: 'white',
    marginLeft: (Metrics.WIDTH*0.048)
  },

    listItem: {
        justifyContent: 'space-between',
        // height:(Metrics.HEIGHT*0.076),
        borderColor: '#e5e5e5'
    },

    listItemText: {
        color:'#6f6f6f',
        fontFamily:'SFUIDisplay-Regular',
        fontSize:15,
        marginLeft: (Metrics.WIDTH * 0.06)
    },

    listRight: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    listRightEmail: {
        color:'#6f6f6f',
        fontFamily:'SFUIDisplay-Regular',
        fontSize:15,
        bottom:16,
        marginTop:6
    },

    arrowForword: {
        color:'#d6d6d6',
        paddingLeft: I18nManager.isRTL ? 0 : (Metrics.WIDTH*0.02),
        paddingRight: I18nManager.isRTL ? (Metrics.WIDTH*0.02) : 0,
        fontSize: 20
    },

    iconLeft:{
      color:'#6f6f6f',
      paddingLeft: I18nManager.isRTL ? 0 : (Metrics.WIDTH*0.02),
      paddingRight: I18nManager.isRTL ? (Metrics.WIDTH*0.02) : 0,
      fontSize: 20
    },

    listFooter: {
        justifyContent: 'center',
        height:(Metrics.HEIGHT*0.076),
        borderColor: 'transparent'
    },

    listFooterText: {
        color:'#b52424',
        fontFamily:'SFUIDisplay-Regular',
        fontSize:15
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

});

export default styles;