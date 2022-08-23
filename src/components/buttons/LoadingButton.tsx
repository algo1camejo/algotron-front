import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonProps } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export type LoadingButtonProps = ButtonProps & {
  isLoading?: boolean;
};

export const LoadingButton: FC<LoadingButtonProps> = (props) => {
  const {
    children,
    isLoading = false,
    ...buttonProps
  } = props;

  return (
    <Button
      {...buttonProps}
    >
      {isLoading && (
        <Spinner
          className="me-1"
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      {children}
    </Button>
  );
};

export default LoadingButton;
