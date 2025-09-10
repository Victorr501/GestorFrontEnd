import React, {cache, useEffect, useState} from "react"; 
import{
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { actualizarContrasena, login } from "../../../services/userService";

const EditarContrasenaScreen = ({user, cerrarSesion}) => {


    //Estados de los parametros
    const [contrasenaAntigua, setContrasnaAntigua] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [repiteContrasena, setRepiteContrasena] = useState("");
    const email = user.email;

    //Estados de ver la contraseña
    const [visible, setVisible] = useState(false);
    const [visibleNueva, setVisibleNueva] =useState(false);
    const [visibleRepetir, setVisibleRepetir] = useState(false);

    //Parametros para el error
    const [error, setError] = useState('');

    //Metodo para actualizar la contraseña
    const handleSave = async () => {
        setError('');

        if(contrasena != repiteContrasena){
            setError("Las contraseñas no coenciden");
            return;
        }

        const dataUser = {email, password: contrasenaAntigua};
        try{

            const result = await login(dataUser);

            const actualizarUser = {password: contrasena};
            await actualizarContrasena(actualizarUser, user.id);

            cerrarSesion();

        } catch (errorCatch) {
            console.log(errorCatch.message);
            Alert.alert('Error', errorCatch.message);
        }
        
        
    }

    return(
        <View style= {styles.container}>
            <Text style= {styles.title}>Editar contraseña</Text>
            <View style= {styles.formGroup}>
                <Text style={styles.label}>Contraseña</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        value={contrasenaAntigua}
                        onChangeText={setContrasnaAntigua}
                        secureTextEntry={!visible}
                    />
                    <TouchableOpacity 
                        style={styles.eyeBtn}
                        onPress={() => setVisible(!visible)}
                    >
                        <Text style={styles.eyeText}>
                            {visible ? "🙈" : "👁️"}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style= {styles.formGroup}>
                <Text style={styles.label}>Contraseña nueva</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        value={contrasena}
                        onChangeText={setContrasena}
                        secureTextEntry={!visibleNueva}
                    />
                    <TouchableOpacity 
                        style={styles.eyeBtn}
                        onPress={() => setVisibleNueva(!visibleNueva)}
                    >
                        <Text style={styles.eyeText}>
                            {visibleNueva ? "🙈" : "👁️"}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Repite contraseña</Text>
                <View style={styles.passwordContainer} >
                    <TextInput
                        style={styles.inputPassword}
                        value={repiteContrasena}
                        onChangeText={setRepiteContrasena}
                        secureTextEntry={!visibleRepetir}
                    />
                    <TouchableOpacity 
                        style={styles.eyeBtn}
                        onPress={() => setVisibleRepetir(!visibleRepetir)}
                    >
                        <Text style={styles.eyeText}>
                            {visibleRepetir ? "🙈" : "👁️"}
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            {/*Linea de error por si algo sale mal */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                    <Text style={styles.buttonText}>Guardar Cambios</Text>
                </TouchableOpacity>
            </View>                
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#555',
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    inputPassword: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    errorText: {
        color: '#d32f2f',
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 14,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        minWidth: 130,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
    },
    cancelButton: {
        backgroundColor: '#9E9E9E',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    eyeBtn: {
        paddingHorizontal: 10,
    },
    eyeText: {
        fontSize: 18,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom: 15,
    },
});

export default EditarContrasenaScreen;