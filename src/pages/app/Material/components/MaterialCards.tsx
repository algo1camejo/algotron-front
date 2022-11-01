import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Col, ListGroup, Row, Tab, Tabs } from 'react-bootstrap'
import { getMaterial } from 'src/services/material';
import { ElementList } from './ElementList'

export const MaterialCards = () => {

    const {
        data,
        isError,
      } = useQuery(
        ["material"],getMaterial,
        {
          refetchOnWindowFocus: false,
        },
      );
      
  return (
    <Row>
        <Col xs="12">
            <Tabs
                defaultActiveKey="Teóricas"
            >
                <Tab eventKey="Teóricas" title="Teóricas">
                    <ElementList
                        recursos={[
                            {
                                name: 'Introducción a la programación',
                                url: 'https://www.youtube.com/watch?v=9Q6ZQY1Bebc',
                            },
                            {
                                name: 'Introducción al lenguaje C',
                                url: 'https://www.youtube.com/watch?v=9Q6ZQY1Bebc',
                            },
                            {
                                name: 'Bibliotecas y funciones',
                                url: 'https://www.youtube.com/watch?v=9Q6ZQY1Bebc',
                            },
                        ]}
                    />
                </Tab>
                <Tab eventKey="Prácticas" title="Prácticas">
                    
                </Tab>
                <Tab eventKey="Apuntes" title="Apuntes">

                </Tab>
            </Tabs>
        </Col>
    </Row>
  )
}