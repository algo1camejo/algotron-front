import api from 'src/config/api';

export const setSession = (
  access: string,
  refresh: string,
) => {
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
  api.defaults.headers.common.Authorization = `Bearer ${access}`;
};

export const clearSession = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  delete api.defaults.headers.common.Authorization;
};
