import './custom.scss';
import { Routes, Route } from 'react-router-dom';
import Base from 'src/pages/app/Base';
import Home from 'src/pages/app/Home';
import TrabajosPracticos from 'src/pages/app/TrabajosPracticos';
import Login from 'src/pages/auth/Login';
import Examenes from 'src/pages/app/Examenes';
import PasswordChange from 'src/pages/app/PasswordChange';
import NotFound from 'src/pages/error/NotFound';
import { AuthGuard, GuestGuard } from 'src/components/guards';
import {SendRecoveryEmail} from 'src/pages/recovery/SendRecoveryEmail'; 
import {PasswordReset} from './pages/recovery/PasswordReset';

function App() {
  return (
    <Routes>
      <Route path ="/password-reset" element={<PasswordReset/>}/>
      <Route path = "/sendRecoveryEmail" element = {<SendRecoveryEmail/>} />
      <Route
        path="login/*"
        element={
          <GuestGuard>
            <Login/>
          </GuestGuard>
        }
      />
      <Route
        path="/"
        element={
          <AuthGuard>
            <Base/>
          </AuthGuard>
        }
      >
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="trabajos-practicos/*" element={<TrabajosPracticos/>}/>
        <Route path="examenes" element={<Examenes/>}/>
        <Route path="password-change" element={<PasswordChange/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
