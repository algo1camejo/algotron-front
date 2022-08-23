import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import IconButton from 'src/components/buttons/IconButton';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export type EntregaActionsProps = {
  id: number;
};

export const EntregaActions: FC<EntregaActionsProps> = (props) => {
  const { id } = props;

  const navigate = useNavigate();

  const handleSee = () => {
    navigate(id.toString());
  };

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="justify-content-end"
    >
      <IconButton
        label="Ver entrega"
        icon={faEye}
        onClick={handleSee}
      />
      <IconButton
        label="Descargar entrega"
        icon={faDownload}
      />
    </Stack>
  );
};

export default EntregaActions;
