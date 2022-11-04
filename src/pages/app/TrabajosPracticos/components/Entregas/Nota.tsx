import { FC } from 'react';
import { Alert } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { getPropsByNota, formatNota } from 'src/utils/notas';

export type NotaProps = {
  nota: number | null,
  corrector : string,
};

export const Nota: FC<NotaProps> = (props) => {
  const {
    nota,
    corrector,
  } = props;

  const {
    color,
    image,
  } = getPropsByNota(nota);

  return (
    <Alert
      className="nota-alert"
      variant={color}
    >
      <Image src={image}/>
      <div className="vr"></div>
      <div>
        <Alert.Heading>
          {"Nota : " + formatNota(nota)}
        </Alert.Heading>
        <p>
          {"Corrector/a : " +corrector}
        </p>
      </div>
    </Alert>
  );
};

export default Nota;
