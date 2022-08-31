import { FC } from 'react';
import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Navbar from 'src/pages/app/Base/Navbar';
import AuthErrorModal from 'src/pages/app/Base/AuthErrorModal';

export const Base: FC = () => {
  return (
    <>
      <AuthErrorModal/>
      <Navbar/>
      <Container
        id="content-container"
        fluid="md"
        className="my-4"
      >
        <Outlet/>
      </Container>
    </>
  );
}

export default Base;
