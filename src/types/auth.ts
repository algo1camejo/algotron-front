export type User = {
  firstName: string;
  lastName: string;
  padron: number;
};

export type AuthState = {
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
