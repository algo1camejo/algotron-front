import { FC } from 'react';
import {
  Accordion,
  Card,
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Respuesta } from 'src/types/examenes';

export type RespuestasProps = {
  respuestas: Respuesta[] | null;
};

export const Respuestas: FC<RespuestasProps> = (props) => {
  const {
    respuestas,
  } = props;

  if(!respuestas || (respuestas as Respuesta[]).length === 0) {
    return (
      <div className="preguntas-container">
        Sin respuestas
      </div>
    );
  }

  return (
    <div className="preguntas-container">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {respuestas.map((respuesta, index) => (
          <Accordion.Item
            key={index}
            eventKey={index.toString()}
            id={respuesta.pregunta.titulo}
          >
            <Accordion.Header>
              <div className="header">
                <div className="title">
                  {respuesta.pregunta.titulo}
                </div>
                <div className="subtitle">
                  {"Calificacion: " + (respuesta.nota ?? "sin calificar")}
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
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
                    children={respuesta.correccion ?? "Sin corrección"}
                  />
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Respuestas;
