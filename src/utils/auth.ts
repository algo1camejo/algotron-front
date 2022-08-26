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

  api.defaults.headers.common.Authorization = `Bearer ${access}`;
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
  api.defaults.headers.common.Authorization = `Bearer ${access}`;
};

export const clearSession = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('padron');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  delete api.defaults.headers.common.Authorization;
};
