import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Entrega from './Entrega';
import TrabajosPracticos from './TrabajosPracticos';
import './styles.scss';

export const TrabajosPracticosRoutes: FC = () => {
  return (
    <Routes>
      <Route path=":id" element={<Entrega/>}/>
      <Route path="/" element={<TrabajosPracticos/>}/>
    </Routes>
  );
};

export default TrabajosPracticosRoutes;
