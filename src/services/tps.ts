import api from 'src/config/api';
import {
  InstancesResponse,
} from 'src/types/tps';

export const getInstances = () =>
  api.get<InstancesResponse>('/tps/api/v1/tps/');

export const getActiveInstances = () =>
  api.get<InstancesResponse>('/tps/api/v1/tps/?vigente=true');

export const createTP = (data: any) =>
  api.post('/tps/api/v1/entregas/', data, {
    headers: { "Content-Type": "multipart/form-data" }
  });
