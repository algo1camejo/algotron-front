import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles.scss';

export default function Success() {
  return (
    <Container className="info-container">
        <img
            alt=""
            src="/static/tron/alegre.svg"
        />
        <p> Clave restaurada con exito! ...</p>
    </Container>
  )
}