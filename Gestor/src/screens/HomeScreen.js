import React, {useState} from "react"; 
import{
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const LoginScreen = () => {
    //useState hook para gestionar el estado del email y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Función que se ejecuta al presionar al botón de "Entrar"
    const handLogin = () => {
        //Verificamos que los campos no estén vacios
    }

    //Función botón "Registrate"
    const handRegistar = () => {
        
    }
}