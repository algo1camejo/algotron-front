import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import EntregaStatusAlert from './components/EntregaStatusAlert';
import { getEntregaDetail } from 'src/services/tps';
import { formatDateWithHour } from 'src/utils/dates';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';

export const Entrega: FC = () => {
  const { id } = useParams();

  const {
    data,
    isLoading,
  } = useQuery(
    tpsKeys.entregas.detail(Number(id)),
    () => getEntregaDetail(Number(id)),
    {
      enabled: !!Number(id),
    },
  );

  const entrega = data?.data;

  if (!entrega) return null;

  const {
    get_estado_display,
    tp,
    horario,
    archivo,
    resultado,
  } = entrega;

  return (
    <Card>
      <EntregaStatusAlert status={get_estado_display}/>
      <Card.Body>
        <div className="tp-header">
          <Card.Title>
            {tp?.nombre}
          </Card.Title>
          <Card.Subtitle>
            {formatDateWithHour(horario)}
          </Card.Subtitle>
        </div>
        <Card.Text>
          Pruebas
        </Card.Text>
        <Card.Text>
          {resultado}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Entrega;
