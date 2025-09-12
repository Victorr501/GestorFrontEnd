import React, {useState} from "react"; 
import{
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { validateEmail } from "../utils/ValidarEmail";
import { enviarRecuperacion } from "../services/tokeService";

const RecuperarContraseñaScreen = ({navigation}) => {
    

    //Parametro del correo
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    //Metodo para volver atras
    const handleBack = () => {
       navigation.navigate('Login');
    }

    const handleEnviarPeticion = async () => {
        if(!email){
            setError("Tienes que escribir una contraseña");
            return;
        }

        if(!validateEmail(email)){
            setError("El correo no es valido");
            return;
        }

        try{

            await enviarRecuperacion(email);
            setError("Verifica el correo");
            setEmail("");

        } catch(error){
            console.log(error);
            alert("Error de conexión con el servidor");
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Recuperar contraseña</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Introduce tu correo"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <View style={styles.buttonContainer}>
                    <Button title="Enviar correo" onPress={handleEnviarPeticion}/>
                </View>

                <View style={styles.buttonContainer}>
                    <Button title="Volver atras" onPress={handleBack}/>
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40,
        color: "#333",
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    inputPassword: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 10,
    },
    eyeBtn: {
        paddingHorizontal: 10,
    },
    eyeText: {
        fontSize: 18,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 10,
        borderRadius: 25,
        overflow: "hidden",
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        textAlign: "center",
    },
    olvidarContrseña:{
        
    }
});


export default RecuperarContraseñaScreen;