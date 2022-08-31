import { FC, useState, useEffect } from 'react';
import { useAuth } from 'src/hooks';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AUTH_ERRORS } from 'src/types/auth';

export const AuthErrorModal: FC = () => {
  const {
    isError,
    error,
    logout,
  } = useAuth();

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(isError && error === AUTH_ERRORS.CANT_REFRESH);
  }, [isError, error]);

  const handleLogout = () => {
    logout();
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleLogout}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>
          Sesión vencida
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Por favor, vuelve a ingresar sesión
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleLogout}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AuthErrorModal;
