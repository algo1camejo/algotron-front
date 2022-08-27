export const tpsKeys = {
  all: () => ['tps'],
  instances: {
    all: () => [...tpsKeys.all(), 'instances'],
    list: () => [...tpsKeys.instances.all(), 'list'],
    active: () => [...tpsKeys.instances.list(), 'active'],
  },
  entregas: {
    all: () => [...tpsKeys.all(), 'entregas'],
    allList: () => [...tpsKeys.entregas.all(), 'list'],
    list: (page: number) => [...tpsKeys.entregas.allList(), 'page', page],
    allDetail: () => [...tpsKeys.entregas.all(), 'detail'],
    detail: (id: number) => [...tpsKeys.entregas.allDetail(), id],
  },
};
