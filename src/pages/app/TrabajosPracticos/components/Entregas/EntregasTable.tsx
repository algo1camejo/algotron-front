import { FC, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import EntregaStatusPill from './EntregaStatusPill';
import EntregaActions from './EntregaActions';
import {
  ErrorWithRetry,
  NoData,
  Loading,
} from 'src/components/messages';
import { Pagination } from 'src/components/pagination';
import { PartialEntrega } from 'src/types/tps';
import { getEntregas } from 'src/services/tps';
import { formatDateWithHour } from 'src/utils/dates';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';
import { Col, Form, Row } from 'react-bootstrap';

export const EntregasTable: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [onlyCorregidos, setOnlyCorregidos] = useState<boolean>(false);

  const {
    data,
    refetch,
    isLoading,
    isSuccess,
    isError,
    isRefetchError,
  } = useQuery(
    tpsKeys.entregas.list(currentPage),
    () => getEntregas(currentPage, 10, onlyCorregidos),
    {
      refetchOnWindowFocus: false,
    },
  );

  const entregas = data?.data?.results || [];

  useEffect((reload=handleRetry) => {
    if(data?.data?.total_pages) {
      setTotalPages(data?.data?.total_pages);
    }
    reload();
  }, [data?.data?.total_pages, onlyCorregidos]);

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

  const handleFilter =(checked : boolean) => {
    setOnlyCorregidos(checked);
    setCurrentPage(1);
  }

  const renderEntrega = (entrega: PartialEntrega) => {
    const {
      id,
      estado,
      tp,
      horario,
      archivo,
      corregido,
    } = entrega;

    return (
      <tr key={id}>
        <td>
          <EntregaStatusPill status={estado}/>
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
            corregido={corregido}
          />
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="table-container">
        <Row>
          <Col style={{display:'flex', justifyContent:'right'}}>
            <Form.Check
              type="switch"
              label="Mostrar solo entregas corregidas"
              onChange={(val)=> {handleFilter(val.target.checked)}}
              >
            </Form.Check>
          </Col>
        </Row>
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
          <NoData label="No hay entregas"/>
        )}
        {isLoading && (
          <Loading/>
        )}
        {isError && !isRefetchError && (
          <ErrorWithRetry onRetry={handleRetry}/>
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
