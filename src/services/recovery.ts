import api from 'src/config/api';

export const sendPasswordReset = (email: string) =>
  api.post('/api/password-reset/', { email });

export const validatePasswordResetToken = (token: string) =>
  api.post('/api/password-reset/validate_token/', { token });

export const resetPassword = (token: string, password: string) =>
  api.post('/api/password-reset/confirm/', { token, password });
