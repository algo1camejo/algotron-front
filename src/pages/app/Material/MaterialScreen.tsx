import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { MaterialCards } from './components/MaterialCards';
import './styles.scss';

export const MaterialScreen = () => {
  return (
        <Card className='material-card'>
        <Card.Body>
            <Container fluid>
                <MaterialCards/>
            </Container>
        </Card.Body>
    </Card>
  )
}