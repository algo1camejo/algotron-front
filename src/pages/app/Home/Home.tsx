import { FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrabajosPracticosCard from './TrabajosPracticosCard';
import ExamenesCard from './ExamenesCard';
import './styles.scss';

export const Home: FC = () => {
  return (
    <Row
      xs="1"
      md="2"
      xl="3"
      className="justify-content-center"
    >
      <Col>
        <TrabajosPracticosCard/>
      </Col>
      <Col>
        <ExamenesCard/>
      </Col>
    </Row>
  );
};

export default Home;
