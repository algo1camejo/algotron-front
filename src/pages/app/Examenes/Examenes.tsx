import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Card, Table } from 'react-bootstrap';
import {
  Loading,
  NoData,
  ErrorWithRetry,
} from 'src/components/messages';
import { getExamenes } from 'src/services/examenes';
import { Entrega } from 'src/types/examenes';
import { ExamenActions } from './components/ExamenActions';
import { ExamenNotaPill } from './components/ExamenNotaPill';
import { examenesKeys } from './queries';
import './styles.scss';

export const Examenes: FC = () => {
  const {
    data,
    refetch,
    isSuccess,
    isError,
    isLoading,
    isRefetchError,
  } = useQuery(
    examenesKeys.list(),
    getExamenes,
    {
      refetchOnWindowFocus: false,
      select: (data) => data?.data,
    },
  );

  const renderExamen = (examen : Entrega) => {
    return (
      <tr key={examen.id}>
        <td>{examen.examen.nombre}</td>
        <td>{examen.corrector ?? "Sin definir"}</td>
        <td>
          <ExamenNotaPill
            nota={examen.nota}
            corregido={examen.corregido}
          />
        </td>
        <td>
          <ExamenActions
            id={examen.id}
          />
        </td>
      </tr>
    );
  }

  const handleRetry = () => {
    refetch();
  };

  return (
    <Card className="examenes-container">
      <Card.Header>
        Mis exámenes
      </Card.Header>
      <Card.Body>
        <Table striped>
          <thead>
            <tr>
              <th>
                Instancia
              </th>
              <th>
                Corrector
              </th>
              <th>
                Nota
              </th>
              <th className="visually-hidden">
                Acciones
              </th>
            </tr>
          </thead>
          {(isSuccess || isRefetchError) && data?.count > 0 && (
            <tbody>
              {data.results.map(renderExamen)}
            </tbody>
          )}
        </Table>
        {(isSuccess || isRefetchError) && data?.count === 0 && (
          <NoData label="No hay exámenes"/>
        )}
        {isLoading && (
          <Loading/>
        )}
        {isError && !isRefetchError && (
          <ErrorWithRetry onRetry={handleRetry}/>
        )}
      </Card.Body>
    </Card>
  );
};

export default Examenes;
