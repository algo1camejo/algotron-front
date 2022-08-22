import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'src/hooks';
import Login from 'src/pages/auth/Login';

export type AuthGuardProps = {
  children: ReactNode;
};

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return <Login/>;
  }

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation}/>;
  }

  return <>{children}</>;
};

export default AuthGuard;
