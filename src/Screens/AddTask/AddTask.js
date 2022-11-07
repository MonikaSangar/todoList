//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image } from 'react-native';
import imagesPath from '../../constants/imagesPath';

import styles from './styles';




// create a component
const AddTask = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
            <Image source={imagesPath.icBackward}/>
            <Text> New Reminder</Text>
            </View>
        </SafeAreaView>
    );
};

//make this component available to the app
export default AddTask;
