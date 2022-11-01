import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { Col, ListGroup, Row, Tab, Tabs } from 'react-bootstrap'
import { getMaterial } from 'src/services/material';
import { ItemMaterial } from 'src/types/Material';
import { ElementList } from './ElementList'


const renderTabs = (material : ItemMaterial[]) => {
    const keys = new Set(material.map((item) => item.seccion));
    const tabs = Array.from(keys).sort();
    return(
        <Tabs
            defaultActiveKey={tabs[0]}
        >
            {tabs.map((key) => (
                <Tab eventKey={key} title={key}>
                    <ElementList recursos={material.filter((item) => item.seccion === key)}/>
                </Tab>
            ))}
        </Tabs>
    )
}

export const MaterialCards = () => {

    const {
        data,
        isError,
        isLoading,
      } = useQuery(
        ["material"],getMaterial,
        {
          refetchOnWindowFocus: false,
        },
      );

    if(isLoading){
        return <h1>Cargando...</h1>
    }

    if (isError || !data) {
        return <h1>Error</h1>
    }

    if (data && data.results.length === 0) {
        return <h1>No hay material cargado</h1>
    }

  return (
    <Row>
        <Col xs="12">
                {renderTabs(data.results)}
        </Col>
    </Row>
  )
}