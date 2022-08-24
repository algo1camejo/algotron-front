import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getActiveInstances } from 'src/services/tps';
import { Instance } from 'src/types/tps';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';

export const NuevaEntregaForm: FC = () => {
  const {
    data,
    isLoading,
  } = useQuery(
    tpsKeys.instances.active(),
    getActiveInstances,
  );

  const list = data?.data?.results || [];

  const renderOption = (instance: Instance) => (
    <option key={instance?.id} value={instance?.id}>
      {instance?.nombre}
    </option>
  );

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
            <option>Selecciona una instancia</option>
            {isLoading && (
              <option disabled>Cargando...</option>
            )}
            {list.map(renderOption)}
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
