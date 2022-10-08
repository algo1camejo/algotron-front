import api from 'src/config/api';
import {
  InstancesResponse,
  EntregasResponse,
  EntregaDetailResponse,
} from 'src/types/tps';

export const getInstances = () =>
  api.get<InstancesResponse>('/tps/api/v1/tps/');

export const getActiveInstances = () =>
  api.get<InstancesResponse>('/tps/api/v1/tps/?vigente=true');

export const createTP = (data: any) =>
  api.post('/tps/api/v1/entregas/', data, {
    headers: { "Content-Type": "multipart/form-data" }
  });

export const getEntregas = (page: number = 1, limit: number = 10, corregido = false) =>{
  return api.get<EntregasResponse>('/tps/api/v1/entregas/', {
    params: corregido
     ? { offset: (page - 1) * limit, limit, corregido }
     : { offset: (page - 1) * limit, limit }
  });
}
  

export const getEntregaDetail = (id: number) =>
  api.get<EntregaDetailResponse>(`/tps/api/v1/entregas/${id}/`);
