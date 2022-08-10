import { FC } from 'react';
import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from 'src/pages/app/Base/Logo';
import UserDropdown from 'src/pages/app/Base/UserDropdown';

export const Base: FC = () => {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Logo/>
          <UserDropdown/>
        </Container>
      </Navbar>
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default Base;
