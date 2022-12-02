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
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colorsPath from '../../constants/colorsPath';
import NavigationString from '../../constants/NavigationString';
import UserData from '../../redux/reducers/data';
import store from '../../redux/store';




// create a component
const Calender = (props) => {
    const myState =useSelector((state)=>state.homeData)
    

  
     
    console.log(props)
    const {route,navigation} = props
    const data = route?.params
    const[prevScreenData,setPrevScreenData] = useState([{}])
    useEffect(() => {
    
    }, [])
    
    console.log(prevScreenData,"routei8i")
    return (
        <View style={styles.container}>
            <Text style={{fontSize:24,marginBottom:18,fontWeight:'600'}}>User Details:</Text>
            {prevScreenData?.map((item)=>{
                return(
                    <View>
            <View style={{borderColor:colorsPath.purple,padding:16,borderWidth:.5,borderRadius:4}}>
            <Text style={styles.fontStyle}>Name: {item?.name}</Text>
            <Text style={styles.fontStyle}>LastName: {item?.lastName}</Text>
            <Text style={styles.fontStyle}>State: {item?.state}</Text>
            <Text style={styles.fontStyle}>City: {item?.city}</Text>
            </View>
            </View>
                )
            })}
         <TouchableOpacity  onPress={()=>navigation.navigate(NavigationString.PROFILE)}
         style={{backgroundColor:colorsPath.purple,height:64,width:64,borderRadius:34,alignSelf:'flex-end',alignItems:'center',marginTop:48}}>
         <Text style={{fontSize:48,color:'white'}}>+</Text>
         </TouchableOpacity >
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:48,
    
    },
    fontStyle:{
        fontSize:16,
        marginBottom:18
    }
});

//make this component available to the app
export default Calender;
