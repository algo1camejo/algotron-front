import { FC, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import EntregaStatusPill from './EntregaStatusPill';
import EntregaActions from './EntregaActions';
import { Pagination } from 'src/components/pagination';
import { PartialEntrega } from 'src/types/tps';
import { getEntregas } from 'src/services/tps';
import { formatDateWithHour } from 'src/utils/dates';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';

export const EntregasTable: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const {
    data,
    refetch,
    isLoading,
    isSuccess,
    isError,
    isRefetchError,
  } = useQuery(
    tpsKeys.entregas.list(currentPage),
    () => getEntregas(currentPage),
    {
      refetchOnWindowFocus: false,
    },
  );

  const entregas = data?.data?.results || [];

  useEffect(() => {
    if(data?.data?.total_pages) {
      setTotalPages(data?.data?.total_pages);
    }
  }, [data?.data?.total_pages]);

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSelect = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  const handleRetry = () => {
    refetch();
  };

  const renderEntrega = (entrega: PartialEntrega) => {
    const {
      id,
      get_estado_display,
      tp,
      horario,
      archivo,
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
          <EntregaActions
            id={id}
            archivo={archivo}
          />
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-container">
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
          {(isSuccess || isRefetchError) && entregas.length > 0 && (
            <tbody>
              {entregas.map(renderEntrega)}
            </tbody>
          )}
        </Table>
        {(isSuccess || isRefetchError) && entregas.length === 0 && (
          <div className="sin-entregas text-muted">
            <Image src="/static/error/wool-ball-with-paws.svg"/>
            <p>
              No hay entregas
            </p>
          </div>
        )}
        {isLoading && (
          <div className="sin-entregas text-muted">
            <Image src="/static/error/wool-ball-with-paws.svg"/>
            <p>
              Cargando...
            </p>
          </div>
        )}
        {isError && !isRefetchError && (
          <div className="sin-entregas text-muted">
            <Image src="/static/error/wool-ball-with-paws.svg"/>
            <p>
              Ups! Ocurrió un error
            </p>
            <Button
              className="mt-2"
              onClick={handleRetry}
              variant="outline-secondary"
              size="sm"
            >
              Reintentar
            </Button>
          </div>
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        page={currentPage}
        max={5}
        onFirst={handleFirst}
        onPrev={handlePrev}
        onSelect={handleSelect}
        onNext={handleNext}
        onLast={handleLast}
      />
    </>
  );
};

export default EntregasTable;
