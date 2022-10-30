import api from 'src/config/api';
import { ExamenesResponse, Result } from 'src/types/examenes';

export const getExamenes = async () => {
    const response = await api.get<ExamenesResponse>('/examenes/api/v1/entregas/');

    if (response.status === 200 && response.data) {
        return response.data;
    }else{
        throw new Error('Error al obtener los examenes');
    }
}

export const getExamen = async (id: string | undefined) => {
    if (!id) throw new Error('No id');
    const response = await api.get<Result>(`/examenes/api/v1/entregas/${id}/`);

    if (response.status === 200 && response.data) {
        return response.data;
    }else{
        throw new Error('Error al obtener el examen');
    }
}