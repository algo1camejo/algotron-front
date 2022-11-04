import { FC } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Entrega } from 'src/types/examenes';
import { getPropsByNota } from 'src/utils/notas';

export type ExamenNotaPillProps =
  Pick<Entrega, 'corregido' | 'nota'>;

export const ExamenNotaPill: FC<ExamenNotaPillProps> = (props) => {
  const {
    corregido,
    nota,
  } = props;

  const {
    title,
    subtitle,
    color,
  } = getPropsByNota(nota, corregido);

  return (
    <Badge pill title={subtitle} bg={color}>
      {title}
    </Badge>
  );
};

export default ExamenNotaPill;
