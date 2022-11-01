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
            <ListGroup.Item key={recurso.name}>
                <a href={recurso.url} target="_blank" rel="noreferrer">
                    {recurso.name}
                </a>
            </ListGroup.Item>
        ))}
    </ListGroup>
  )
}