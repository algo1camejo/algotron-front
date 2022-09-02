import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import './styles.scss';

export const Examenes: FC = () => {
  return (
    <div className="under-construction-container">
      <Image src="/static/error/under-construction.png"/>
      <p>
        Estamos trabajando :)
      </p>
    </div>
  );
};

export default Examenes;
