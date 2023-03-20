import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { MaterialCards } from './components/MaterialCards';
import './styles.scss';

export const MaterialScreen = () => {
  return (
    <Card className='material-card'>
      <Card.Header>
        Materiales
      </Card.Header>
      <Card.Body>
        <Container fluid>
          <MaterialCards/>
        </Container>
      </Card.Body>
      <Card.Footer>
        <Card.Link href="https://docs.google.com/spreadsheets/d/1eB_RR0iSw3yL9R224GoeZjLhYn0JZ4KktfqveaxBZtw/edit?usp=sharing">
          <Card.Title >{["Videos de las clases"]}</Card.Title>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default MaterialScreen;
