//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputComp from '../../Components/TextInputComp';
import NavigationString from '../../constants/NavigationString';
import styles from './styles';




// create a component
const Login = ({navigation}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const goLogin =()=>{
        if (email== '' && password == '')
        {
            alert('plz enter email and password')
            return
        }
        if (email== '' )
        {
            alert('plz enter email')
            return
        }
        if ( password == '')
        {
            alert('plz enter  password')
            return
        }





        else {
            navigation.navigate(NavigationString.HOME)}
        }

    
    
    return (
        <View style={styles.container}>
            <HeaderComp/>
            <View style={styles.txtStyle}>
                <Text style={styles.styleView}>Login</Text>
            </View>
            <View style={{marginTop:24}}>
            <TextInputComp
            placeholder='Email Address'
            value={email}
            onChangeText={(email)=>setEmail(email)}
            
            
            
            
            />
            <TextInputComp
            placeholder='Password'
            value={password}
            onChangeText={(password)=>setPassword(password)}
            
            
            />
            <TouchableOpacity>
                <Text style={styles.forStyle}>Forget Password</Text>
            </TouchableOpacity>
            <ButtonComp onPress={goLogin}
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
}



//make this component available to the app
export default Login;
