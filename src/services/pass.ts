import api from 'src/config/api';
import { ChangePassData, ResetPassData } from 'src/types/changePass';

export const sendPasswordReset = (email: string) =>
    api.post('/api/password-reset/', { email });

export const changePassword = (data: ChangePassData) =>
    api.post('/api/password-change/', data);

export const isResetTokenValid = (token: string) =>
    api.post("/api/password-reset/validate_token/", { token });

export const resetPassword = (data: ResetPassData) => {
    api.post("/api/password-reset/confirm/", data);
}