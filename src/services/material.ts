import api from "src/config/api";
import { MaterialResponse } from "src/types/Material";

export const getMaterial = async () => {
    const response = await api.get<MaterialResponse>(`material/api/v1/material/`);

    if (response.status === 200 && response.data) {
        return response.data;
    }else{
        throw new Error('Error al obtener el material');
    }
}