export type User = {
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

// Response
export type LoginResponse = {
  access: string;
  refresh: string;
};
