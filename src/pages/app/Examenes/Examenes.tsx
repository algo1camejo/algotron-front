import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import './styles.scss';

export const Examenes: FC = () => {
  return (
    <div className="under-construction-container">
      <Image
        alt=""
        src="/static/error/under-construction.png"
      />
      <p>
        Estamos trabajando <span aria-hidden="true">:)</span>
      </p>
    </div>
  );
};

export default Examenes;
