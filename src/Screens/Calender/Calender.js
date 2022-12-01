// //import liraries
// import React, { Component, useEffect, useState } from 'react';
// import { View, Text, StyleSheet ,Button} from 'react-native';


// // create a component
// const Calender = () => {
//     const[name,setName]=useState(0) // consturtoe initiate

//     useEffect(()=>{
        
//         alert('useEffect',name) 
//         return ()=>{
//             console.log('components will unmount')
//         }

//     },[name])
//     return (
//         <View style={styles.container}>
//             <Button onPress={()=>setName(name+1)}
//             title='click me' 
//             />
//             <Text>{name}</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
       
//     },
// });

// //make this component available to the app
// export default Calender;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import colorsPath from '../../constants/colorsPath';
import NavigationString from '../../constants/NavigationString';

// create a component
const Calender = ({navigation,route,props}) => {
    console.log(props,"props")
    return (
        <View style={styles.container}>
         <TouchableOpacity  onPress={()=>navigation.navigate(NavigationString.PROFILE)}
         style={{backgroundColor:colorsPath.purple,height:64,width:64,borderRadius:34,alignSelf:'flex-end',alignItems:'center'}}>
         <Text style={{fontSize:48,color:'white'}}>+</Text>
         </TouchableOpacity >
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent:'flex-end',
       
        margin:48
    },
});

//make this component available to the app
export default Calender;
