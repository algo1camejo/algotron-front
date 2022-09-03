import React, { useEffect, useState} from 'react'
import { Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { LoadingButton } from 'src/components/buttons';
import { isResetTokenValid, resetPassword } from 'src/services/pass';
import Loading from './Components/Loading';
import Success from './Components/Sucess';
import TokenNotValid from './Components/TokenNotValid';
import './styles.scss';

interface ResetPasswordValues {
  password: string;
  confirm_password: string;
}

export function PasswordReset() {
  const [searchParams] = useSearchParams();
  const [passwordsType, setPasswordsType] = useState<'password' | 'text'>('password');
  const token = searchParams.get('token');
  const [loading, setLoading] = React.useState(true);
  const [validated, setValidated] = useState<boolean>(false);
  const [ValidToken, setValidToken] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [done, setDone] = useState(false);

  const [formData, setFormData] = useState<ResetPasswordValues>({
    password: '',
    confirm_password: '',
  });
  
  const togglePasswordShow = () => {
    setPasswordsType(passwordsType === 'password' ? 'text' : 'password');
  }

  const isPasswordStrong = (password: string) => {
    const strongRegex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/gm);
    return strongRegex.test(password);
  }

  const validateToken = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try{
      const res = await isResetTokenValid(token);
      setValidToken(true)
    }catch(err){
    }
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      validateToken();
    }, 3000);// Para que brille el loading de Tron.
  },[]);

  const sendRequest = async () => {
    
    if (!token) {
      setValidToken(false);
      return;
    }

    setLoading(true);
    try{
        await resetPassword({token, password: formData.password});
      setDone(true);
    } catch (error) {
      setErrorMessage('Ocurrio un error inesperado, comunicate con un docente');
      setValidToken(false);
    }
    setLoading(false);
  }
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    if (!isPasswordStrong(formData.password)) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres, una letra y un número');
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }
    sendRequest();
  };

  const handleChange = (event: any) => {
    setErrorMessage('');
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (done){
    return <Success />
  }

  if (loading) {
    return <Loading />;
  }

  if (!ValidToken) {
    return <TokenNotValid/>
  }

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
                Recupero de clave
              </Card.Title>
              <Form
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
              >
                <Stack
                  as="fieldset"
                  gap={3}
                  disabled={loading}
                >
                  <Form.Group controlId="password">
                    <Form.Label>Nueva contraseña </Form.Label>
                    <Form.Control
                      name="password"
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
                  disabled={loading}
                  isLoading={loading}
                >
                  Asignar
                </LoadingButton>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}