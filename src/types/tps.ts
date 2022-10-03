import {
  PaginationLegacy,
  Pagination,
} from 'src/types/pagination';
import {
  STATUS,
  Status,
} from 'src/types/status';

export const ENTREGA_STATUS = STATUS;

export type EntregaStatus = Status;

export type EntregaInstance = Pick<Instance, 'id' | 'nombre'>;

export type Resultados = {
  output: string;
};

export type Instance = {
  id: number;
  nombre: string;
  apertura: string;
  cierre: string;
  enunciado: string | null;
};

export type Entrega =
  PartialEntrega &
  {
    resultado: string;
    nota : number | null;
    correccion: string | null;
    corrector : string | null;
  };

export type PartialEntrega = {
  id: number;
  estado: EntregaStatus;
  tp: EntregaInstance;
  horario: string;
  archivo: string;
  corregido : boolean;
};

// Response
export type InstancesResponse = PaginationLegacy<Instance>;

export type EntregasResponse = Pagination<PartialEntrega>;

export type EntregaDetailResponse = Entrega;

export type CreateTPErrorResponse = {
  non_field_errors?: [string];
  archivo?: [string];
  tp?: [string];
};
