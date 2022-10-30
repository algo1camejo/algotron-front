export interface Links {
    next: string | null;
    prev: string | null;
}

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
    correccion: string;
}

export interface Result {
    id: number;
    examen: Examen;
    tema: string;
    nota: number;
    corrector: string | null;
    respuestas: Respuesta[];
}

export interface ExamenesResponse {
    page: number;
    total_pages: number;
    limit: number;
    count: number;
    links: Links;
    results: Result[];
}