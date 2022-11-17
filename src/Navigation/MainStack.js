import React from "react";
import NavigationString from "../constants/NavigationString";
import { ItemDetail } from "../Screens";
import TabRoutes from "./TabRoutes";


const MainStack = (Stack) => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={NavigationString.TABROUTES} component={TabRoutes} />
            <Stack.Screen name={NavigationString.ITEMDETAIL} component={ItemDetail} />
        </Stack.Navigator>
    )
}

export default MainStack
