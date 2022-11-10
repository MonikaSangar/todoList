//import liraries
//import liraries
import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputComp from '../../Components/TextInputComp';
import colorsPath from '../../constants/colorsPath';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsive';
import styles from './styles';
import imagesPath from '../../constants/imagesPath'
import SocialComp from '../../Components/SocialComp';
import navigationString from '../../constants/NavigationString';
import NavigationString from '../../constants/NavigationString';



// create a component
const SignUp = ({navigation}) => {
    const[isVisible,setVisible]=useState(!isVisible)
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const goLogin =()=>{
      
        if (email== '' && password == '' && name == '' && phone == '')
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
        if ( phone == '')
        {
            alert('plz enter  password')
            return
        }
        if ( name == '')
        {
            alert('plz enter  password')
            return
        }

        else {
            navigation.navigate(NavigationString.HOME)}
        }
   
    return (
        <SafeAreaView style={styles.container}>
            <HeaderComp />
            <View style={styles.txtStyle}>
                <Text style={styles.styleView}>Sign Up</Text>
            </View>
            <View style={{ marginTop: moderateScaleVertical(16) }}>
                <TextInputComp
                    placeholder='Name' 
                    value={name}
                    onChangeText={(name)=>setName(name)}
                    
                    
                    />
                <TextInputComp
                    placeholder='Phone Number'
                    
                    value={phone}
                    onChangeText={(phone)=>setPhone(phone)} />
                <TextInputComp
                    placeholder='Email Address'
                    value={email}
                    onChangeText={(email)=>setEmail(email)} />
                <TextInputComp
                    placeholder='Password'
                    value={password}
                    onChangeText={(password)=>setPassword(password)}
                    icon ={isVisible?imagesPath.icClose:imagesPath.icOpen}
                    
                    
                    />


            </View>
            <TouchableOpacity>
                <Text style={styles.forStyle}>Forget Password</Text>
            </TouchableOpacity>
            <ButtonComp onPress={goLogin}
                text='Sign Up' />
            <View style={styles.orStyle}>
                <Text style={styles.testStyle}>OR</Text>
            </View>

            <View style={styles.signStyle}>
                <Text style={styles.testStyle}>SignUp with</Text>
            </View>



            <View style={{ marginTop: moderateScaleVertical(22), flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <SocialComp
                    icon={imagesPath.icMail} />
                <SocialComp icon={imagesPath.icFb} />
                <SocialComp
                    icon={imagesPath.icFb} />
            </View>


            <View style={styles.endView}>
                <View style={styles.endStyle}>
                    <TouchableOpacity>
                        <Text style={styles.logStyle}>Already have an account?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate(navigationString.LOGIN)}>
                        <Text style={styles.textStyle}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    );
};

//make this component available to the app
export default SignUp;
