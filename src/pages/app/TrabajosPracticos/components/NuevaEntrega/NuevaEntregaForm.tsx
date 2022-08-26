import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import LoadingButton from 'src/components/buttons/LoadingButton';
import { getActiveInstances } from 'src/services/tps';
import { Instance } from 'src/types/tps';
import { createTP } from 'src/services/tps';
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

  const createMutation = useMutation(createTP);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if(!form.checkValidity()) {
      return;
    }

    createMutation.mutate(new FormData(form));
    form.reset();
  };

  const renderOption = (instance: Instance) => (
    <option key={instance?.id} value={instance?.id}>
      {instance?.nombre}
    </option>
  );

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Stack
        as="fieldset"
        direction="horizontal"
        gap={3}
        disabled={createMutation.isLoading}
      >
        <Form.Group controlId="seleccionar-entrega">
          <Form.Label className="visually-hidden">
            Entrega
          </Form.Label>
          <Form.Select name="tp">
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
          <Form.Control
            type="file"
            name="archivo"
            accept=".zip"
          />
        </Form.Group>
        <LoadingButton
          type="submit"
          disabled={createMutation.isLoading}
          isLoading={createMutation.isLoading}
        >
          Enviar
        </LoadingButton>
      </Stack>
    </Form>
  );
};

export default NuevaEntregaForm;
