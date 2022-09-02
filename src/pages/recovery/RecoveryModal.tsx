import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
interface RecoveryModalProps {
  show: boolean;
  handleClose: () => void;
  email: string;
  success: boolean;
}

export default function RecoveryModal( {
  show,
  handleClose,
  email,
  success} : RecoveryModalProps) {

  const generateMessage = () => {
    if (success) {
      return (
        <p>
          Se ha enviado un correo a <strong>{email}</strong> con las instrucciones para recuperar tu contraseña.
        </p>
      );
    } else{
      return (
        <div>
          <p>
            El correo <strong>{email}</strong> no se encuentra registrado en el curso.
          </p>
          <p style={{ whiteSpace: 'break-spaces' }}>
            {"Esta seguro que es el que utiliza en la materia?\n"}
            {"En caso de que sea asi, por favor contacte a los docentes"}
          </p>
        </div>
      );
    }
  }

  const generateTitle = () => {
    if (success) {
      return "Correo enviado";
    } else{
      return "Correo no encontrado";
    }
  }

  return (
    <Modal
      show={show}
      //onHide={handleLogout}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>
          {generateTitle()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {generateMessage()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}