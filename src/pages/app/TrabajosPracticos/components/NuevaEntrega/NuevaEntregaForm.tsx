import { FC } from 'react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const NuevaEntregaForm: FC = () => {
  return (
    <Form>
      <Stack
        as="fieldset"
        direction="horizontal"
        gap={3}
      >
        <Form.Group controlId="seleccionar-entrega">
          <Form.Label className="visually-hidden">
            Entrega
          </Form.Label>
          <Form.Select>
            <option>Selecciona una entrega</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="subir-archivo">
          <Form.Label className="visually-hidden">
            Subir archivo
          </Form.Label>
          <Form.Control type="file"/>
        </Form.Group>
        <Button type="submit">
          Enviar
        </Button>
      </Stack>
    </Form>
  );
};

export default NuevaEntregaForm;
