import { FC } from 'react';
import { useAuth } from 'src/hooks';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { getFullName } from 'src/utils/auth';

export const UserDropdown: FC = () => {
  const { logout, user } = useAuth();

  return (
    <NavDropdown
      id="user-dropdown"
      title={getFullName(user)}
      className="text-light"
      align="end"
    >
      <NavDropdown.ItemText className="text-center">
        Padrón: {user?.padron}
      </NavDropdown.ItemText>
      <NavDropdown.Divider />
      <NavDropdown.ItemText className="d-grid">
        <Button
          variant="outline-danger"
          size="sm"
          onClick={logout}
        >
          Salir
        </Button>
      </NavDropdown.ItemText>
    </NavDropdown>
  );
}

export default UserDropdown;
