import { useState } from "react";
import { StyleSheet } from "react-native";
import colorsPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsive";




const styles = StyleSheet.create({
       
    container: {
        flex: 1,
        marginHorizontal: moderateScale(14),

    },
    txtStyle: {
        fontWeight: 'bold',
        marginTop:moderateScaleVertical(16),
        fontSize:textScale(16)
    },
    txtStyl: {
        marginTop: moderateScaleVertical(16),
        color: colorsPath.txtColor
    },
    boxStyle: {
        backgroundColor: colorsPath.white,
        marginTop: moderateScaleVertical(14),
        borderRadius: 12,
        padding: moderateScale(14) ,
        flexDirection:'row'
       

    }, gauge: {
        position: 'absolute',
        width: moderateScale(100),
        height: moderateScaleVertical(160),
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'red',
        color: '#000',
        fontSize: textScale(24),
    },
    flatStyle:{
        backgroundColor:colorsPath.white,
        padding:moderateScale(18),
        marginTop:moderateScaleVertical(16),
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center'

    },
    dailyStyle:{
     color: 'blue',
    marginTop:14,
    fontWeight:600 
},
imgStyle:{
     flexDirection: 'row', 
     alignItems: 'center' ,
     marginTop:20},
     fiveStyle:{fontSize:18,color:'green',fontWeight:'bold'},
     taskStyle:{
        fontSize:16,color:colorsPath.txtColor
    },
    btnStyle:{ width: 180, height: 34, borderRadius: 4 },
    spinStyle:{flex:1,alignItems:'flex-end',justifyContent:'center'},
    dailyStyle:{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
    // dailyTask:,
    reminderText:{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 24 },
    reText:{ fontWeight: 'bold', fontSize: 16 }
});

export default styles;