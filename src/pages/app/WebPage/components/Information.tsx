import React, { useCallback } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { LoadingButton } from 'src/components/buttons'
import { getSurveys } from '../helpers/getSurveys'
import { getRegimen } from '../helpers/getRegimen'

export default function Information() {

    const surveys = getSurveys();
    const downloadRegimen = useCallback(
      () => {
        const url = getRegimen();
        window.open(url, '_blank', 'noopener,noreferrer');
      },
      [],
    )
    
    return (
        <Row>
            <Col>
                <Card style={{"height" : "100%"}}>
                    <Card.Body>
                        <Card.Title>
                            Regimen de cursada
                        </Card.Title>
                        <LoadingButton
                            onClick={downloadRegimen}
                        >
                            Descargar
                        </LoadingButton>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{"height" : "100%"}}>
                    <Card.Body>
                        <Card.Title>
                            Horarios
                        </Card.Title>
                            Martes y Jueves de 8am a 11am.
                    </Card.Body>
                </Card>
            </Col>

            <Col>
            <Card style={{"height" : "100%"}}>
                <Card.Body>
                    <Card.Title>
                        Encuestas
                    </Card.Title>
                        <Row>
                            <Col xs={10}>
                            <Form.Select>
                                {surveys.map((survey) => (
                                    <option key={survey.name} value={survey.url}>
                                        {survey.name}
                                    </option>
                                ))}
                            </Form.Select>
                            </Col>
                            <Col xs={2}>
                            <LoadingButton>
                                Ver
                            </LoadingButton>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}