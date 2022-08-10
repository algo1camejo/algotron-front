import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import './styles.scss';

export const Logo: FC = () => {
  return (
    <Navbar.Brand
      id="navbar-logo"
      as={RouterLink}
      to="/"
    >
      <Image src="static/logos/logo-dark.svg"/>
    </Navbar.Brand>
  );
}

export default Logo;
