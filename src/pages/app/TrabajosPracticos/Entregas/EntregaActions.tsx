import { FC } from 'react';
import Stack from 'react-bootstrap/Stack';
import IconButton from 'src/components/IconButton';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const EntregaActions: FC = () => {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="justify-content-end"
    >
      <IconButton
        label="Ver entrega"
        icon={faEye}
      />
      <IconButton
        label="Descargar entrega"
        icon={faDownload}
      />
    </Stack>
  );
};

export default EntregaActions;
