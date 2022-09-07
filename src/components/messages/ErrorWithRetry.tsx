import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './styles.scss';

export type ErrorWithRetryProps = {
  onRetry?: () => void;
};

export const ErrorWithRetry: FC<ErrorWithRetryProps> = (props) => {
  const {
    onRetry = () => null,
  } = props;

  return (
    <div className="error-with-retry text-muted">
      <Image src="/static/error/wool-ball-with-paws.svg"/>
      <p>
        Ups! Ocurrió un error
      </p>
      <Button
        className="mt-2"
        onClick={onRetry}
        variant="outline-secondary"
        size="sm"
      >
        Reintentar
      </Button>
    </div>
  );
};

export default ErrorWithRetry;
