import api from 'src/config/api';
import {
  LoginData,
  LoginResponse,
} from 'src/types/auth';

export const login = (loginData: LoginData) =>
  api.post<LoginResponse>('api/token/', loginData);
