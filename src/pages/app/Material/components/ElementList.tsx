import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { ItemMaterial } from 'src/types/Material'

interface ElementListProps {
    recursos : ItemMaterial []
}

export const ElementList = ({recursos} : ElementListProps) => {
  return (
    <ListGroup variant="flush">
        {recursos.map((recurso) => (
            <ListGroup.Item key={recurso.nombre}>
                <a href={recurso.archivo} download={recurso.archivo} target="_blank">
                    {recurso.nombre}
                </a>
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}