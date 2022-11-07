//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsive';



// create a component
const SocialComp = ({
    icon
}) => {
    return (
        <View style={{marginTop:moderateScaleVertical(22),flexDirection:'row',justifyContent:'center',justifyContent:'space-evenly'}}>
        <Image source={icon}/>
        </View>
    );
};

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default SocialComp;
