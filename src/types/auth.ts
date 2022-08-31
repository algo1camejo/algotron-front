export const AUTH_ERRORS = {
  CANT_ACCESS: 'CANT_ACCESS' as const,
  CANT_REFRESH: 'CANT_REFRESH' as const,
  NO_ERROR: '' as const,
};

export type AuthError =
  'CANT_ACCESS' |
  'CANT_REFRESH' |
  '';

export type User = {
  firstName: string;
  lastName: string;
  padron: number;
};

export type AuthState = {
  isError: boolean,
  error: AuthError,
  isAuthenticated: boolean;
  user: User | null;
};

// Data
export type LoginData = {
  email: string;
  password: string;
};

export type RefreshTokenData = {
  refresh: string;
};

// Response
export type LoginResponse = {
  access: string;
  refresh: string;
  first_name: string;
  last_name: string;
  padron: number;
};

export type RefreshTokenResponse = {
  access: string;
};
