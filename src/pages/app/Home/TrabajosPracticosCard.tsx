import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export const TrabajosPracticosCard: FC = () => {
  return (
    <Card
      className="btn btn-light"
      as={RouterLink}
      to="/trabajos-practicos"
    >
        <Card.Body>
          <Card.Title>Trabajos Prácticos</Card.Title>
          <FontAwesomeIcon icon={faLaptopCode}/>
        </Card.Body>
    </Card>
  );
};

export default TrabajosPracticosCard;
