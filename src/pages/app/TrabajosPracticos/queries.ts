export const tpsKeys = {
  all: () => ['tps'],
  instances: {
    all: () => [...tpsKeys.all(), 'instances'],
    list: () => [...tpsKeys.instances.all(), 'list'],
    active: () => [...tpsKeys.instances.list(), 'active'],
  },
  entregas: {
    all: () => [...tpsKeys.all(), 'entregas'],
    list: () => [...tpsKeys.entregas.all(), 'list'],
    allDetail: () => [...tpsKeys.entregas.all(), 'detail'],
    detail: (id: number) => [...tpsKeys.entregas.allDetail(), id],
  },
};
