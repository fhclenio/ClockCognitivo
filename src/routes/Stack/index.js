import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../paginas/Home";
import Login from "../../paginas/Login";

const { Navigator, Screen} = createNativeStackNavigator()

export default function() {
    return (
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}