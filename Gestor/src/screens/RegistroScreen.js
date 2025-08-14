import React, {useState} from "react";
import {
    View, 
    Text,  
    TextInput, 
    Button,
    SafeAreaView,
    StyleSheet
} 
from 'react-native';




const RegistroScreen = ({navigation}) => {
    //Varibles locales
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repitPassword, setrepitPassword] = useState('');
    const [name, setName] = useState('');

    //Esta variale activa el boton
    const [isLoading, setIsLoading] = useState(false);

    //Función para cancelar
    const handleCacelar = () => {
        navigation.navigate('Login')
    }

    //Funcion para registrar y usar 
    const handleRegistrar = () => {
        //Verificar todos los parametros

        //Registrar el usuario en la base datos

        //Abrir el home de la aplicacion
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
                    onChange={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Repite la contraseña"
                    value={repitPassword}
                    onChangeText={setrepitPassword}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Registrarte"
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