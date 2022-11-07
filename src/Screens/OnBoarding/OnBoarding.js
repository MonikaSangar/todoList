//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView ,Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import colorsPath from '../../constants/colorsPath';
import imagesPath from '../../constants/imagesPath';
import NavigationString from '../../constants/NavigationString';
import { moderateScaleVertical, textScale } from '../../styles/responsive';



// create a component
const OnBoarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComp />
        <View style={{flex:1}}>
            <Onboarding 
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagesPath.icFirstOnboard} />,
                        title: 'Manage Task',
                        subtitle: 'Your new users shouldnt jump in at the deep end. First give them a pleasurable, delightful introduction and only then let them explore your awesome app.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagesPath.icSecondOnboard} />,
                        title: 'Manage Task',
                        subtitle: 'Your new users shouldnt jump in at the deep end. First give them a pleasurable, delightful introduction and only then let them explore your awesome app.',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={imagesPath.icThird} />,
                        title: 'Manage Task',
                        subtitle: 'Your new users shouldnt jump in at the deep end. First give them a pleasurable, delightful introduction and only then let them explore your awesome app.',
                    },
                 
  ]}
            />
            </View>











            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <ButtonComp onPress={() => navigation.navigate(NavigationString.SIGNUP)}
                    text='Sign Up' />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: moderateScaleVertical(14) }}>
                <Text style={{ color: colorsPath.txtColor, fontWeight: textScale('600'), marginBottom: moderateScaleVertical(14) }}>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate(NavigationString.LOGIN)}>
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
        marginHorizontal: 24

    },
});

//make this component available to the app
export default OnBoarding;
