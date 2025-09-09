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
import { login, eliminarCuenta } from "../../../services/userService";

const EliminarCuentaScreen = ({user, cerrarCesion}) => {

    const email = user.email;
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");

    const handleDelete = async () => {

        setError("");

        if(contrasena === ""){
            setError("Tienes que rellenar este campo");
            return;
        }

        try{
            
            const dataUser = {email, password: contrasena};
            const result = await login(dataUser);

            await eliminarCuenta(user.id);

            cerrarCesion();
        } catch (errorCatch) {
            console.log(errorCatch.messege);
            Alert.alert("Error", errorCatch.messege);
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eliminar cuenta</Text>
            <Text style={styles.subtitle}>
                Escribe la contraseña para verificar
            </Text>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput 
                    style={styles.input}
                    value={contrasena}
                    onChangeText={setContrasena}
                    placeholder="Tu contraseña"
                    textContentType="password"
                />
                <TouchableOpacity
                    onPress={handleDelete}
                    style={styles.deleteBtn}
                >
                    <Text style={styles.deleteText}>Eliminar Cuenta</Text>
                </TouchableOpacity>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <Text style={styles.note}>
                    Esta acción no se puede deshacer. Se borrarán tus datos de manera permanente.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: '#222',
    },
    subtitle: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 24,
    },
    formGroup: {
        marginBottom: 18,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#444',
        marginBottom: 8,
    },
    passwordRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 14,
        backgroundColor: '#fff',
    },
    eyeBtn: {
        height: 50,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    eyeText: { fontSize: 18 },
    error: {
        marginTop: 8,
        color: '#d32f2f',
        textAlign: 'left',
    },
    deleteBtn: {
        height: 52,
        borderRadius: 12,
        backgroundColor: '#e53935',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    disabledBtn: {
        opacity: 0.6,
    },
    deleteText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    note: {
        marginTop: 16,
        fontSize: 12,
        color: '#777',
        textAlign: 'center',
    },
    errorText: {
        color: '#d32f2f',
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 14,
    },
});

export default EliminarCuentaScreen;