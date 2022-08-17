import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import EntregaStatusAlert from './components/EntregaStatusAlert';
import { Entrega as EntregaType } from 'src/types/entregas';
import { formatDateWithHour } from 'src/utils/dates';

const entrega: EntregaType = {
  id: 1,
  status: 'ERROR',
  instance: { id: 1, title: 'TP2 - Entrega' },
  date: (new Date()).toISOString(),
};

export const Entrega: FC = () => {
  const {
    status,
    instance,
    date,
  } = entrega;

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {instance?.title}
        </Card.Title>
        <Card.Subtitle>
          {formatDateWithHour(date)}
        </Card.Subtitle>
        <EntregaStatusAlert status={status}/>
        <Card.Text>
          Pruebas
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Entrega;
