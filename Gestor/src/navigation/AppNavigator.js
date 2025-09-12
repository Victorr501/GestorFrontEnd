import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegistroScreen from "../screens/RegistroScreen";
import HomeScreen from "../screens/HomeScreen";
import RecuperarContraseñaScreen from "../screens/RecuperarContraseñaScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <Stack.Navigator
            screenOptions={{headerShown:false}} //Oculta el header en todas las pantallas
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registro" component={RegistroScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="PerdeContrasna" component={RecuperarContraseñaScreen}/>
        </Stack.Navigator>
    );
}