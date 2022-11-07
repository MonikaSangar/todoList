import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsive";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(24),

    },
    txtStyle:
    {
        marginTop: moderateScale(24)
    },
    styleView: {
        fontSize: textScale(28),
        fontWeight: 'bold',
        color: colorsPath.purple
    },
    textStyle:
    {color:colorsPath.purple,fontSize:textScale(14),fontWeight:'bold'},

    endStyle:{justifyContent:'center',alignItems:'center',flexDirection:'row'},
    endView:{ fontSize:textScale(16), flex: 1, justifyContent: 'flex-end',marginBottom:moderateScaleVertical(14) },
    orStyle:{justifyContent:'center',alignItems:'center',marginTop:moderateScaleVertical(28),color:colorsPath.txtColor},
    logStyle:{
        color:colorsPath.txtColor
    },
    forStyle:{color:colorsPath.txtColor,textAlign:'right'},
    signStyle:{
        color:colorsPath.txtColor,
        justifyContent:'center',alignItems:'center',marginTop:moderateScaleVertical(28)
    },
    testStyle:
    {color:'grey'}
   
}

);
export default styles