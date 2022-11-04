import { Card, Col, Row } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Respuesta } from 'src/types/examenes'

interface Props {
  respuestas: Respuesta[]
}

export const Respuestas = ({respuestas} : Props ) => {
  return (
    <div id={"preguntas-list"}>
      {respuestas.map((respuesta) => (
        <Row id={respuesta.pregunta.titulo}>
          <Col>
            <Card>
              <Card.Header>
                {respuesta.pregunta.titulo}
              </Card.Header>
              <Card.Body>

                <Card className='card-interna'>
                  <Card.Body>
                    <Card.Title>
                      <h4>Enunciado</h4>
                    </Card.Title>
                    <ReactMarkdown
                      children={respuesta.pregunta.texto}
                    />
                  </Card.Body>
                </Card>

                <Card className='card-interna'>
                  <Card.Body>
                    <Card.Title>
                      <h4>Respuesta</h4>
                    </Card.Title>
                    <p>
                      {respuesta.respuesta}
                    </p>
                  </Card.Body>
                </Card>

                <Card className='card-interna'>
                  <Card.Body>
                    <Card.Title>
                      <h4>Corrección</h4>
                    </Card.Title>
                    <ReactMarkdown
                      children={respuesta.correccion}
                    />
                  </Card.Body>
                </Card>

              </Card.Body>
              <Card.Footer>
                {"Calificacion: " + respuesta.nota?? "No calificada"}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  )
}