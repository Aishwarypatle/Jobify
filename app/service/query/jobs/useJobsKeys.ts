export const jobsKeys = {
  all: ['jobs'] as const,
  list: () => [...jobsKeys.all, 'list'] as const,
  detail: (id: string) => [...jobsKeys.all, id] as const,
};
