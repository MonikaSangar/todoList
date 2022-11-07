//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsive';


// create a component
const ButtonComp = (

    {
        text,
        onPress
    }
) => {
    return (

        <TouchableOpacity onPress={onPress}
        style={styles.container}>
            <Text style={styles.txtStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: colorsPath.purple,
        height: moderateScaleVertical(48),
        borderRadius: moderateScale(12),
        justifyContent: "center",
        alignItems: "center",
        marginTop: moderateScaleVertical(24)
    },
    txtStyle: {
        color: colorsPath.white,
        fontWeight: 'bold',
        fontSize: textScale(16)
    }
});

//make this component available to the app
export default ButtonComp;
