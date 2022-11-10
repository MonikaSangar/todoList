import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsive";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScaleVertical(24),
        marginVertical: moderateScaleVertical(14),
        backgroundColor: colorsPath.grey

    },
    topView: {
        flexDirection: 'row',
        alignItems: "center"
    },
    backStyle:
    {
        marginRight: moderateScale(12)
    },
    textStyle: {
        fontWeight: 'bold'
    },
    inputContainer: {
        backgroundColor: colorsPath.white,
        height: moderateScaleVertical(260),
        borderRadius: moderateScale(24),
        marginTop: moderateScaleVertical(24)
    },
    lineStyle:
    {
        borderWidth: 0.5,
        borderColor: colorsPath.txtColor,
        width: moderateScale(290),
        alignSelf: 'center'
    },
    txtContainer:
    {
        color: colorsPath.black,
        padding: moderateScale(24),
        marginTop: moderateScaleVertical(16)
    },
    details: {
        backgroundColor: colorsPath.white,
        height: moderateScaleVertical(48),
        borderRadius: moderateScale(8),
        marginTop: moderateScaleVertical(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,
        alignItems: "center"
    },
    imgStyle:
    {
        tintColor: colorsPath.txtColor,
        transform: [{ rotate: '180deg' }]
    },
    calenStyle:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScaleVertical(24)
    },
    calenView: {
        backgroundColor: colorsPath.white,
        width: moderateScale(140),
        height: moderateScaleVertical(48),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        padding: moderateScale(16)
    },
    alarmStyle: {
        backgroundColor: colorsPath.white,
        width: moderateScale(140),
        height: moderateScaleVertical(48),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        padding: moderateScale(16),
        alignItems: 'center'
    },
    lastView:
    {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, tickStyle:
    {
        backgroundColor: colorsPath.purple,
        height: 180,
        width: 300,
        borderRadius: 8,
        alignSelf: 'center'
    },
    tickViewStyle:{ 
        justifyContent: 'center', 
        alignItems: 'center',
         marginTop: 14 
        },
        txtStyle:
        {  
            textAlign: 'center',
             color: colorsPath.white, 
             fontWeight: '700', 
             lineHeight: 22 }

})

export default styles;