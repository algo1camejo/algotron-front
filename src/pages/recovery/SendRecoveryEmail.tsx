import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import LoadingButton from 'src/components/buttons/LoadingButton';
import IconButton from 'src/components/buttons/IconButton';
import RecoveryModal from './RecoveryModal';
import { sendPasswordReset } from 'src/services/pass';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export const SendRecoveryEmail = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async (event: any) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setLoading(true);
    makeRequest();
  };

  const makeRequest = async () => {
    setLoading(true);
    try {
      await sendPasswordReset(email.toLowerCase());
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
    setShowModal(true);
    setLoading(false);
  };

  const handleCloseModal = () => {
    if (success) {
      navigate('/');
    } else{
      setShowModal(false); 
    }
  };

  return (
    <Container
      id="recovery-container"
      fluid="md"
    >
      <Row className="logo-container">
        <Col className="arrow-container">
          <IconButton
            label="volver"
            onClick={() => navigate('/')}
            icon={faArrowLeft}
          />
        </Col>
        <Col className="icon-container">
          <Image src="/static/logos/logo-light.svg"/>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                Recuperación de contraseña
              </Card.Title>
              <Form
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
              >
                <Stack
                  as="fieldset"
                  gap={3}
                >
                  <Form.Group controlId="login-email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      required
                      placeholder="Correo electrónico utilizado en el curso"
                      onChange={handleChange}
                      disabled={loading}
                    />
                    <Form.Control.Feedback type="invalid">
                      Ingrese un mail válido
                    </Form.Control.Feedback>
                  </Form.Group>
                </Stack>
                  <LoadingButton
                    type="submit"
                    isLoading={loading}
                    disabled={loading}
                  >
                    {loading ? 'Recuperando...' : 'Recuperar'}
                  </LoadingButton>
                </Form>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <RecoveryModal
        show={showModal}
        handleClose={handleCloseModal}
        email={email.toLowerCase()}
        success={success}
      />
    </Container>
  );
};

export default SendRecoveryEmail;
