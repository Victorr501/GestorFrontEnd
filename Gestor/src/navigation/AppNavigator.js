import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/HomeScreen";
import RegistroScreen from "../screens/RegistroScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{headerShown:false}} //Oculta el header en todas las pantallas
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registro" component={RegistroScreen}/>
        </Stack.Navigator>
    );
}