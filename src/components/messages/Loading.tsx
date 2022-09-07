import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import './styles.scss';

export type LoadingProps = {
  label?: string;
};

export const Loading: FC<LoadingProps> = (props) => {
  const {
    label = "Cargando...",
  } = props;

  return (
    <div className="loading text-muted">
      <Image src="/static/error/wool-ball-with-paws.svg"/>
      <p>
        {label}
      </p>
    </div>
  );
};

export default Loading;
