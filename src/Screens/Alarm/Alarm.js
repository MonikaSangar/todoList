//import liraries
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View ,ActivityIndicator, TouchableOpacity} from 'react-native';
import colorsPath from '../../constants/colorsPath';
import imagesPath from '../../constants/imagesPath';
import NavigationString from '../../constants/NavigationString';

// create a component
const Alarm = ({navigation,route}) => {
    const [data, setData] = useState([])
    const[off,setOff] = useState(0)
    // const [loading,setLoading]=useState(false)

    useEffect(() => {
        myData()
    }, [])

    const myData = async () => {
        try {
            
            const prevData=data
            const res = await axios.get(`https://dummyjson.com/products?skip=${off}&limit=${20}`)
            console.log('data', res);
            const some =res?.data?.products
            // console.log('ju',some)
            console.log('merged data',[...prevData,...some])
            setData(some)
            setData([...prevData,...some])
            setOff(off+20)
        }

        catch (error) {
            console.log('error',error)
        }
    }

    const Submit=(item)=>{
        navigation.navigate(NavigationString.ITEMDETAIL,{id:item.id,brand:item.brand})
        
    }
  

    const renderItem = ({ item, index }) => {
        return (

            
            <TouchableOpacity onPress={()=>{
                Submit(item)
            }}
            
                style={{
                backgroundColor: 'white',
                padding: 8,
                marginBottom: 14,
                marginHorizontal: 14,
                borderRadius: 14,
                borderColor: colorsPath.purple,
                borderWidth: 0.5,
                flexDirection: 'row',
                shadowColor:'grey',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1.0
            }}>
             
                <Image style={{ height: 140, width: 100}} source={{ uri: item?.thumbnail }} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>{item?.title}</Text>
                    <TouchableOpacity>
                 <Image  style={{
                        height:20,width:20,tintColor:'red',
                        position:"absolute",
                        right:4
                        }}source={imagesPath.icBin}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 13, color: 'grey' }}>{item?.description}</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontWeight: '500', fontSize: 18, color: 'green' }}>${item?.price}</Text>
                                <Text> ({item?.discountPercentage}%off)</Text>
                            </View>
                            <Text>Rating: {item?.rating}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>


            <FlatList
                data={data}
                renderItem={renderItem}
                onEndReached={()=>{
                    myData()
                }}
            />
        </View>
    );
};0

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsPath.grey

    },
});

//make this component available to the app
export default Alarm;
