import {UserData} from '../types/User';

//URL base de tu API
//Si se modifica solo tengo que cambiarla
const API_BASE_URL = 'https://127.0.2.2:8000/api/v1';


/**
 * Funciona para registrar un nuevo usuario en el backend.
 *
 * @param {object} userData - El objeto con los datos del usuario
 * @returns {Promise<object>} - Una promesa que resuleve con los datos del usuario si el registro es existoso
 */
export const registrar = async(userData) =>{
    try {
        const response = await fetch('${API_BASE_URL}/users/', {
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

