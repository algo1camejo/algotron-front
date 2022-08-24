import { Pagination } from 'src/types/pagination';

export type Instance = {
  id: number,
  nombre: string,
  apertura: string,
  cierre: string,
};

// Response
export type InstancesResponse = Pagination<Instance>;
