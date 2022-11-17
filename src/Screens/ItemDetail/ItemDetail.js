import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from 'react-native'
import ButtonComp from "../../Components/ButtonComp";
import colorsPath from "../../constants/colorsPath";
import imagesPath from "../../constants/imagesPath";
import NavigationString from "../../constants/NavigationString";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsive";




const ItemDetail = ({ route, navigation }) => {
    const [data, setData] = useState([])

    const props = route?.params
    console.log('data is', data)

    let id = props.id

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {


        try {
            const seData = await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(seData)
            setData(seData.data)
        }
        catch (error) {
            console.log('error')
        }
    }

    return (
        <View style={styles.container}>

            <View>
            <Text style={{fontSize:18,fontWeight:'bold',letterSpacing:0.8,marginBottom:8}}>{data?.title}</Text>
                <Text>{data.description}</Text>
                <Image style={{ height: 400, width: 300 ,alignSelf:'center',marginBottom:14,marginTop:14,borderRadius:8}}
                    source={{ uri: data?.thumbnail }} />
                    <View style={{borderColor:colorsPath.purple,padding:14,borderWidth:1,borderRadius:8,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Price: ${data?.price} <Text style={{fontWeight:'200',fontSize:14}}> ({data?.discountPercentage}%off)</Text></Text>
                <Image  style={{height:28,width:28}}source={imagesPath.icHeart}/>
                </View>
                <ButtonComp
                 text='Buy Now'
                 onPress={()=>navigation.navigate(NavigationString.ALARM)}
                />
                 <ButtonComp
                 btnStyle={{backgroundColor:'grey'}}
                 text='Add to Cart'
                 onPress={()=>navigation.navigate(NavigationString.ALARM)}
                />

               


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      marginVertical:48,
        marginHorizontal: 8,
        alignItems:'center'

    }
})

export default ItemDetail


// //import liraries
// import axios from 'axios';
// import React, { Component, useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const ItemDetails = ({navigation,route}) => {

//     const get=route?.params
//     console.log('get',get)
//     const[item,setItem]=useState([])
//     console.log(item,"item")

//     useEffect(()=>{
//   fetchData()
//     },[])

//      const id=get.id
//     const  fetchData=async()=>{
//        try{
//         const setData =await axios.get(`https://dummyjson.com/products/${id}`)
//         setItem(setData.data)
//        }
//        catch(error){
//         console.log('error')
//        }

//     }
//     return (
//         <View style={styles.container}>
//             <Text>{item?.id}</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default ItemDetails;
