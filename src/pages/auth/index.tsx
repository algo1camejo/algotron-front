import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

export const TrabajosPracticosRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  );
};

export default TrabajosPracticosRoutes;
