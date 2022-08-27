import { FC } from 'react';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import { EntregaStatus } from 'src/types/tps';
import { PROPS_BY_STATUS } from 'src/utils/status';

export type EntregaStatusAlertProps = {
  status: EntregaStatus;
};

export const EntregaStatusAlert: FC<EntregaStatusAlertProps> = (props) => {
  const { status } = props;

  const {
    title,
    subtitle,
    color,
    image,
  } = PROPS_BY_STATUS[status];

  return (
    <Alert
      className="status-alert"
      variant={color}
    >
      <Image src={image}/>
      <div className="vr"></div>
      <div>
        <Alert.Heading>
          {title}
        </Alert.Heading>
        <p>
          {subtitle}
        </p>
      </div>
    </Alert>
  );
};

export default EntregaStatusAlert;
