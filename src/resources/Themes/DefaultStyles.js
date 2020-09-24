import { Platform, StyleSheet, Dimensions } from "react-native";
import { Images, Metrics,Fonts,Colors } from "./";

const styles = StyleSheet.create({
    main: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        flexDirection: "column"
    },

    header: {
        backgroundColor: '#FFF',
        height: (Metrics.HEIGHT * 0.14),
        borderBottomWidth: 2,
        borderBottomColor:"#F4F4F4",
        opacity: 0.98,
        paddingTop: (Metrics.HEIGHT * 0.03),
        elevation: 0,
        paddingLeft: (Metrics.WIDTH * 0.05),
        paddingRight: (Metrics.WIDTH * 0.05),
    },
    vwLfH:{
        flex:1
    },
    headerBG: {
        height: (Metrics.HEIGHT * 0.1),
        width: Metrics.WIDTH,
    },

    headerText:{
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(18),
        color: "#bfbfbf",
        marginLeft: (Metrics.HEIGHT) * 0.015
    },

    searchHeaderView:{
        borderRadius: 5,
        backgroundColor: Colors.snow,
        flexDirection: 'row',
        backgroundColor: 'green'
    },

    rowHeaderView:{
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.015,
        width: (Metrics.WIDTH) * 0.84,
        alignSelf: 'center',
    },

    rowHeaderNameView:{
        flexDirection: 'column',
        marginLeft: (Metrics.WIDTH) * 0.03
    },

    left: {
        flex: 1
    },

    body: {
        flex: 3.7,
        flexDirection:'row',
        backgroundColor: "transparent",
        borderRadius:5,
        height: (Metrics.HEIGHT * 0.055),
        marginTop: (Metrics.HEIGHT * 0.012),
        borderColor:'#EAE2E2',
        borderWidth: 2,
        borderRadius:20
    },

    bodySearch: {
        // flex: 3.7,
        flexDirection:'row',
        backgroundColor: "transparent",
        borderRadius:5,
        height: (Metrics.HEIGHT * 0.080),
        marginTop: (Metrics.HEIGHT * 0.012),
        borderColor:'#EAE2E2',
        borderWidth: 2,
        borderRadius:16
    },

    searchView:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft: (Metrics.WIDTH) * 0.03,
        backgroundColor: 'transparent',
        height: (Metrics.HEIGHT * 0.080)
    },

    closeView:{
        justifyContent:'center',
        alignItems:'center',
        marginRight: (Metrics.WIDTH) * 0.04,
        backgroundColor: 'transparent',
        height: (Metrics.HEIGHT * 0.080)
    },

    searchText:{
        flex:2,
        height:(Metrics.HEIGHT) * 0.066,
        marginLeft: (Metrics.WIDTH) * 0.02,
        fontSize: Fonts.moderateScale(15),
        fontFamily: Fonts.type.sfuiDisplayRegular,
        color: "#616161",
        alignSelf:'center',
        backgroundColor: 'transparent'
    },

    right: {
        flex: 1,
        alignItems: "center"
    },

    titleTxt: {
        color: Colors.snow
    },

    titleView:{
        paddingTop: (Metrics.HEIGHT * 0.032),
        backgroundColor: Colors.snow
    },

    titleText:{
        marginHorizontal: (Metrics.WIDTH * 0.1),
        // marginBottom: (Metrics.HEIGHT * 0.016),
        marginLeft: (Metrics.WIDTH) * 0.048,
        fontSize: Fonts.moderateScale(18),
        color:'#363636',
        fontFamily: Fonts.type.sfuiDisplayRegular
    },

    titleTextSearch:{
        marginHorizontal: (Metrics.WIDTH * 0.001),
        fontSize: Fonts.moderateScale(18),
        color:'#363636',
        fontFamily: Fonts.type.sfuiDisplayRegular
    },

    filterTxt: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16)
    },

    imgContainer: {
        width: Metrics.WIDTH * 0.52,
        height: Metrics.HEIGHT * 0.63,
        alignItems: "center",
        justifyContent: "center"
    },

    cardImage: {
        borderRadius: 6,
        height: Metrics.HEIGHT * 0.17,
        width: Metrics.WIDTH * 0.4,
    },

    cardBgImage: {
        borderRadius: 6,
        height: Metrics.HEIGHT * 0.17,
        width: Metrics.WIDTH * 0.4,
    },

    rowMainFilter: {
        marginHorizontal: Metrics.WIDTH * 0.002,
        marginLeft: Metrics.WIDTH * 0.032,
        marginTop: Metrics.HEIGHT * 0.032
    },

    cardFilter: {
        borderRadius: 6,
        height: Metrics.HEIGHT * 0.08,
        width: Metrics.WIDTH * 0.24,
    },

    cardFilterBg: {
        borderRadius: 6,
        height: Metrics.HEIGHT * 0.08,
        width: Metrics.WIDTH * 0.24
    },

    rowMain: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        // marginTop: Metrics.HEIGHT * 0.1
    },

    profileImage: {
        width: Metrics.WIDTH * 0.08,
        height: Metrics.WIDTH * 0.08,
        borderRadius: Metrics.WIDTH * 0.04,
        borderColor: Colors.snow,
        borderWidth: 1
    },

    likeIcon: {
        width: Metrics.WIDTH * 0.06,
        height: Metrics.WIDTH * 0.05,
        resizeMode: "cover",
        marginTop: -(Metrics.WIDTH * 0.02)
    },

    nameTxt: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.snow,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        backgroundColor: Colors.transparent
    },

    itemCardProduct: {
        fontSize: Fonts.moderateScale(12),
        fontFamily: Fonts.type.sfuiDisplayRegular,
        backgroundColor: Colors.transparent
    },

    nameFilterTxt: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.snow,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        backgroundColor: Colors.transparent,
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
        textAlign:"center",
    },

    nameFilterTxtSelected: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.snow,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        backgroundColor: Colors.transparent,
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
        textAlign:"center",
        borderBottomWidth:3,
        borderBottomColor:"#F4F4F4"
    },

    watchIcon: {
        width: Metrics.WIDTH * 0.026,
        height: Metrics.WIDTH * 0.026,
        backgroundColor: Colors.transparent,
        marginTop: Metrics.WIDTH * 0.015
    },

    watchDistanceTxt: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.snow,
        fontFamily: Fonts.type.sfuiDisplayRegular,
        backgroundColor: Colors.transparent,
        marginLeft: Metrics.WIDTH * 0.008,
        marginTop: Metrics.WIDTH * 0.01
    },

    mapPin: {
        // marginLeft: Metrics.WIDTH * 0.04,
        backgroundColor: Colors.transparent,
        marginTop: Metrics.HEIGHT * 0.018
    },

    postDetailBg: {
        flexDirection: "row",
        marginTop: Metrics.WIDTH * 0.04,
        marginLeft: Metrics.WIDTH * 0.04,
        marginRight: Metrics.WIDTH * 0.04,
        // bottom: Metrics.WIDTH * 0.04,
        position: "absolute"
    },

    profileDetailBg: {
        flexDirection: "column",
    },

    filterDetailBg: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    watchDistanceBg: {
        flexDirection: "row"
    },

    hratIconBg: {
        backgroundColor: "transparent",
        marginTop: -(Metrics.WIDTH * 0.02)
    },
    heightSeparator: {
        height: Metrics.HEIGHT * 0.09,
    },
    // STYLE FOR SWIPER
    slidesec: {
        height: Metrics.HEIGHT * 0.3,
        backgroundColor: Colors.transparent,
        marginTop: Metrics.WIDTH * 0.016
    },

    dot: {
        backgroundColor: "#E2E2E2",
        width: Metrics.WIDTH * 0.02,
        height: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.01,
        marginLeft: Metrics.WIDTH * 0.005,
        marginRight: Metrics.WIDTH * 0.005
    },

    activeDot: {
        backgroundColor: "#EE7734",
        width: Metrics.WIDTH * 0.02,
        height: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.01,
        marginLeft: Metrics.WIDTH * 0.005,
        marginRight: Metrics.WIDTH * 0.005
    },

    slide: {
        height: Metrics.HEIGHT * 0.3,
        backgroundColor: Colors.transparent
    },

    sliderImage: {
        resizeMode: "cover",
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH,
        backgroundColor: "grey"
    },

    contentStyle: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: Metrics.HEIGHT * 0.055
    },

    // headertext: {
    //   fontFamily: Fonts.type.helveticaNeueBold,
    //   backgroundColor: Colors.transparent,
    //   fontSize: Fonts.moderateScale(16),
    //   textAlign: "center",
    //   alignSelf: "center",
    //   color: "#0e1130"
    // },

    desctext: {
        fontFamily: Fonts.type.helveticaNeueLight,
        backgroundColor: Colors.transparent,
        fontSize: Fonts.moderateScale(23),
        textAlign: "center",
        alignSelf: "center",
        color: "#8d1b1b",
        lineHeight: Fonts.moderateScale(23)
    },
    // END SWIPER

    listContent: {
        // flexDirection: "row",
        // flexWrap: "wrap",
        marginVertical: Metrics.HEIGHT * 0.014,
        // alignItems: "flex-start",
        // alignContent: "flex-start",
        // justifyContent: "space-between",
        backgroundColor: "#FFF",
        paddingBottom: Metrics.HEIGHT * 0.02,
        marginLeft: Metrics.HEIGHT * 0.002,
        marginRight: Metrics.HEIGHT * 0.01
    },

    listCard:{
        backgroundColor:"#FFF", borderRadius: 16, borderColor: "#F8F8F8", borderWidth:1, shadowColor: "gray",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },

    listMainview: {
        ...Platform.select({
        ios: {
            height: Metrics.HEIGHT * 0.345,
            width: Metrics.WIDTH * 0.47
        },
        android: {
            // height: Metrics.HEIGHT * 0.392,
            width: Metrics.WIDTH * 0.98,
            padding: Metrics.HEIGHT * 0.016,
            marginBottom: Metrics.HEIGHT * 0.016,
            paddingRight: Metrics.HEIGHT * 0.008
        }
        }),
        // backgroundColor: "#fff",
        borderRadius: Metrics.HEIGHT * 0.064,
        // marginBottom: Metrics.HEIGHT * 0.015,
        // shadowColor: "gray",
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
        // elevation: 5,
        borderWidth:1,
        borderColor:"transparent"
        // borderColor: "#bec1c2"
    },

    contentProfil: {
        flexDirection:"row",
        // height: Metrics.HEIGHT * 0.192,
        width: Metrics.WIDTH * 0.94,
        padding: Metrics.HEIGHT * 0.016,
        paddingRight: Metrics.HEIGHT * 0.08,
        borderColor:"transparent",
        backgroundColor:"#FFF", borderRadius: 16, borderColor: "#F8F8F8", borderWidth:1, shadowColor: "gray",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    pageProfilHeader1: {
        // height: Metrics.HEIGHT * 0.120,
        width: Metrics.WIDTH * 0.44,
        // padding: Metrics.HEIGHT * 0.016,
        // marginBottom: Metrics.HEIGHT * 0.064,
        paddingRight: Metrics.HEIGHT * 0.048,
        // borderWidth:1,
        // borderColor:"transparent"
    },

    pageProfilHeader2: {
        width: Metrics.WIDTH * 0.48,
        // marginBottom: Metrics.HEIGHT * 0.064,
        paddingRight: Metrics.HEIGHT * 0.008,
    },
    titleTextProfil:{
        marginHorizontal: (Metrics.WIDTH * 0.001),
        fontSize: Fonts.moderateScale(18),
        color:'#363636',
        fontFamily: Fonts.type.sfuiDisplayRegular,
        marginTop: (Metrics.HEIGHT * 0.008),
        marginBottom: (Metrics.HEIGHT * 0.016),
    },

    contentHeader: {
        flexDirection:"row",
        height: Metrics.HEIGHT * 0.192,
        width: Metrics.WIDTH * 0.98,
        padding: Metrics.HEIGHT * 0.016,
        // marginBottom: Metrics.HEIGHT * 0.064,
        paddingRight: Metrics.HEIGHT * 0.008,
        // borderRadius: Metrics.HEIGHT * 0.064,
        borderWidth:1,
        backgroundColor:"#FFF",
        borderColor:"transparent"
    },

    pageHeader1: {
        // height: Metrics.HEIGHT * 0.120,
        width: Metrics.WIDTH * 0.44,
        padding: Metrics.HEIGHT * 0.016,
        marginBottom: Metrics.HEIGHT * 0.064,
        paddingRight: Metrics.HEIGHT * 0.008,
        // borderRadius: Metrics.HEIGHT * 0.064,
        borderWidth:1,
        // backgroundColor:"#f8f8f8",
        borderColor:"transparent"
    },

    pageHeader2: {
        height: Metrics.HEIGHT * 0.120,
        width: Metrics.WIDTH * 0.50,
        padding: Metrics.HEIGHT * 0.016,
        marginBottom: Metrics.HEIGHT * 0.064,
        paddingRight: Metrics.HEIGHT * 0.008,
        // borderRadius: Metrics.HEIGHT * 0.064,
        borderWidth:1,
        // backgroundColor:"#f8f8f8",
        borderColor:"transparent"
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
            // borderTopLeftRadius: 8,
            // borderTopRightRadius: 8,
            // borderWidth:1,
            borderColor:"transparent",
            borderTopLeftRadius: 16, borderTopRightRadius:16
        }
        })
    },

    destinationnamelist: {
        fontFamily: Fonts.type.robotoRegular,
        fontSize: Fonts.moderateScale(14),
        color: "#1d262a",
        paddingTop: Metrics.HEIGHT * 0.016,
        paddingLeft: Metrics.HEIGHT * 0.01
    },

    normalButton: {
        marginTop: Metrics.HEIGHT * 0.024,
        height:(Metrics.HEIGHT * 0.060),
        width:(Metrics.WIDTH * 0.5),
        borderRadius:(Metrics.HEIGHT * 0.0275),
        borderWidth: 3.5,
        borderColor: '#b52424',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft: Metrics.WIDTH * 0.016
    },
    normalButtonTxt: {
        fontFamily: Fonts.type.sfuiDisplayRegular,
        fontSize: Fonts.moderateScale(17),
        color: '#b52424',
    },

    placeDistanceBg: {
        flexDirection: "row",
        marginLeft: Metrics.WIDTH * 0.016,
    },

    placeDistanceTxt: {
        fontSize: Fonts.moderateScale(12),
        color: "#b7b7b7",
        fontFamily: Fonts.type.sfuiDisplayRegular,
        backgroundColor: Colors.transparent,
        marginLeft: Metrics.WIDTH * 0.008,
        marginTop: Metrics.HEIGHT * 0.016,
        marginRight: Metrics.WIDTH * 0.024,
        marginBottom: Metrics.HEIGHT * 0.024,
    },

    mexicotext: {
        fontFamily: Fonts.type.robotoMedium,
        fontSize: Fonts.moderateScale(12),
        color: "#e63575",
        paddingLeft: Metrics.HEIGHT * 0.01,
        paddingTop: Metrics.HEIGHT * 0.004
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
    cl00:{
        color:"#000"
    },
});

export default styles;