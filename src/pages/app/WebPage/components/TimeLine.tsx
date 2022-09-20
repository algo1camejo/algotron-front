import React from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { LoadingButton } from 'src/components/buttons'
import { getActivities } from '../helpers/getActivies';

export default function TimeLine() {
    const activities = getActivities();
  return (
    <div>
    <Row>
        <Card>
            <Card.Body>
                <Card.Title>
                    <h2>Cronograma</h2>
                </Card.Title>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th># Semana</th>
                                <th>Martes</th>
                                <th>Jueves</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                activities.map((activity, index) => (
                                    <tr key={index}>
                                        <td>{activity.week}</td>
                                        <td>{activity.martes}</td>
                                        <td>{activity.jueves}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                </Table>
            </Card.Body>
            <Card.Footer>
                * El 2do recuperatorio del parcial se tomará junto con la 1ra fecha de final (solo en la primera).
            </Card.Footer>
        </Card>
    </Row>
    </div>
  )
}