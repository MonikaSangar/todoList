//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputComp from '../../Components/TextInputComp';
import NavigationString from '../../constants/NavigationString';
import styles from './styles';




// create a component
const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComp/>
            <View style={styles.txtStyle}>
                <Text style={styles.styleView}>Login</Text>
            </View>
            <View style={{marginTop:24}}>
            <TextInputComp
            placeholder='Email Address'/>
            <TextInputComp
            placeholder='Password'/>
            <TouchableOpacity>
                <Text style={styles.forStyle}>Forget Password</Text>
            </TouchableOpacity>
            <ButtonComp onPress={()=>navigation.navigate(NavigationString.REMINDER)}
            text='Login'/>
            </View>
            <View style={styles.endView}>
                <View style={styles.endStyle}>
                    <TouchableOpacity>
                        <Text style={styles.logStyle}>Already have an account?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>

           
        </View>
    );
};


//make this component available to the app
export default Login;
