

const API_BASE_URL = 'http://10.0.2.2:8000/api/v1';

export const getAllCategorias = async() => {
     const url = `${API_BASE_URL}/categoria_eventos/`;

    try{
        const response = await fetch(url, {
            method: "get",
            headers: {
                "Contengt-Type": "application/json"
            }
        })

        if(!response.ok){
            const ErrorData = await response.json();
            throw new error(ErrorData.detail);
        }

        const result = await response.json();
        return result;
    } catch(error){
        console.error("Error en el servidor", error.message);
        throw error;
    }
}