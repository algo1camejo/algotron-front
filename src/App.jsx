import './custom.scss';
import { Routes, Route } from 'react-router-dom';
import Base from 'src/pages/app/Base';
import Home from 'src/pages/app/Home';
import {
  TrabajosPracticos,
  Entrega,
  Correccion,
} from 'src/pages/app/TrabajosPracticos';
import Login from 'src/pages/auth/Login';
import Examenes from 'src/pages/app/Examenes';
import PasswordChange from 'src/pages/app/PasswordChange';
import NotFound from 'src/pages/error/NotFound';
import { AuthGuard, GuestGuard } from 'src/components/guards';
import { SendRecoveryEmail } from 'src/pages/recovery/SendRecoveryEmail';
import { PasswordReset } from './pages/recovery/PasswordReset';
import { DetalleExamen } from './pages/app/Examenes/DetalleExamen';
import { MaterialScreen } from './pages/app/Material/MaterialScreen';

function App() {
  return (
    <Routes>
      <Route path="/password-reset" element={<PasswordReset/>}/>
      <Route path="/send-recovery-email" element={<SendRecoveryEmail/>}/>
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
        <Route path="trabajos-practicos/correccion/:id" element={<Correccion/>}/>
        <Route path="trabajos-practicos/:id" element={<Entrega/>}/>
        <Route path="trabajos-practicos" element={<TrabajosPracticos/>}/>
        <Route path="examenes" element={<Examenes/>}/>
        <Route path="examenes/:id" element={<DetalleExamen/>}/>
        <Route path="password-change" element={<PasswordChange/>}/>
        <Route path="material" element={<MaterialScreen/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
