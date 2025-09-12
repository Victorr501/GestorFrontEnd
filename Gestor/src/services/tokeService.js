

const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';

export const enviarRecuperacion = async(email) =>{
    const url = `${API_BASE_URL}/token/enviarRecuperacion/${email}`;

    try{

        const response = await fetch(url, {
            method :'POST',
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({email})
        });

        if(!response.ok){
            const erroData = await response.json();
            throw new Error(erroData.detail);
        }

        const result = await response.json();
        return result;

    } catch(error){
        console.error("Error en el servidor", error.message);
        throw error;
    }
}