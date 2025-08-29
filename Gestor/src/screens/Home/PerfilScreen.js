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
import { useRoute } from "@react-navigation/native";

/*Hay que poner los 2 metodos para ir al eliminar cuenta y al editar contraseña*/
const PerfilScreen = ({user, handlePressModificarUsuario, handlePressModifcarContraseña}) => {
    

    const [userName, setUserName] = useState(user.name);
    const [userMail, setUserMail] = useState(user.email);


    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container}>
                <Text style={styles.title}>Perfil de usuario</Text>
                <Text style={styles.subtitle}>Nombre: {userName}</Text>
                <Text style={styles.subtitle}>Correo: {userMail}</Text>

                {/* Botón para eliminar la cuenta (sin funcionalidad) */}  
                <TouchableOpacity
                    onPress={() => handlePressModificarUsuario()}
                    style={styles.button}
                >
                        <Text style={styles.buttonText}>Modificar Usuario</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handlePressModifcarContraseña()}
                >
                    <Text style={styles.buttonText}>Cambiar Contraseña</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, styles.deleteButton]}
                    onPress={() => handlePressEliminar()}
                >
                    <Text style={styles.buttonText}>Eliminar Cuenta</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 40,
    color: '#666',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
});

export default PerfilScreen;