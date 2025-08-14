import React, {useState} from "react";
import {
    View, 
    Text,  
    TextInput, 
    Button,
    SafeAreaView,
    StyleSheet,
    Alert
} 
from 'react-native';

//Importar el servicio que maneja la lógica de la API
import {registrar} from '../services/userService';


const RegistroScreen = ({navigation}) => {
    //Varibles locales
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    //Esta variale activa el boton
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Funcion para validar el formato de un correo electronico.
     * @param {string} email - El correo electrónico a validar
     * @returns {boolean} - True si el correo es valido, false si no lo es
     */
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    } 

    //Función para cancelar
    const handleCacelar = () => {
        navigation.navigate('Login')
    }

    //Funcion para registrar y usar 
    const handleRegistrar = async () => {
        //Verificar todos los parametros
        if (!name || !email  || !password){
            Alert.alert('Error', 'Por favor, rellena todos los campos para continuar');
            return;
        }
        //Verificar longitud de contraseña
        if (password.length <= 5){
            Alert.alert('Error', 'La contraseña es muy corta');
            return;
        }
        //Verificar la contraseña sea igual
        if (password !== confirmPassword){
            Alert.alert('Error', 'Las contraseñas no coenciden');
            return;
        }
        //Verificar el correo
        if(!validateEmail(email)){
            Alert.alert('Error', 'El may esta mal escrito');
            return;
        }

        //Registrar el usuario en la base datos
        setIsLoading(true);
        
        try{
            //Creamos el objeto userData 
            const userData = {name, email, password};
            
            //Llamamos a la funcion del servicio y esperamos su respuesta
            const result = await registrar(userData);

            //Si el registro es existo, mostraremos un mensaje de existo
            Alert.alert('!Exito', 'Usuario registrado ${result.email}');
            console.log('Registro exitoso:', result);

            //Abrir el home de la aplicacion
            navigation.navigate('Home');
        } catch (error){
            Alert.alert('Error', error.messege || 'Ocurrio un eror inesperado');
        } finally {
            setIsLoading(false);
        }
        
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrate</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Repite la contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title={isLoading ? 'Cargando...' : 'Registrarse'}
                        disabled={isLoading}
                        onPress={handleRegistrar}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cancelar"
                        onPress={handleCacelar}
                        
                    />
                </View>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
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


export default RegistroScreen;