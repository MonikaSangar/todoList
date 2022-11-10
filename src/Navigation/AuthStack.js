import React from "react";
import NavigationString from "../constants/NavigationString";
import * as Screens from '../Screens'


const AuthStack = (Stack) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={NavigationString.ONBOARDING} component={Screens.OnBoarding} />
            <Stack.Screen name={NavigationString.SIGNUP} component={Screens.SignUp} />
            <Stack.Screen name={NavigationString.LOGIN} component={Screens.Login} />
        </Stack.Navigator>

    )
}

export default AuthStack
