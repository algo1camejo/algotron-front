import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles.scss';
export default function Loading() {
  return (
    <Container className="info-container">
      <img
        style={{animation: `spin ${3}s linear infinite`}} 
        alt=""
        src="/static/tron/normal.svg"
      />
      <p> Cargando...</p>
    </Container>
  )
}