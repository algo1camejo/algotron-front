import api from 'src/config/api';
import { ChangePassData } from 'src/types/changePass';

export const sendPasswordReset = (email: string) =>
    api.post('/api/password-reset/', { email });

export const changePassword = (data: ChangePassData) =>
    api.post('/api/password-change/', data);