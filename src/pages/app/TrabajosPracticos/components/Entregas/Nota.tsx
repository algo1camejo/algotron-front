import React from 'react'
import { Alert } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

interface NotaProps {
    nota: number,
    corrector : string,
}

const textNota = (nota: number) => {
    if (nota < 4) {
        return "Insuficiente";
    } else {
        switch (nota) {
            case 4:
                return "4 (cuatro)";
            case 5:
                return "5 (cinco)";
            case 6:
                return "6 (seis)";
            case 7:
                return "7 (siete)";
            case 8:
                return "8 (ocho)";
            case 9:
                return "9 (nueve)";
            case 10:
                return "10 (diez)";
        }
    }
}

export const Nota = ( {nota, corrector} : NotaProps) => {
    const color = nota < 4 ? "danger" : "success";
    const image = nota < 4 ? '/static/tron/llorando.svg' : '/static/tron/alegre.svg';
    


    return (
        <Alert
          className="status-alert"
          variant={color}
        >
          <Image src={image}/>
          <div className="vr"></div>
          <div>
            <Alert.Heading>
              {"Nota : " + textNota(nota)}
            </Alert.Heading>
            <p>
              {"Corrector/a : " +corrector}
            </p>
          </div>
        </Alert>
      );
}