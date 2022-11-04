export const NOTA_MINIMA = 4;

export type PropsByNota = {
  title: string;
  subtitle: string;
  color: 'danger' | 'success' | 'secondary';
  image: string;
};

export const estaAprobado = (nota: number): boolean => nota >= NOTA_MINIMA;

export const getPropsByNota = (
  nota: number | null,
  corregido: boolean | null = true,
): PropsByNota => {
  if(!corregido || !nota) {
    return {
      title: 'Pendiente',
      subtitle: 'Corrección en proceso',
      color: 'secondary',
      image: '/static/tron/normal.svg',
    };
  }

  if(estaAprobado(nota)) {
    return {
      title: formatNota(nota),
      subtitle: 'Exámen aprobado!',
      color: 'success',
      image: '/static/tron/alegre.svg',
    };
  }

  return {
    title: formatNota(nota),
    subtitle: 'Exámen no aprobado',
    color: 'danger',
    image: '/static/tron/llorando.svg',
  };
};

export const getNotaString = (nota: number | null): string => {
  if(!nota) return 'Sin nota';
  if(!estaAprobado(nota)) return 'Insuficiente';

  switch (nota) {
    case 4:
      return 'cuatro';
    case 5:
      return 'cinco';
    case 6:
      return 'seis';
    case 7:
      return 'siete';
    case 8:
      return 'ocho';
    case 9:
      return 'nueve';
    case 10:
      return 'diez';
    default:
      return '';
  };
};

export const formatNota = (nota: number | null): string => {
  if(!nota) return 'Sin nota';
  if(!estaAprobado(nota)) return 'Insuficiente';

  return `${nota} (${getNotaString(nota)})`;
};
