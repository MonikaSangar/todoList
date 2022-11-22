//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';


// create a component
const Calender = () => {
    const[name,setName]=useState(0) // consturtoe initiate

    useEffect(()=>{
        
        alert('useEffect',name) 
        return ()=>{
            console.log('components will unmount')
        }

    },[name])
    return (
        <View style={styles.container}>
            <Button onPress={()=>setName(name+1)}
            title='click me' 
            />
            <Text>{name}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});

//make this component available to the app
export default Calender;
