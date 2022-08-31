import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import NuevaEntregaForm from './NuevaEntregaForm';

export const NuevaEntregaCard: FC = () => {
  return (
    <Card className="nueva-entrega-container">
      <Card.Header>
        Nueva entrega
      </Card.Header>
      <Card.Body>
        <NuevaEntregaForm/>
      </Card.Body>
    </Card>
  );
};

export default NuevaEntregaCard;
