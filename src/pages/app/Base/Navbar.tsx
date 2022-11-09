import { FC, useState, useEffect } from 'react';
import {
  Link as RouterLink,
  useMatch,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as NavbarUI } from 'react-bootstrap/Navbar';
import Logo from 'src/pages/app/Base/Logo';
import UserDropdown from 'src/pages/app/Base/UserDropdown';

export const Navbar: FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const isTrabajosPracticos = !!useMatch({
    path: 'trabajos-practicos',
    end: false,
  });

  const isExamenes = !!useMatch({
    path: 'examenes',
    end: false,
  });

  const isMaterial= !!useMatch({
    path: 'material',
    end: false,
  });


  useEffect(() => {
    setExpanded(false);
  }, [
    isTrabajosPracticos,
    isExamenes,
    isMaterial
  ]);

  const toggle = () => {
    setExpanded(!expanded);
  };

  const close = () => {
    setExpanded(false);
  };

  return (
    <NavbarUI
      expand="md"
      bg="dark"
      variant="dark"
      expanded={expanded}
      onToggle={toggle}
      onSelect={close}
    >
      <Container>
        <Logo onClick={close}/>
        <NavbarUI.Toggle aria-controls="responsive-navbar"/>
        <NavbarUI.Collapse id="responsible-navbar">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                as={RouterLink}
                to="/trabajos-practicos"
                active={isTrabajosPracticos}
                eventKey="trabajos-practicos"
              >
                Trabajos Prácticos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={RouterLink}
                to="/examenes"
                active={isExamenes}
                eventKey="examenes"
              >
                Exámenes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={RouterLink}
                to="/material"
                active={isMaterial}
                eventKey="material"
              >
                Material
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <UserDropdown/>
          </Nav>
        </NavbarUI.Collapse>
      </Container>
    </NavbarUI>
  );
}

export default Navbar;
