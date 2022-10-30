import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Card, Table } from 'react-bootstrap';
import { Loading, NoData } from 'src/components/messages';
import { getExamenes } from 'src/services/examenes';
import { Result } from 'src/types/examenes';
import { DetailButton } from './componenents/DetailButton';
import './styles.scss';

export const Examenes: FC = () => {
  const {
    data,
    isError,
  } = useQuery(
    ["examenes"],getExamenes,
    {
      refetchOnWindowFocus: false,
    },
  );

  const renderNota = (nota: number) => {
    if (nota < 4) {
      return "Insuficiente";
    }
    return nota;
  };


  const renderExamen = (examen : Result ) => {
    if (examen.corregido) {
      return (
        <tr key = {examen.id}>
          <td>{examen.examen.nombre}</td>
          <td>{examen.corrector??"No declarado"}</td>
          <td>{renderNota(examen.nota)}</td>
          <td><DetailButton id={examen.id}/></td>
        </tr>
      )
    }else{
      return (
        <tr key = {examen.id}>
          <td>{examen.examen.nombre}</td>
          <td>Aún no definido</td>
          <td>En corrección</td>
        </tr>
      )
    }
  }

  if (isError) {
    return (
      <Card className="examenes-container">
        <Card.Header>
          Ocurrio un error al cargar los examenes...
        </Card.Header>
        <Card.Body>
          <Loading label="Por favor contactate con un docente..."/>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card className="examenes-container">
      <Card.Header>
        Mis examenes
      </Card.Header>
      <Card.Body>
          {(data && data.count > 0) && (
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
                </tr>
              </thead>
              <tbody>
                { data.results.map(renderExamen) }
              </tbody>
            </Table>
          )}
          {(data && data.count === 0) && (
              <NoData label="No hay examenes"/>
            )}
      </Card.Body>
    </Card>
  );
};

export default Examenes;
