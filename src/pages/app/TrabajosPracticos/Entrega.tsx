import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import EntregaStatusAlert from './components/EntregaStatusAlert';
import IconButton from 'src/components/buttons/IconButton';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { getEntregaDetail } from 'src/services/tps';
import { formatDateWithHour } from 'src/utils/dates';
import { tpsKeys } from 'src/pages/app/TrabajosPracticos/queries';

export const Entrega: FC = () => {
  const { id } = useParams();

  const {
    data,
  } = useQuery(
    tpsKeys.entregas.detail(Number(id)),
    () => getEntregaDetail(Number(id)),
    {
      enabled: !!Number(id),
    },
  );

  const entrega = data?.data;

  if (!entrega) return null;

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
        <Card.Text>
          Pruebas
        </Card.Text>
        <Card.Text>
          {resultado}
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
