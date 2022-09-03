export interface ChangePassData {
    old_password: string;
    new_password: string;
    confirm_password: string;
}

export interface ResetPassData{
    token : string;
    password: string;
}