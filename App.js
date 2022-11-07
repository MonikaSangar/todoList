//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colorsPath from './src/constants/colorsPath';
import Routes from './src/Navigation/Routes';
import { Login, OnBoarding } from './src/Screens';
import Reminder from './src/Screens/Reminder/Reminder';






// create a component
const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colorsPath.grey}}>
   <Routes/>
 
 
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;
