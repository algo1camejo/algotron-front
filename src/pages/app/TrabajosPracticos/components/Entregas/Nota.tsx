import { FC } from 'react';
import { Alert } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { getPropsByNota } from 'src/utils/notas';

export type NotaProps = {
  nota: number | null,
  corrector : string | null,
  corregido?: boolean,
};

export const Nota: FC<NotaProps> = (props) => {
  const {
    nota,
    corrector,
    corregido = true,
  } = props;

  const {
    title,
    color,
    image,
  } = getPropsByNota(nota, corregido);

  return (
    <Alert
      className="nota-alert"
      variant={color}
    >
      <Image src={image}/>
      <div className="vr"></div>
      <div>
        <Alert.Heading>
          {"Nota: " + title}
        </Alert.Heading>
        <p>
          {"Corregido por: " + (corrector ?? "sin definir")}
        </p>
      </div>
    </Alert>
  );
};

export default Nota;
