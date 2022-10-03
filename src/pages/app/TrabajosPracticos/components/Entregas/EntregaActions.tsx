import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import IconButton from 'src/components/buttons/IconButton';
import { faEye, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export type EntregaActionsProps = {
  id: number;
  archivo: string;
  corregido:boolean;
};

export const EntregaActions: FC<EntregaActionsProps> = (props) => {
  const {
    id,
    archivo,
    corregido,
  } = props;

  const navigate = useNavigate();

  const handleSee = () => {
    navigate(id.toString());
  };

  const handleSeeFeedBack = () => {
    navigate("correccion/" + id.toString());
  };

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="justify-content-end"
    >
      {
        corregido &&
        <IconButton
          label='Ver Corrección'
          icon={faPenNib}
          onClick={handleSeeFeedBack}
        />
      }
      
      <IconButton
        label="Ver entrega"
        icon={faEye}
        onClick={handleSee}
      />
      <IconButton
        as="a"
        href={archivo}
        download
        label="Descargar entrega"
        icon={faDownload}
      />
    </Stack>
  );
};

export default EntregaActions;
