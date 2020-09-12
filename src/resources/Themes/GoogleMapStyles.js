import { Dimensions,StyleSheet } from "react-native";
import { Metrics } from ".";

const WHITE = '#FFFFFF'
const PRIMARY_COLOR = '#4589f2'
const STATUS_BAR_COLOR = '#205cb2'
const STAR_COLOR = '#FF5722'

const { width, height } = Dimensions.get('window')

const GoogleMapStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
      },
      content: {
        backgroundColor: 'transparent',
      },
      scrollAppBar: {
        zIndex: 1,
      },
      toolbar: {
        backgroundColor: PRIMARY_COLOR,
      },
      appBarMerged: {
        backgroundColor: 'transparent',
      },
      containerMap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height,
        width,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      contentMapDetail:{
        width,height:(Metrics.HEIGHT) * 0.88,zIndex: 2,paddingTop:(Metrics.HEIGHT) * 0.12
      },
      bottomSheet: {
        // height,
        zIndex: 5,
        backgroundColor: 'white'
      },
      bottomSheetHeader: {
        padding: 16,
        paddingLeft: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // Don't forget this if you are using BottomSheetHeader
        backgroundColor: 'transparent'
      },
      bottomSheetLeft: {
        flexDirection: 'column'
      },
      bottomSheetRight: {
        flexDirection: 'column'
      },
      bottomSheetTitle: {
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
      },
      dots: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      dot: {
        width: 8,
        height: 8,
        marginHorizontal: 4,
        opacity: 0.8,
        backgroundColor: WHITE,
        borderRadius: 50,
      },
      dotActive: {
        width: 10,
        height: 10,
        opacity: 1,
      },
      bottomSheetContent: {
        // flex: 1,
        backgroundColor: WHITE,
      },
      starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      star: {
        marginHorizontal: 2,
      },
      routeLabel: {
        marginTop: 32,
        marginRight: 12,
        fontSize: 12,
        fontFamily: 'sans-serif-medium',
      },
      sectionIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        borderBottomWidth: 1,
        borderColor: '#eee'
      },
      iconBox: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'column'
      },
      iconLabel: {
        fontSize: 14,
        marginTop: 4,
        color: PRIMARY_COLOR
      },
      detailListSection: {
        paddingVertical: 8,
      },
      detailItem: {
        // height: 42,
        marginBottom: (Metrics.HEIGHT) * 0.028,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 26,
      },
      iconDetail: {
        marginTop: (Metrics.HEIGHT) * 0.028,
      },
      detailText: {
        color: '#333',
        fontSize: 14,
        marginLeft: 24,
        // lineHeight: 22,
        marginTop: (Metrics.HEIGHT) * 0.028,
      },
      section: {
        padding: 22,
        borderColor: '#eee',
        borderTopWidth: 1,
      },
      sectionBorder: {
        padding: 4,
        borderColor: '#eee',
        borderTopWidth: 1,
      },
      sectionTitle: {
        color: '#333',
        fontSize: 16,
        fontFamily: 'sans-serif-medium',
      },
      reviewStats: {
        marginTop: 20,
        flexDirection: 'row',
      },
      reviewStars: {
        flexDirection: 'column',
        paddingRight: 8,
      },
      reviewStatsItem: {
        marginTop: 4,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      reviewBars: {
        maxWidth:(Metrics.WIDTH) * 0.6,
        minWidth:(Metrics.WIDTH) * 0.6
      },
      reviewBar: {
        paddingHorizontal: 8,
        borderBottomRightRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: STAR_COLOR
      },
      reviewAverage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      reviewAverageText: {
        fontSize: 42,
        textAlign: 'center',
        color: STAR_COLOR,
        fontWeight: '200',
      },
      reviewAverageStars: {
        marginVertical: 4,
        flexDirection: 'row',
      },
      rateSection: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      },
      picture: {
        width: 38,
        height: 38,
        borderRadius: 50,
        zIndex: 2,
      },
      contentCircle:{
        width: 38,
        height: 38,
        borderRadius: 50,
        zIndex: 2,
        backgroundColor:'#205cb2',
      },
      textContent:{
        color:"#FFF",
        textAlign: 'center',
        top:"25%"
      },
      rateTitle: {
        color: '#333',
        marginTop: 10,
      },
      rateStars: {
        marginTop: 12,
        flexDirection: 'row',
      },
      rateStar: {
        color: 'grey',
        marginHorizontal: 12,
      },
      comment: {
        paddingTop: 24,
        flexDirection: 'row',
      },
      commentLine: {
        position: 'absolute',
        width: 3,
        height: 240,
        zIndex: 1,
        backgroundColor: '#eee',
      },
      commentContent: {
        flexDirection: 'column',
        marginLeft: 16,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
      },
      commentName: {
        color: '#333',
        fontFamily: 'sans-serif-medium',
      },
      commentNumberReviews: {
        fontSize: 10,
      },
      commentStars: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
      },
      listProduk: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth:(Metrics.WIDTH) * 0.36,
      },
      commentDescription: {
        width: width - 100
      },
      commentButtons: {
        flexDirection: 'row',
        marginTop: 12,
      },
      commentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 22,
      },
      commentButtonLabel: {
        fontSize: 12,
        marginLeft: 10,
      },
      moreReviews: {
        color: PRIMARY_COLOR,
        marginTop: 20,
        marginLeft: 52,
        fontFamily: 'sans-serif-medium',
      },
      readMore: {
        color: PRIMARY_COLOR,
        marginTop: 16,
        fontFamily: 'sans-serif-medium',
      },
      takeoutSection: {
        borderTopWidth: 1,
        paddingHorizontal: 0,
        borderColor: '#ccc',
        backgroundColor: '#eee',
      },
      cards: {
        height: 200,
        marginTop: 20,
      },
      card: {
        width: 130,
        height: 170,
        marginHorizontal: 5,
        elevation: 2,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: WHITE,
      },
      cardImage: {
        width: 130,
        height: 100,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
      cardContent: {
        flexDirection: 'column',
        paddingTop: 4,
        paddingHorizontal: 8,
      },
      cardTitle: {
        color: '#333',
        fontFamily: 'sans-serif-medium',
      },
      cardDetail: {
        fontSize: 10,
      },
      cardStars: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      myStarStyle: {
        color: '#FF5722',
        // backgroundColor: 'transparent',
        // textShadowColor: 'black',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'grey',
      },
      myStarStyleUtama: {
        marginHorizontal:2
      },
      myEmptyStarStyleUtama: {
        marginHorizontal:2
      },
      myStarStyleReview: {
        marginHorizontal:12,
        color: '#FF5722',
        fontSize: 32
      },
      myEmptyStarStyleReview: {
        marginHorizontal:12,
        color: 'grey',
        fontSize: 32
      }
});

export default GoogleMapStyles;