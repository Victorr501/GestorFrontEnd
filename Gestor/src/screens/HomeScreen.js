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
import PerfilScreen from "../screens/Home/PerfilScreen";
import EditarUsuarioScreen from "../screens/Home/perfil/EditarUsusuarioScreen";
import EditarContrasenaScreen from "./Home/perfil/EditarConstrasenaScreen";
import EliminarCuentaScreen from "./Home/perfil/EliminarCuentaScreen";
import CalendarioScreen from "./Home/CalendarioScreen";
import CrearEventoSceen from "./Home/calendario/crearEventoScreen";


//Simulacion de vantanas del proyecto
const PrimeraScreenContent = () => <Text style={styles.contentTitle}>Contenido de la Pantalla de 1</Text>
const TerceraScreenContent = () => <Text style={styles.contentTitle}>Contenido de la Pantalla de 3</Text>
const CuertaScreenContent = () => <Text style={styles.contentTitle}>Contenido de la Pantalla de 4</Text>
const HomeScreenContent = () => <Text style={styles.contentTitle}>Contenido de la Pantalla de Inicio</Text>



/**
 * Funcion que te devuelve el componete que son unos botones y tambien compruba que boton ha dado para mostrartelo por pantalla
 * 
 * @param {string} onTabPress - Es el nombre que modifica el atributo que hemos marcado 
 * @returns {View} - Devuelve el componente de los botones
 */
const BottomTabBar = ({onTabPress}) => {
    const [activeTab, setActiveTab] = useState('plus');

    const handlePress = (tabName) => {
        setActiveTab(tabName);
        onTabPress(tabName); //La funcion es la del padre
    };

    return (
        <View style={styles.tabBarContainer}>
            <TouchableOpacity
                style={[styles.tabButton, activeTab === 'home' && styles.tabButtonActive]}
                onPress={() => handlePress("1")}
            >
                <Text style={styles.tabIcon}>🏠</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.tabButton, activeTab === 'search' && styles.tabButtonActive]}
            onPress={() => handlePress('calendario')}
            >
                <Text style={styles.tabIcon}>📅</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.centerTabButton}
                onPress={() => handlePress('home')}
            >
                <Text style={styles.centerTabIcon}>➕</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.tabButton, activeTab === 'notifications' && styles.tabButtonActive]}
                onPress={() => handlePress('3')}
            >
                <Text style={styles.tabIcon}>🔔</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.tabButton, activeTab === 'profile' && styles.tabButtonActive]}
                onPress={() => handlePress('4')}
            >
                <Text style={styles.tabIcon}>👤</Text>
            </TouchableOpacity>
        </View>
    )
}

const HomeScreen = ({navigation, route}) => {
    //Usamos userRoute para acceder a los parámetros
    const navigationRoute = useRoute();

    //Estado para almacenar el nombre del usuario
    const [userName, setUserName] = useState('Usuario');
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const user = navigationRoute.params.user;

    //Estado de la ventana para ver caul es
    const [activeScreen, setActiveScreen] = useState('home');
    const [subActiveScreen, setSubActivScreen] = useState('0');
    cosnt [subActiveScreenCalendario, setSubActivScreenCalendario] = useState('0');

    //Esto se ejecutara cuando el componente se monte.
    //Para cargar el usuario
    useEffect(() => {
        //Obtenemos el usuario de los parámetros de la ruta
        if (user){
            setUserName(user.name);
        }
    }, [navigationRoute.params]);

    //Funcion para mostrar/ocultar el menú
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    //Funcion para manejar el cierre de sesión
    const handleLogout = () => {
        console.log("Cerrando sesión...");
        navigation.navigate('Login');
    };

    //Finciones del menu
    //Ir a crear evento
    const irAAñadirEvento = () =>{
        setActiveScreen('calendario');
        setSubActivScreenCalendario('1');
    }

    //Funciones del perfil
    //Funcio para manejar el boton del perfil
    const handlePerfil = () => {
        setIsMenuVisible(false); //Oculta el menú
        setActiveScreen('perfil');
        setSubActivScreen('0');
    }
    //Funcion para editar usuario
    const handleEditar = () => {
        setActiveScreen('perfil');
        setSubActivScreen('1');
    }
    
    //Funcion para editar usuario contraseña
    const handleEditarCotrasena = () => {
        setActiveScreen('perfil');
        setSubActivScreen('2');
    }

    //Funcion para eliminar perfil
    const handlePressEliminar = () => {
        setActiveScreen('perfil');
        setSubActivScreen('3');
    }
    

    //Metodo para renderizar el contenido
    const renderScreenContent = () => {
        switch(activeScreen) {
            case 'home':
                return <HomeScreenContent/>
            case '1':
                return <PrimeraScreenContent/>
            case 'calendario':
                switch(subActiveScreenCalendario){
                    case '0':
                        return <CalendarioScreen user={user}/>
                    case '1':
                        return <CrearEventoSceen user={user}/>
                }
            case '3':
                return <TerceraScreenContent/>
            case '4':
                return <CuertaScreenContent/>
            case 'perfil':
                switch(subActiveScreen){
                    case '0':
                        return <PerfilScreen user={user} handlePressModificarUsuario={handleEditar} handlePressModifcarContraseña={handleEditarCotrasena} handlePressEliminar={handlePressEliminar}/>
                    case '1':
                        return <EditarUsuarioScreen user={user} cerrarSesion={handleLogout}/>
                    case '2':
                        return <EditarContrasenaScreen user={user} cerrarSesion={handleLogout}/>
                    case '3':
                        return <EliminarCuentaScreen user={user} cerrarSesion={handleLogout}/>
                    default:
                        return <PerfilScreen user={user} handlePressModificarUsuario={handleEditar}/>
                }
            default:
                return <HomeScreenContent/>
        }
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
                        <Text style={styles.menuItemText}>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                        <Text style={styles.menuItemText}>Cerrar sesion</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Contendio principal */}
            <View style={styles.contentContainer}>
                {/* 
                    Aqui es donde se ejecutara el metodo renderScreenConteniner
                */}
                {renderScreenContent()}
            </View>
            
            {/* 
                Asi es como se inserta los objetos 
                Este es la barra de opciones
                OnTabPress es un metodo que se ejecuta cada vez que damos aun boton
            */}
            <BottomTabBar onTabPress={setActiveScreen}/>
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
        alignItems: 'stretch',
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