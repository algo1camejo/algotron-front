import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './styles.scss';

export const Home: FC = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand
          as={RouterLink}
          to="/"
        >
          <span className='algo'>Algo</span><span className='tron'>Tron</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Home;
