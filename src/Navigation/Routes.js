import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import NavigationString from '../constants/NavigationString';


import * as Screens from '../Screens'



const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }} >
                <Stack.Screen name={NavigationString.ONBOARDING} component={Screens.OnBoarding} /> 
                <Stack.Screen name={NavigationString.SIGNUP} component={Screens.SignUp} />
                <Stack.Screen name={NavigationString.LOGIN} component={Screens.Login} />
                <Stack.Screen name={NavigationString.REMINDER} component={Screens.Reminder} />
                

               
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;