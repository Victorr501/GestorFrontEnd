import {UserData} from '../types/User';

//URL base de tu API
//Si se modifica solo tengo que cambiarla
const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';


/**
 * Funciona para registrar un nuevo usuario en el backend.
 *
 * @param {object} userData - El objeto con los datos del usuario
 * @returns {Promise<object>} - Una promesa que resuleve con los datos del usuario si el registro es existoso
 */
export const registrar = async(userData) =>{
    const url = `${API_BASE_URL}/users/`;
    console.log("Intentando conectar a la URL:", url);    
    try {
        
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        
    

        //Verficamos si la respuesta es exitosa
        if(!response.ok){
            const erroData = await response.json();
            throw new Error(erroData.datail || 'Error en el registro');
        }

        // si la respues es existosa, devovlemos el resultado en JSON
        const result = await response.json();
        return result;
    } catch(error) {
        //Relanzamos el error para que el componente lo pueda manera
        console.error('Error en authService.registerUser:', error.message);
        throw error;
    }
}

/**
 * Funcion para el login del usuario
 * 
 * @param {object} userData - El objeto es el usuario con el cual vamos a iniciar sesion
 * @returns {Promise<object>} - Una promesa que resuleve con los datos del usuario si el registro es existoso
 */

export const login = async(userData) => {
    const url = `${API_BASE_URL}/users/login`;
    console.log("Intenando conectar a la url: ", url );
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });


        //Verificamos si la respuesta es correcta
        if (!response.ok){
            const erroData = await response.json();
            throw new Error(erroData.detail ||'Error de credenciales');
        }

        const result = await response.json();
        return result;
    } catch(error){
        //Relanzamos el error para que el componente lo pueda manera
        console.error('Error en authService.registerUser:', error.message);
        throw error;
    }
}

/**
 * Funcion que llama al servidor para actualizar un usuario
 * @param {object} userData - El usuario actualizado envio el usuario y este se actualiza
 * @param {string} userId - El id del usuario que queremos actualizar
 * @returns {Promise<Object>} - Si es existoso devuevle un suaurio
 */
export const actualizarUsuario = async(userData , userId) => {
    const url = `${API_BASE_URL}/users/actualizar/${userId}`;
    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok){
            const erroData = await response.json();
            throw new Error(erroData.message || 'Error al actualizar el usuario');
        }

        const result = await response.json();
        return result;
    } catch (error){
        const respuesta = 'Error a actualizar el siguiente usuario';
        console.error(respuesta, error);
        throw error;
    }
}


/**
 * Funcion para actualizar la contraseña
 * @param {object} userData - El usuario para actualizar solo con la contraseña
 * @param {string} userId - El id del usuario que queremos actualizar su contraseña
 * @returns {Promise<Object>} - Si es existoso devuevle un suaurio
 */
export const actualizarContrasena = async(userData, userId) => {
    const url = `${API_BASE_URL}/users/actualizar/contrasena/${userId}`
    try{
        const response = await fetch(url,{
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        });        
    
        if(!response.ok){
            const erroData = await response.json();
            throw new error(erroData.message || 'Error al actualizar contraseña');
        }

        const result = await response.json();
        return result;

    } catch (error){
        const respuesta = 'Error al actualizar la contraseña';
        console.error(respuesta, error);
        throw error;
    }
}

/**
 * Este metodo manda un mensaje al backend que lo que hace es eliminar una cuenta
 * @param {string} userId - Esto es el id del usuario que quieres eliminar
 * @returns {Promise<object>} - Devuelve esto si es exitoso
 */
export const eliminarCuenta = async(userId) => {
    const url = `${API_BASE_URL}/users/eliminar/${userId}`;
    try {
        const response = await fetch(url,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json",
            }
        });

        if(!response.ok){
            const erroData = await response.json();
            throw new Error(erroData.message||"Error al eliminar el usuario de la base de datos");
        }

        const result = await response.json();
        return result;
    } catch (error){
        const respuesta = "Error al eliminar el usuario";
        console.error(respuesta, error);
        throw error;
    }
}

