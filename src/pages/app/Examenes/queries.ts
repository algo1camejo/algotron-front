export const examenesKeys = {
  all: () => ['examenes'],
  list: () => [...examenesKeys.all(), 'list'],
  allDetail: () => [...examenesKeys.all(), 'detail'],
  detail: (id: any) => [...examenesKeys.allDetail(), id],
};
