import { useQuery } from '@tanstack/react-query';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Loading } from 'src/components/messages';
import { getExamen } from 'src/services/examenes';
import { Nota } from '../TrabajosPracticos/components/Entregas/Nota';
import { Respuestas } from './componenents/Respuestas';

export const DetalleExamen = () => {
  const { id } = useParams();

  const {
    data,
    isError,
    isLoading
  } = useQuery(
    ["examenes",id], ()=>getExamen(id),
    {
      refetchOnWindowFocus: false,
    },
  );

  if (isError || !id) {
    return (
      <Card className="examenes-container">
      <Card.Header>
        No se puedo encontrar este examen
      </Card.Header>
      <Card.Body>
        <Image src="/static/error/tron-buscando-comida.svg"/>
      </Card.Body>
    </Card>
    )
  }

  if (isLoading || !data) {
    return (
      <Card className="examenes-container">
        <Card.Header>
          Tu entrega...
        </Card.Header>
        <Card.Body>
          <Loading/>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Container 
      className="examenes-container"
      fluid
    >
      <Row>
        <Nota
          nota={data.nota}
          corrector={data.corrector??"No aclarado"}
        />
      </Row>
      <Row>
          <h1>{data.examen.nombre}</h1>
      </Row>
      <Row>
        <Col xs="auto">
          <Respuestas
            respuestas={data.respuestas}
          />
        </Col>
      </Row>
    </Container>
  )
}