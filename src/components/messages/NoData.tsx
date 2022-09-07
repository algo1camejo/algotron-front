import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import './styles.scss';

export type NoDataProps = {
  label?: string;
};

export const NoData: FC<NoDataProps> = (props) => {
  const {
    label = "No hay nada por acá",
  } = props;

  return (
    <div className="no-data text-muted">
      <Image src="/static/error/wool-ball-with-paws.svg"/>
      <p>
        {label}
      </p>
    </div>
  );
};

export default NoData;
