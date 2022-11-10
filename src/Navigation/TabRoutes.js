


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import colorsPath from "../constants/colorsPath";
import imagesPath from "../constants/imagesPath";
import NavigationString from "../constants/NavigationString";
import { Login } from "../redux/action";
import { AddTask, Alarm, Calender, Home, OnBoarding, Profile, Reminder, SignUp } from "../Screens";


const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
      <Tab.Navigator screenOptions={{headerShown:false , tabBarStyle:{margin:16}}}>
        <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagesPath.icHome} />
          )
        }
      }} name={NavigationString.HOME} component={Home} />
         <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagesPath.icAlarm} />
          )
        }
      }}
          name={NavigationString.ALARM} component={Alarm} />
         <Tab.Screen options={{
        tabBarIcon: ({ route, focused }) => {
          return (
            <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagesPath.icPlus} />
          )
        }
      }}
          name={NavigationString.REMINDER} component={Reminder} />
        <Tab.Screen 
        options={{
          tabBarIcon: ({ route, focused }) => {
            return (
              <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagesPath.icCalender} />
            )
          }
        }} name={NavigationString.CALENDER} component={Calender} />
        <Tab.Screen 
         options={{
          tabBarIcon: ({ route, focused }) => {
            return (
              <Image style={{ tintColor: focused ? colorsPath.purple : null }} source={imagesPath.icUser} />
            )
          }
        }} name={NavigationString.PROFILE} component={Profile} />
      
      </Tab.Navigator>
    );
  }
  export default TabRoutes