import { FC } from 'react';
import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Navbar from 'src/pages/app/Base/Navbar';

export const Base: FC = () => {
  return (
    <>
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
