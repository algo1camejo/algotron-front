import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export const ExamenesCard: FC = () => {
  return (
    <Card
      className="btn btn-light"
      as={RouterLink}
      to="/examenes"
    >
      <Card.Body>
        <Card.Title>Exámenes</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={faBookOpen}/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExamenesCard;
