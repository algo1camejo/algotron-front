import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Convert from 'ansi-to-html';
import Card from 'react-bootstrap/Card';
import EntregaStatusAlert from './components/EntregaStatusAlert';
import {
  ErrorWithRetry,
  NoData,
  Loading,
} from 'src/components/messages';
import IconButton from 'src/components/buttons/IconButton';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { AxiosResponse } from 'axios';
import { EntregaDetailResponse } from 'src/types/tps';
import { getEntregaDetail } from 'src/services/tps';
import { formatDateWithHour } from 'src/utils/dates';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';
import './styles.scss';

type Error = {
  response: AxiosResponse<EntregaDetailResponse>;
};

type Data = AxiosResponse<EntregaDetailResponse>;

const convert = new Convert({
  newline: true,
});

export const Entrega: FC = () => {
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
          <NoData label="No se encontró la entrega"/>
        )}
        {isError && !isRefetchError && isNotFound && (
          <NoData label="No se encontró la entrega"/>
        )}
        {isError && !isRefetchError && !isNotFound && (
          <ErrorWithRetry onRetry={handleRetry}/>
        )}
      </>
    );
  }

  const {
    get_estado_display,
    tp,
    horario,
    archivo,
    resultado,
  } = entrega;

  return (
    <Card className="entrega-container">
      <EntregaStatusAlert status={get_estado_display}/>
      <Card.Body>
        <IconButton
          as="a"
          href={archivo}
          download
          className="download-icon-button"
          label="Descargar entrega"
          icon={faDownload}
        />
        <div className="tp-header">
          <Card.Title>
            {tp?.nombre}
          </Card.Title>
          <Card.Subtitle>
            {formatDateWithHour(horario)}
          </Card.Subtitle>
        </div>
        <Card.Text as="code" className="pruebas">
          <div dangerouslySetInnerHTML={{__html: convert.toHtml(resultado)}}></div>
        </Card.Text>
        <Card.Link
          href={archivo}
          download
        >
          Descargar entrega
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Entrega;
