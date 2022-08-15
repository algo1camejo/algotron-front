import { FC } from 'react';
import Table from 'react-bootstrap/Table';
import EntregaStatusPill from './EntregaStatusPill';
import EntregaActions from './EntregaActions';
import { Entrega } from 'src/types/entregas';
import { formatDateWithHour } from 'src/utils/dates';

const entregas: Entrega[] = [
  {
    id: 1,
    status: 'ERROR',
    instance: { id: 1, title: 'TP2 - Entrega' },
    date: (new Date()).toISOString(),
  },
  {
    id: 2,
    status: 'SUCCESS',
    instance: { id: 2, title: 'TP2 - Entrega' },
    date: (new Date()).toISOString(),
  },
  { id: 3,
    status: 'PENDING',
    instance: { id: 3, title: 'TP2 - Entrega' },
    date: (new Date()).toISOString(),
  },
];

export const EntregasTable: FC = () => {

  const renderEntrega = (entrega: Entrega) => {
    const {
      id,
      status,
      instance,
      date,
    } = entrega;

    return (
      <tr key={id}>
        <td>
          <EntregaStatusPill status={status}/>
        </td>
        <td>
          {instance?.title}
        </td>
        <td>
          {formatDateWithHour(date)}
        </td>
        <td>
          <EntregaActions/>
        </td>
      </tr>
    );
  };

  return (
    <Table striped className="text-center">
      <thead>
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
      </thead>
      <tbody>
        {entregas.map(renderEntrega)}
      </tbody>
    </Table>
  );
};

export default EntregasTable;
