export const tpsKeys = {
  all: () => ['tps'],
  instances: {
    all: () => [...tpsKeys.all(), 'instances'],
    list: () => [...tpsKeys.instances.all(), 'list'],
    active: () => [...tpsKeys.instances.list(), 'active'],
  },
};
