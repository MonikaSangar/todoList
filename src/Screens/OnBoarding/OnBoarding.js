//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import colorsPath from '../../constants/colorsPath';
import imagesPath from '../../constants/imagesPath';
import NavigationString from '../../constants/NavigationString';
import { moderateScaleVertical, textScale } from '../../styles/responsive';
import Swiper from 'react-native-swiper'




const OnBoarding = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <HeaderComp />
           
                <Swiper
                showsButtons={false}
                dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 40, height: 4,borderRadius: 4, marginTop: 3, marginBottom: 3}}
                activeDotStyle={{backgroundColor:colorsPath.purple, width: 40, height: 4,borderRadius: 4, marginRight: 3, marginTop: 3, marginBottom: 3}}
                >
                    <View style={styles.slide1}>
                        <Image source={imagesPath.icFirstOnboard} />
                        <View style={{marginHorizontal:14}}>
                        <Text style={{marginTop:48,fontWeight:'bold',color:colorsPath.purple,fontSize:24,alignSelf:'flex-start'}}>Manage Tasks</Text>
                       
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={imagesPath.icFirstOnboard} />
                        <View style={{marginHorizontal:14}}>
                        <Text style={{marginTop:48,fontWeight:'bold',color:colorsPath.purple,fontSize:24,alignSelf:'flex-start'}}>Prioritize wisely</Text>
                        </View>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={imagesPath.icFirstOnboard} />
                        <View style={{marginHorizontal:14}}>
                        <Text style={{marginTop:48,fontWeight:'bold',color:colorsPath.purple,fontSize:24,alignSelf:'flex-start'}}>Get Reminder on Time</Text>
                        </View>
                    </View>
                </Swiper>
               
                <View style={{marginHorizontal:14}}>
                <Text style={{marginTop:24,fontSize:14,alignSelf:'flex-start',fontWeight:'bold',color:colorsPath.txtColor}}>Update: using PropTypes from prop-types and Change View.propTypes to ViewPropTypes</Text>
                </View>


           


            <View style={{marginHorizontal:14}}>
                <ButtonComp onPress={() => navigation.navigate(NavigationString.SIGNUP)}
                    text='Sign Up' />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: moderateScaleVertical(14) }}>
                <Text style={{ color: colorsPath.txtColor, fontWeight: textScale('600'), marginBottom: moderateScaleVertical(14) }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(NavigationString.LOGIN)}>
                    <Text style={{ color: colorsPath.purple, fontWeight: 'bold' }}>Log In</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       

    },

    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    
});

//make this component available to the app
export default OnBoarding;
