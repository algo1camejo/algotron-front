import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import './styles.scss';

export type LogoProps = {
  onClick?: () => void;
};

export const Logo: FC<LogoProps> = (props) => {
  const {
    onClick = () => null,
  } = props;

  return (
    <Navbar.Brand
      id="navbar-logo"
      as={RouterLink}
      to="/"
      onClick={onClick}
    >
      <Image src="static/logos/logo-dark.svg"/>
    </Navbar.Brand>
  );
}

export default Logo;
