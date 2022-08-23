import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconButtonProps = {
  label: string;
  icon: any;
  onClick?: () => void;
};

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    label,
    icon,
    onClick = () => null,
  } = props;

  return (
    <Button
      className="rounded-circle border-0 shadow-none"
      variant="outline-dark"
      size="sm"
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon}/>
    </Button>
  );
};

export default IconButton;
