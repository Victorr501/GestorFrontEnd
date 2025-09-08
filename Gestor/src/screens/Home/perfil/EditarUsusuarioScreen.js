import React, {useEffect, useState} from "react"; 
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
import {validateEmail} from "../../../utils/ValidarEmail";
import { actualizarUsuario } from "../../../services/userService";



/**
 * Pantalla que edita el nombre y correo
 * @param {object} props.user - Objeto de usuario actual con 'nombre' y 'correo'
 * 
 */
const EditarUsuarioScreen = ({user , cerrarSesion}) => {
    //Constantes de nombre y usuario
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    //Estado para manejar posibles errores de validazion
    const [error, setError] = useState('');


    //Metodo que se ejecuta cuando se actualiza
    const handleSave = () => {
        setError('');

        if(!name || !email) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        if(!validateEmail(email)){
            setError('Por favor, indtrouce un correo electrónico válido');
        }

        const userDataActualizar = {name, email};
        actualizarUsuario(userDataActualizar, user.id);

        cerrarSesion();
    }
    

    return (
        <View style= {styles.container}>
            <Text style= {styles.title}>Editar perfil</Text>
            <View style= {styles.formGroup}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Tu nombre"
                    autoCapitalize="words"
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="ejemplo@correo.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
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
});

export default EditarUsuarioScreen;