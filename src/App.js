import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <span className='algo'>Algo</span><span className='tron'>Tron</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default App;
