import { FC } from 'react';
import Badge from 'react-bootstrap/Badge';
import { EntregaStatus } from 'src/types/tps';
import { PROPS_BY_STATUS } from 'src/utils/status';

export type EntregaStatusPillProps = {
  status: EntregaStatus;
};

export const EntregaStatusPill: FC<EntregaStatusPillProps> = (props) => {
  const {
    status,
  } = props;

  const {
    title,
    subtitle,
    color,
  } = PROPS_BY_STATUS[status];

  return (
    <Badge pill title={subtitle} bg={color}>
      {title}
    </Badge>
  );
};

export default EntregaStatusPill;
