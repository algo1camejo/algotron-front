import { STATUS } from 'src/types/status';

export const PROPS_BY_STATUS = {
  [STATUS.ERROR]: {
    title: 'Error',
    subtitle: 'Entrega no aceptada',
    color: 'danger',
    image: '/static/tron/llorando.svg',
  },
  [STATUS.SUCCESS]: {
    title: 'Éxito',
    subtitle: 'Entrega aceptada',
    color: 'success',
    image: '/static/tron/alegre.svg',
  },
  [STATUS.PENDING]: {
    title: 'Pendiente',
    subtitle: 'Entrega en proceso',
    color: 'secondary',
    image: '/static/tron/normal.svg',
  },
};
