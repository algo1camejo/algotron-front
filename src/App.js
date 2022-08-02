import './custom.scss';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className='algo'>Algo</span><span className='tron'>Tron</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default App;
