import React from 'react'
import { Card, Col, Container,Image, Row } from 'react-bootstrap';
import { MaterialCards } from './components/MaterialCards';
import './styles.scss';

export const MaterialScreen = () => {
  return (
    <Card className='material-card'>
      <Card.Header>
        Messi
      </Card.Header>
      <Card.Body>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <Image
                src="https://media.tenor.com/xIDMdm9WNVYAAAAS/messiking22.gif"
              />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MaterialScreen;
