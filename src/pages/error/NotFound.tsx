import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './styles.scss'

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: true });
  }

  return (
    <Container id="not-found" fluid="md">
      <div className="error">
        <Row>
          <Col>
            <h1 className="title">
              404
            </h1>
            <p className="subtitle">
              Ups!
            </p>
            <p className="description">
              No pudimos encontrar lo que estabas buscando
            </p>
          </Col>
        </Row>
      </div>
      <Row className="image">
        <Col>
          <Image src="static/error/tron-buscando-comida.svg"/>
        </Col>
      </Row>
        <Row className="action">
          <Col xs="4" md="2" className="d-grid">
            <Button
              size="lg"
              variant="outline-dark"
              onClick={handleBack}
            >
              Volver
            </Button>
          </Col>
        </Row>
    </Container>
  );
};

export default NotFound;
