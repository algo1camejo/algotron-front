import api from "src/config/api";

export const getMaterial = async () => {
    const response = await api.get(`/api/v1/material/`);

    if (response.status === 200 && response.data) {
        console.log(response);
    }else{
        throw new Error('Error al obtener el material');
    }
}