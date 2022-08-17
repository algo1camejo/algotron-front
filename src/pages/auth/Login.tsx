import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './styles.scss';

export const Login: FC = () => {
  return (
    <Container
      id="login-container"
      fluid="md"
    >
      <Row>
        <Col xs="auto">
          <Image src="/static/logos/logo-light.svg"/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                Iniciar sesión
              </Card.Title>
              <Form>
                <Stack
                  as="fieldset"
                  gap={3}
                >
                  <Form.Group controlId="login-email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo electrónico" />
                  </Form.Group>
                  <Form.Group controlId="login-password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                </Stack>
                <Button type="submit">
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
