import React from 'react';
import { Text,SafeAreaView ,View,StyleSheet} from 'react-native';
import colorsPath from '../constants/colorsPath'
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsive';



// create a component
const HeaderComp = () => {
    return (
        <SafeAreaView>
            <View style={styles.txtView}>
                <Text style={styles.txtStyle}>Todoist</Text>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
    txtStyle:{
        fontSize:textScale(36),
        fontWeight:'bold',
        color:colorsPath.purple
    },
    txtView:{
        marginTop:textScale(14),
        alignItems:'center'
    }
    
});


export default HeaderComp;