import React from 'react'
import { Container, Row} from 'react-bootstrap'
import Information from './components/Information'
import TimeLine from './components/TimeLine'
import Title from './components/Title'

export  function WebPage() {
  return (
    <Container
    id="login-container"
    fluid="md"
    >
    <Row>
        <Title/>
    </Row>
    <Information/>

    <TimeLine/>
    
  </Container>
  )
}