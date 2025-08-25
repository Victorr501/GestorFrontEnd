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


const HomeScreen = ({navigation}) => {

    //Estado para almacenar el nombre del usuario
    const [userName, setUserName] = useState('Usuario');
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    //Esto se ejecutara cuando el componente se monte.
    //Para cargar el usuario
    useEffect(() => {

    }, []);

    //Funcion para mostrar/ocultar el menú
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    //Funcion para manejar el cierre de sesión
    const handleLogout = () => {
        console.log("Cerrando sesión...");
        navigation.navigate('Login');
    };

    //Funcio para manejar el boton del perfil
    const handlePerfil = () => {
        setIsMenuVisible(false); //Oculta el menú
        
    }

    //Componente que es la barra de navegación inferior
    const BottomTabBar = () => {
        const [activeTab, setActiveTab] = useState('plus');

        const handlePress = (tabName) => {
            setActiveTab(tabName);

            //Esto es para gestionar y verificar que funcionan las cosas
            Alert.alert('Navegación', 'Presionaste el botón: ' + tabName);
        };

        return (
            <View style={styles.tabBarContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'home' && styles.tabButtonActive]}
                    onPress={() => handlePress("home")}
                >
                    <Text style={styles.tabIcon}>🏠</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.tabButton, activeTab === 'search' && styles.tabButtonActive]}
                onPress={() => handlePress('search')}
                >
                    <Text style={styles.tabIcon}>🔍</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.centerTabButton}
                    onPress={() => handlePress('plus')}
                >
                    <Text style={styles.centerTabIcon}>➕</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.tabButton, activeTab === 'notifications' && styles.tabButtonActive]}
                    onPress={() => handlePress('notifications')}
                >
                    <Text style={styles.tabIcon}>🔔</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.tabButton, activeTab === 'profile' && styles.tabButtonActive]}
                    onPress={() => handlePress('profile')}
                >
                    <Text style={styles.tabIcon}>👤</Text>
                </TouchableOpacity>
            </View>
        )
    }


    //Este as la pantalla principal
    return(
        <SafeAreaView style={styles.safeArea}>
            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.greetingText}>Hola, {userName}</Text>
                <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
                    <Text style={styles.menuIcon}>⋮</Text>
                </TouchableOpacity>
            </View>

            {/* Menu de opciones desplegables */}
            {isMenuVisible &&(
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={handlePerfil}>
                        <Text style={styles.menuItemText}>perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                        <Text style={styles.menuItemText}>Cerrar sesion</Text>
                    </TouchableOpacity>
                </View>
            )}


            {/* Contendio principal */}
            <View style={styles.contentContainer}>
                <Text>Contenido principal</Text>
            </View>
            
            {/* 
                Asi es como se inserta los objetos 
                Este es la barra de opciones
            */}
            <BottomTabBar/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 20 : 10,
        paddingBottom: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        zIndex: 1, // Para que el menú aparezca encima del contenido
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    menuButton: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    menuIcon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#555',
    },
    menuContainer: {
        position: 'absolute',
        top: 60, // Ajusta la posición para que esté justo debajo del botón del menú
        right: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 2, // Asegura que el menú esté por encima de todo
        padding: 5,
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        minWidth: 150,
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80,
    },
    //EStilos de la barra
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 100,
        position: 'absolute', // Aseguramos que se quede en la parte inferior
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    tabButtonActive: {
        // Estilos para el botón activo si necesitas un efecto de "selección"
    },
    tabIcon: {
        fontSize: 24,
        color: '#888',
    },
    centerTabButton: {
        backgroundColor: '#6200EE', // Color destacado para el botón central
        width: 60,
        height: 60,
        borderRadius: 20
, // Forma de círculo
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerTabIcon: {
        fontSize: 30,
        color: '#fff',
    },
});

export default HomeScreen;