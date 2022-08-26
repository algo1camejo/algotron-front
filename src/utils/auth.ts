import mem from "mem";
import api from 'src/config/api';
import { User } from 'src/types/auth';

export const getFullName = (user: User | null): string => (
  [
    user?.firstName,
    user?.lastName,
  ].filter(str => !!str).join(' ')
);

export const initializeSession = () => {
  const access = localStorage.getItem('access');

  if(!access) return;
  setAuthInterceptors();
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

const setAuthInterceptors = () => {
  // access token interceptor
  api.interceptors.request.use(
    async (config) => {
      const access = localStorage.getItem('access');
      if (access) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${access}`,
        };
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
      if(error.response.status === 401 && !config?._retry) {
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

    if (!refresh) return;

    const { data } = await api.post('/api/token/refresh/', { refresh })

    if (data.access) {
      localStorage.setItem('access', data.access);
    }
  },
  { maxAge: 1000 * 30 } // 30 seconds
);