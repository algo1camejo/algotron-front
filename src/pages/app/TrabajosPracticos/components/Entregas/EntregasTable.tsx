import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import EntregaStatusPill from './EntregaStatusPill';
import EntregaActions from './EntregaActions';
import { PartialEntrega } from 'src/types/tps';
import { getEntregas } from 'src/services/tps';
import { formatDateWithHour } from 'src/utils/dates';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';

export const EntregasTable: FC = () => {
  const {
    data,
    isLoading,
  } = useQuery(
    tpsKeys.entregas.list(),
    getEntregas,
  );

  const entregas = data?.data?.results || [];

  const renderEntrega = (entrega: PartialEntrega) => {
    const {
      id,
      get_estado_display,
      tp,
      horario,
    } = entrega;

    return (
      <tr key={id}>
        <td>
          <EntregaStatusPill status={get_estado_display}/>
        </td>
        <td>
          {tp?.nombre}
        </td>
        <td>
          {formatDateWithHour(horario)}
        </td>
        <td>
          <EntregaActions id={id}/>
        </td>
      </tr>
    );
  };

  return (
    <Table striped className="text-center">
      <thead>
        <tr>
          <th>
            Estado
          </th>
          <th>
            Instancia
          </th>
          <th>
            Fecha
          </th>
          <th className="visually-hidden">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {entregas.length === 0 && (
          <tr className="sin-entregas">
            <td colSpan={3}>
              <div className="text-muted">
                <Image src="/static/error/wool-ball-with-paws.svg"/>
                <p>
                  No hay entregas
                </p>
              </div>
            </td>
          </tr>
        )}
        {entregas.map(renderEntrega)}
      </tbody>
    </Table>
  );
};

export default EntregasTable;
