import Button from 'react-bootstrap/Button';
import { ButtonProps } from 'react-bootstrap';
import { BsPrefixProps, ReplaceProps } from "react-bootstrap/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NewButtonProps = {
  label: string;
  icon: any;
} & ButtonProps

export type IconButtonProps<
  As extends React.ElementType = 'button'
> = ReplaceProps<As, BsPrefixProps<As> & NewButtonProps>

export const IconButton= <As extends React.ElementType = 'button'>(
  props: IconButtonProps<As>
) => {
  const {
    label,
    icon,
    ...buttonProps
  } = props;

  return (
    <Button
      {...buttonProps}
      className={`
        rounded-circle
        border-0
        shadow-none
        ${buttonProps?.className}
      `}
      variant="outline-dark"
      size="sm"
      aria-label={label}
      title={label}
    >
      <FontAwesomeIcon icon={icon}/>
    </Button>
  );
};

export default IconButton;
