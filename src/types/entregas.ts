import {
  STATUS,
  Status,
} from 'src/types/status';

export const ENTREGA_STATUS = STATUS;

export type EntregaStatus = Status;

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

export type Resultados = {
  output: string;
};
