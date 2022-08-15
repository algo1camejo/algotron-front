export const ENTREGA_STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  PENDING: 'PENDING',
};

export type EntregaStatus =
  'ERROR' |
  'SUCCESS' |
  'PENDING';

export type Instance = {
  id: number;
  title: string;
};

export type Entrega = {
  id: number;
  status: EntregaStatus;
  instance: Instance;
  date: string;
};
