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

    //Diseño de la aplicacion
    return (
        <SafeAreaView style={style.safeArea}>
            <View style= {style.container}/>
            <Text style= {style.title}>Iniciar Sesion</Text>
            <TextInput
                style={style.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={style.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <view style={style.buttonContainer}>
                <Button
                    title="Iniciar sesion"
                    onPress={handLogin}
                />
            </view>
        </SafeAreaView>
    );


};

const style = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333'
    
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
        borderRadius: 25,
        overflow: 'hidden',
    }
})

export default LoginScreen;