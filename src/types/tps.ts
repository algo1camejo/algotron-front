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
  id: number,
  nombre: string,
  apertura: string,
  cierre: string,
};

export type Entrega =
  PartialEntrega &
  {
    resultado: string;
  };

export type PartialEntrega = {
  id: number,
  get_estado_display: EntregaStatus,
  tp: EntregaInstance,
  horario: string,
  archivo: string;
};

// Response
export type InstancesResponse = PaginationLegacy<Instance>;

export type EntregasResponse = Pagination<PartialEntrega>;

export type EntregaDetailResponse = Entrega;
