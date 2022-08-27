export type PaginationLegacy<T> = {
  count: number,
  next: string | null,
  previous: string | null,
  results: T[],
};

export type Pagination<T> = {
  page: number,
  totalPages: number,
  limit: number,
  count: number,
  links: {
    next: string,
    prev: string,
  },
  results: T[],
};
