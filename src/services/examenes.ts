import api from 'src/config/api';
import { ExamenesResponse, Entrega } from 'src/types/examenes';

export const getExamenes = async () =>
  api.get<ExamenesResponse>('/examenes/api/v1/entregas/');

export const getExamen = async (id: string | undefined) =>
  api.get<Entrega>(`/examenes/api/v1/entregas/${id}/`);
