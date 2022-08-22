import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks';

export type GuestGuardProps = {
  children: ReactNode;
};

export const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/"/>;
  }

  return <>{children}</>;
};

export default GuestGuard;
