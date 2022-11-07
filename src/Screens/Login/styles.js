//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorsPath from '../../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsive';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:moderateScale(24)
       
    },
    txtStyle:
    {
        marginTop: moderateScale(28)
    },
    styleView: {
        fontSize: textScale(24),
        fontWeight: 'bold',
        color: colorsPath.purple
    },
    endStyle:{justifyContent:'center',alignItems:'center',flexDirection:'row'},
    endView:{ fontSize:textScale(16), flex: 1, justifyContent: 'flex-end',marginBottom:moderateScaleVertical(38) },
    orStyle:{justifyContent:'center',alignItems:'center',marginTop:moderateScaleVertical(28),color:colorsPath.txtColor},
    logStyle:{
        color:colorsPath.txtColor
    },
    forStyle:{color:colorsPath.txtColor,textAlign:'right'},
    textStyle:{
        color:colorsPath.purple,
        fontWeight:'bold'
    }
});

//make this component available to the app
export default styles;
