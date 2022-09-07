import { FC } from 'react'
import { Container } from 'react-bootstrap'
import '../styles.scss';

export const TokenNotValid: FC = () => {
  return (
    <Container className="info-container">
        <img
          alt=""
          src="/static/tron/llorando.svg"
        />
        <p>El link para renovar la clave no es valido.</p>
        <p>El mismo pudo haber <strong> expirado</strong> o simplemente ya fue <strong> utilizado </strong> </p>
    </Container>
  );
};

export default TokenNotValid;
