import React from "react";
import NavigationString from "../constants/NavigationString";
import TabRoutes from "./TabRoutes";


const MainStack = (Stack) => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={NavigationString.TABROUTES} component={TabRoutes} />
        </Stack.Navigator>
    )
}

export default MainStack
