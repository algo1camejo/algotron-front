import { FC, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from 'src/hooks';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import LoadingButton from 'src/components/buttons/LoadingButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { LoginData } from 'src/types/auth';
import {Link} from 'react-router-dom';
import './styles.scss';

export const Login: FC = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const loginMutation = useMutation(login);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    loginMutation.mutate(formData);
  };

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
              <Form
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
              >
                <Stack
                  as="fieldset"
                  gap={3}
                  disabled={loginMutation.isLoading}
                >
                  <Form.Group controlId="login-email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      required
                      placeholder="Correo electrónico"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un mail válido
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="login-password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      La contraseña es obligatoria
                    </Form.Control.Feedback>
                  </Form.Group>
                  {loginMutation.isError && (
                    <Form.Text className="text-danger text-center">
                      Credenciales inválidas
                    </Form.Text>
                  )}
                </Stack>
                <LoadingButton
                  type="submit"
                  disabled={loginMutation.isLoading}
                  isLoading={loginMutation.isLoading}
                >
                  Ingresar
                </LoadingButton>
                <div className='forgot-password-link'>
                  <Link to="/send-recovery-email">¿Olvidaste tu contraseña?</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
