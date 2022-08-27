import api from 'src/config/api';
import {
  LoginData,
  LoginResponse,
  RefreshTokenData,
  RefreshTokenResponse,
} from 'src/types/auth';

export const login = (loginData: LoginData) =>
  api.post<LoginResponse>('api/token/', loginData);

export const refreshToken = (data: RefreshTokenData) =>
  api.post<RefreshTokenResponse>('/api/token/refresh/', data);
