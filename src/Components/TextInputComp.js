//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsive';


// create a component
const TextInputComp = (
    {
        placeholder,
        value,
        onChangeText,
        icon
    }
) => {

    const[isVisible,setVisible]=useState(true)
    const click = ()=>{
        setVisible(!isVisible)
    }
    return (
        <View style={styles.container}>
            <TextInput style={{flex:1}}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                fontSize={16}
                secureTextEntry={!isVisible}


            />
         <TouchableOpacity onPress={click}>
                <Image style={{ height: 24, width: 24 ,tintColor:colorsPath.txtColor}}
                    source={icon} />
            </TouchableOpacity>
            
      
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScaleVertical(48), backgroundColor: colorsPath.white, padding: moderateScale(14), borderRadius: moderateScale(8), marginBottom: moderateScaleVertical(16), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'


    },
});

//make this component available to the app
export default TextInputComp;
