import { FC, useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import LoadingButton from 'src/components/buttons/LoadingButton';
import {
  Instance,
  CreateTPErrorResponse,
} from 'src/types/tps';
import { AxiosResponse } from 'axios';
import { getActiveInstances, createTP } from 'src/services/tps';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';

type Error = {
  response: AxiosResponse<CreateTPErrorResponse>;
};

export const NuevaEntregaForm: FC = () => {
  const [validated, setValidated] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
  } = useQuery(
    tpsKeys.instances.active(),
    getActiveInstances,
  );

  const list = data?.data?.results || [];

  const createMutation = useMutation<any, Error, any>(createTP);

  const errorData = createMutation?.error?.response?.data;
  const error = (
    errorData?.non_field_errors ||
    errorData?.archivo ||
    errorData?.tp ||
    ['Ocurrió un error inesperado']
  )[0];

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if(createMutation.isSuccess) {
      timer = setTimeout(createMutation.reset, 5000);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [createMutation.isSuccess, createMutation.reset]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if(!form.checkValidity()) {
      createMutation.reset();
      setValidated(true);
      return;
    }

    try {
      await createMutation.mutateAsync(new FormData(form));
      form.reset();
      queryClient.invalidateQueries(tpsKeys.entregas.allList());
    } finally {
      setValidated(false);
    }
  };

  const renderOption = (instance: Instance) => (
    <option key={instance?.id} value={instance?.id}>
      {instance?.nombre}
    </option>
  );

  const hasMessage = createMutation.isError || createMutation.isSuccess;

  return (
    <Form
      onSubmit={handleSubmit}
      noValidate
      validated={validated}
      className={hasMessage ? 'has-message' : undefined}
    >
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
          <Form.Select
            name="tp"
            required
          >
            <option value="">Selecciona una instancia</option>
            {isLoading && (
              <option disabled>Cargando...</option>
            )}
            {list.map(renderOption)}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Este campo es obligatorio
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="subir-archivo">
          <Form.Label className="visually-hidden">
            Subir archivo
          </Form.Label>
          <Form.Control
            type="file"
            name="archivo"
            accept=".zip"
            required
          />
          <Form.Control.Feedback type="invalid">
            Este campo es obligatorio
          </Form.Control.Feedback>
        </Form.Group>
        <LoadingButton
          type="submit"
          disabled={createMutation.isLoading}
          isLoading={createMutation.isLoading}
        >
          Enviar
        </LoadingButton>
      </Stack>
      {createMutation.isError && (
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
      )}
      {createMutation.isSuccess && (
        <Form.Text className="text-success">
          Se realizó la entrega correctamente!
        </Form.Text>
      )}
    </Form>
  );
};

export default NuevaEntregaForm;
