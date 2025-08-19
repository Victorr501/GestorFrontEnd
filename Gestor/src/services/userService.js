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
            throw new Error(erroData ||'Error de credenciales');
        }

        const result = await response.json();
        return result;
    } catch(error){
        //Relanzamos el error para que el componente lo pueda manera
        console.error('Error en authService.registerUser:', error.message);
        throw error;
    }
}

