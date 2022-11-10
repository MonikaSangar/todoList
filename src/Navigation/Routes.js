import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
         {true? MainStack(Stack):AuthStack(Stack)}
        </NavigationContainer>
    );
}

export default Routes;