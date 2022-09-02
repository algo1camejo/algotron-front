import api from 'src/config/api';

export const sendPasswordReset = (email: string) =>
    api.post('/api/password-reset/', { email });