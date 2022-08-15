import { FC } from 'react';
import Stack from 'react-bootstrap/Stack';
import NuevaEntrega from './NuevaEntrega';
import Entregas from './Entregas';

export const TrabajosPracticos: FC = () => {
  return (
    <Stack gap={4}>
      <NuevaEntrega/>
      <Entregas/>
    </Stack>
  );
};

export default TrabajosPracticos;
