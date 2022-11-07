//import liraries
import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsive';


// create a component
const TextInputComp = (
    {
        placeholder
    }
) => {
    return (
        <View>
            <TextInput style={styles.container}
                placeholder={placeholder}
                fontSize={16}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height:moderateScaleVertical(48),backgroundColor:colorsPath.white,padding:moderateScale(14),borderRadius:moderateScale(8),marginBottom:moderateScaleVertical(16)},
});

//make this component available to the app
export default TextInputComp;
