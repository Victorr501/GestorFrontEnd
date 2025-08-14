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

const LoginScreen = ({navigation}) => {
    //useState hook para gestionar el estado del email y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Función que se ejecuta al presionar al botón de "Entrar"
    const handleLogin = () => {
        //Verificamos que los campos no estén vacios
    }

    //Función botón "Registrate"
    const handRegistar = () => {
        navigation.navigate('Registro')
    }

    //Diseño de la aplicacion
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style= {styles.container}>
                <Text style= {styles.title}>Iniciar Sesion</Text>
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
                <View style={styles.buttonContainer}>
                    <Button
                        title="Iniciar sesion"
                        onPress={handleLogin}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Registrar"
                        onPress={handRegistar}
                    />
                </View>
            </View>
        </SafeAreaView>
    );


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
});

export default LoginScreen;