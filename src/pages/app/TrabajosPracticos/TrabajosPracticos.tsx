import { FC } from 'react';
import Stack from 'react-bootstrap/Stack';
import NuevaEntrega from './components/NuevaEntrega';
import Entregas from './components/Entregas';
import './styles.scss';

export const TrabajosPracticos: FC = () => {
  return (
    <Stack gap={4}>
      <NuevaEntrega/>
      <Entregas/>
    </Stack>
  );
};

export default TrabajosPracticos;
