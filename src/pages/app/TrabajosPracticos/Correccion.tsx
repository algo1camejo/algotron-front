import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { getEntregaDetail } from 'src/services/tps';
import { EntregaDetailResponse } from 'src/types/tps';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';
import './styles.scss';
import {
  ErrorWithRetry,
  NoData,
  Loading,
} from 'src/components/messages';
import { Nota } from './components/Entregas/Nota';



type Data = AxiosResponse<EntregaDetailResponse>;

type Error = {
  response: AxiosResponse<EntregaDetailResponse>;
};


const renderNota = (nota: number) => {
  if (nota < 4) {
    return "Insuficiente";
  } else{
    return "Suficiente";
  }
}

export const Correccion = () => {
    const { id } = useParams();

  const {
    data,
    error,
    refetch,
    isLoading,
    isRefetchError,
    isError,
  } = useQuery<Data, Error, any>(
    tpsKeys.entregas.detail(Number(id)),
    () => getEntregaDetail(Number(id)),
    {
      enabled: !!Number(id),
    },
  );

  const entrega = data?.data;
  const isNotFound = error?.response?.status === 404;
  const isEnabled = !!Number(id);

  const handleRetry = () => {
    refetch();
  };


  if (!entrega) {
    return (
      <>
        {isLoading && isEnabled && (
          <Loading/>
        )}
        {!isEnabled && (
          <NoData label="No se encontró la corrección"/>
        )}
        {isError && !isRefetchError && isNotFound && (
          <NoData label="No se encontró la corrección"/>
        )}
        {isError && !isRefetchError && !isNotFound && (
          <ErrorWithRetry onRetry={handleRetry}/>
        )}
      </>
    );
  }

  const {
    nota,
    correccion,
    corrector,
    corregido
  } = entrega as EntregaDetailResponse;

  const titulo = entrega.tp.nombre;


  if(!corrector || !correccion || !nota || !titulo || !corregido){
    return <NoData label="No se encontró la corrección"/>
  }

  return (
    <Card className="entrega-container">
    <Card.Body>
      <div className="tp-header">
        <Card.Title>
          {"Devolución " + titulo}
        </Card.Title>
      </div>
      <div>
        <ReactMarkdown>
          {correccion??"No hay corrección"}
        </ReactMarkdown>
      </div>
    </Card.Body>
    <Card.Footer>
      <Nota
        nota={nota}
        corrector={corrector}
      />
    </Card.Footer>
  </Card>
  )
}