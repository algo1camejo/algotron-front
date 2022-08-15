import { FC } from 'react';
import Badge from 'react-bootstrap/Badge';
import {
  EntregaStatus,
  ENTREGA_STATUS,
} from 'src/types/entregas';

const STATUS = {
  [ENTREGA_STATUS.ERROR]: {
    title: 'Error',
    bg: 'danger',
  },
  [ENTREGA_STATUS.SUCCESS]: {
    title: 'Éxito',
    bg: 'success',
  },
  [ENTREGA_STATUS.PENDING]: {
    title: 'Pendiente',
    bg: 'secondary',
  },
};

export type EntregaStatusPillProps = {
  status: EntregaStatus;
};

export const EntregaStatusPill: FC<EntregaStatusPillProps> = (props) => {
  const {
    status,
  } = props;

  const {
    title,
    bg,
  } = STATUS[status];

  return (
    <Badge pill bg={bg}>
      {title}
    </Badge>
  );
};

export default EntregaStatusPill;
