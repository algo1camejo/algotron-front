import React, { useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Calendar from 'react-calendar';
import { getActivities } from '../helpers/getActivies';
import './Calendar.css';

export default function TimeLine() {
    const activities = getActivities();
    const [value, onChange] = useState(new Date());
  return (
    <div>
    <Row>
        <Card>
            <Card.Body>
            <Card.Title>
                <h2>Cronograma</h2>
            </Card.Title>
                <Row>
                    <Col>
                        <Calendar
                            onChange={onChange} 
                            value={value}
                            minDetail="year"
                            next2Label={null}
                            prev2Label={null}
                            calendarType="US"
                            onClickDay={(value) => alert(value)}
                        />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                * El 2do recuperatorio del parcial se tomará junto con la 1ra fecha de final (solo en la primera).
            </Card.Footer>
        </Card>
    </Row>
    </div>
  )
}