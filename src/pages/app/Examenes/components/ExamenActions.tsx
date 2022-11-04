import { FC } from 'react';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from 'src/components/buttons';

export type ExamenActionsProps = {
  id: number;
  corregido?: boolean;
};

export const ExamenActions: FC<ExamenActionsProps> = (props) => {
  const {
    id,
    corregido = false,
  } = props;

  const navigate = useNavigate();

  const handleSeeFeedBack = () => {
    navigate(id.toString());
  };

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="justify-content-end"
    >
      {corregido && (
        <IconButton
          label="Ver Corrección"
          icon={faEye}
          onClick={handleSeeFeedBack}
        />
      )}
    </Stack>
  )
}

export default ExamenActions;
