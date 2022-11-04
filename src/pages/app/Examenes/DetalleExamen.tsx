import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  Card,
  Container,
} from 'react-bootstrap';
import {
  ErrorWithRetry,
  NoData,
  Loading,
} from 'src/components/messages';
import { Nota } from '../TrabajosPracticos/components/Entregas/Nota';
import { Respuestas } from './components/Respuestas';
import { AxiosResponse } from 'axios';
import { Entrega } from 'src/types/examenes';
import { getExamen } from 'src/services/examenes';
import { examenesKeys } from './queries';

type Error = {
  response: AxiosResponse<Entrega>;
};

type Data = AxiosResponse<Entrega>;

export const DetalleExamen = () => {
  const { id } = useParams();

  const {
    data,
    error,
    refetch,
    isLoading,
    isRefetchError,
    isError,
  } = useQuery<Data, Error, any>(
    examenesKeys.detail(Number(id)),
    () => getExamen(Number(id)),
    {
      refetchOnWindowFocus: false,
      select: (data) => data?.data,
      enabled: !!Number(id),
    },
  );

  const isNotFound = error?.response?.status === 404;
  const isEnabled = !!Number(id);

  const handleRetry = () => {
    refetch();
  };

  if (!data) {
    return (
      <>
        {isLoading && isEnabled && (
          <Loading/>
        )}
        {!isEnabled && (
          <NoData label="No se encontró el exámen"/>
        )}
        {isError && !isRefetchError && isNotFound && (
          <NoData label="No se encontró el exámen"/>
        )}
        {isError && !isRefetchError && !isNotFound && (
          <ErrorWithRetry onRetry={handleRetry}/>
        )}
      </>
    );
  }

  return (
    <Container
      className="examenes-container"
      fluid
    >
      <Card>
        <Nota
          nota={data.nota}
          corrector={data.corrector}
          corregido={data.corregido}
        />
        <Card.Body>
          <div className="examen-header">
            <Card.Title>
              {data.examen.nombre}
            </Card.Title>
            <Card.Subtitle>
              {data.tema}
            </Card.Subtitle>
          </div>
          <Respuestas
            respuestas={data.respuestas}
          />
        </Card.Body>
      </Card>
    </Container>
  )
}
