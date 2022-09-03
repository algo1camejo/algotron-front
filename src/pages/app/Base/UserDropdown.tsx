import { FC, useState } from 'react';
import { useAuth } from 'src/hooks';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getFullName } from 'src/utils/auth';

export const UserDropdown = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const onChangePassword = () => {
      navigate('/password-change');
  };

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

      <NavDropdown.ItemText className="d-grid">
        <Button
          variant="outline-info"
          data-toggle="dropdown"
          size="sm"
          onClick={onChangePassword}
          >
          Cambiar clave
        </Button>
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
