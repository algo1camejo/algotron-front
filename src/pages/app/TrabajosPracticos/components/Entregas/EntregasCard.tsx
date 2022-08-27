import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import EntregasTable from './EntregasTable';

export const EntregasCard: FC = () => {
  return (
    <Card className="entregas-container">
      <Card.Header>
        Mis entregas
      </Card.Header>
      <Card.Body>
        <EntregasTable/>
      </Card.Body>
    </Card>
  );
};

export default EntregasCard;
