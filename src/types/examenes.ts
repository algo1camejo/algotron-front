import { Pagination } from 'src/types/pagination';

export interface Examen {
    id: number;
    nombre: string;
}

export interface Pregunta {
    titulo: string;
    texto: string;
    puntos: number | null;
}

export interface Respuesta {
    pregunta: Pregunta;
    respuesta: string;
    nota: string | null;
    correccion: string | null;
}

export interface Entrega {
    id: number;
    examen: Examen;
    tema: string;
    nota: number | null;
    corrector: string | null;
    respuestas: Respuesta[];
    corregido: boolean;
}

// Response
export type ExamenesResponse = Pagination<Entrega>;
