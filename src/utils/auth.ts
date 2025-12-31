import mem from "mem";
import api from 'src/config/api';
import { refreshToken as refreshTokenRequest } from 'src/services/auth';
import {
  User,
  AuthError,
  AUTH_ERRORS,
} from 'src/types/auth';

export const getFullName = (user: User | null): string => (
  [
    user?.firstName,
    user?.lastName,
  ].filter(str => !!str).join(' ')
);

export const initializeSession = (
  onError: (err: AuthError) => void = () => null,
) => {
  const access = localStorage.getItem('access');
  if(!access) {
    onError(AUTH_ERRORS.CANT_ACCESS);
    return;
  }

  setAuthInterceptors(onError);
};

export const getUser = (): User | null => {
  const padron = localStorage.getItem('padron');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  
  if (!padron || !firstName || !lastName) return null;

  return ({
    padron: Number(padron),
    firstName,
    lastName,
  });
};

export const setSession = (
  access: string,
  refresh: string,
  user: User,
) => {
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
  localStorage.setItem('padron', user?.padron?.toString());
  localStorage.setItem('firstName', user?.firstName);
  localStorage.setItem('lastName', user?.lastName);
};

export const clearSession = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('padron');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  delete api.defaults.headers.common.Authorization;
};

const setAuthInterceptors = (
  onError: (err: AuthError) => void = () => null,
) => {
  
  // access token interceptor
  api.interceptors.request.use(
    async (config) => {
      const access = localStorage.getItem('access');
      if (access && config.headers) {
        config.headers.authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // refresh token interceptor
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const config = error?.config;
      if(error?.config?.url === '/api/token/refresh/') {
        onError(AUTH_ERRORS.CANT_REFRESH);
      }
      else if(error.response.status === 401 && !config?._retry) {
        config._retry = true; // to avoid infinite loop in case there is an error.

        await refreshToken();

        return api(config);
      }
      return Promise.reject(error);
    }
  )
}

const refreshToken = mem(async () => 
  {
    const refresh = localStorage.getItem('refresh');

    if (!refresh) throw new Error('No refresh token');

    const { data } = await refreshTokenRequest({ refresh });

    if (data.access) {
      localStorage.setItem('access', data.access);
    }
  },
  { maxAge: 1000 * 30 } // 30 seconds
);

export const setToken = () =>{

  api.interceptors.request.use(
    async (config) => {
      const access = localStorage.getItem('access');
      if (access && config.headers) {
        config.headers.authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

}