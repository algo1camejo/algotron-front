import { FC, ReactNode, createContext, useState } from 'react';
import { AxiosResponse } from 'axios';
import * as authService from 'src/services/auth';
import { setSession, clearSession } from 'src/utils/auth';
import {
  LoginData,
  LoginResponse,
  AuthState,
} from 'src/types/auth';

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('access'),
  user: null,
};

type AuthContextValue =
  AuthState &
  {
    login: (loginData: LoginData) => (
      Promise<AxiosResponse<LoginResponse> | null>
    ),
    logout: () => void,
  };

const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  login: async () => null,
  logout: () => null,
});

export type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;

  const [state, setState] = useState<AuthState>(initialState);

  const login = async (loginData: LoginData) => {
    const response = await authService.login(loginData);

    const { access, refresh } = response.data;

    setSession(access, refresh);

    setState({
      isAuthenticated: true,
      user: null,
    });

    return response;
  };

  const logout = () => {
    clearSession();

    setState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

