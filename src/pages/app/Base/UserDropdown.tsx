import { FC } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export const UserDropdown: FC = () => {
  return (
    <NavDropdown
      id="user-dropdown"
      title="Nombre Usuario"
      className="text-light"
      align="end"
    >
      <NavDropdown.ItemText className="text-center">
        Padrón: 111111
      </NavDropdown.ItemText>
      <NavDropdown.Divider />
      <NavDropdown.ItemText className="d-grid">
        <Button variant="outline-danger" size="sm">
          Salir
        </Button>
      </NavDropdown.ItemText>
    </NavDropdown>
  );
}

export default UserDropdown;
