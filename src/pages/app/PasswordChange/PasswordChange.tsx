import React, { useState } from 'react'
import { Col,
  Container,
  Row,
  Card, 
  Form,
  Stack} from 'react-bootstrap';
import LoadingButton from 'src/components/buttons/LoadingButton';
import { useAuth } from 'src/hooks';
import { changePassword } from 'src/services/pass';
import { ChangePassData } from 'src/types/changePass';
import './styles.scss';

export function PasswordChange() {
  const [passwordsType, setPasswordsType] = useState<'password' | 'text'>('password');
  const [validated, setValidated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<ChangePassData>({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });

  const { logout } = useAuth();

  const togglePasswordShow = () => {
    setPasswordsType(passwordsType === 'password' ? 'text' : 'password');
  };

  const isPasswordStrong = (password: string) => {
    const strongRegex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/gm);
    return strongRegex.test(password);
  };

  const sendRequest = async () => {
    setIsLoading(true);
    try{
      await changePassword(formData);
      alert('Contraseña cambiada con éxito!');
      logout();
    } catch (error) {
      setErrorMessage('La contraseña actual no es correcta');
    }
    setIsLoading(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    if (!isPasswordStrong(formData.new_password)) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres, una letra y un número');
      return;
    }

    if (formData.new_password !== formData.confirm_password) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    if (formData.new_password === formData.old_password) {
      setErrorMessage('La nueva contraseña debe ser diferente a la anterior');
      return;
    }

    sendRequest();
  };

  const handleChange = (event: any) => {
    setErrorMessage('');
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };

  return (
    <Container
      id="login-container"
      fluid="md"
    >
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                Cambiar clave
              </Card.Title>
              <Form
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
              >
                <Stack
                  as="fieldset"
                  gap={3}
                  disabled={isLoading}
                >
                  <Form.Group controlId="old_password">
                    <Form.Label>Contraseña actual</Form.Label>
                    <Form.Control
                      name="old_password"
                      type={passwordsType}
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Este campo es obligatorio
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="new_password">
                    <Form.Label>Nueva contraseña </Form.Label>
                    <Form.Control
                      name="new_password"
                      type={passwordsType}
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Este campo es obligatorio
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="confirm_password">
                    <Form.Label>Repetir nueva contraseña </Form.Label>
                    <Form.Control
                      name="confirm_password"
                      type={passwordsType}
                      required
                      placeholder="Contraseña"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Este campo es obligatorio
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" onClick={togglePasswordShow}>
                    <Form.Check
                      type="checkbox"
                      label="Mostrar contraseñas"
                      checked={passwordsType === 'text'}
                      />
                  </Form.Group>
                  {errorMessage.length > 0 && (
                    <Form.Text className="text-danger text-center">
                      {errorMessage}
                    </Form.Text>
                  )}
                </Stack>
                <LoadingButton
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  Cambiar
                </LoadingButton>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
