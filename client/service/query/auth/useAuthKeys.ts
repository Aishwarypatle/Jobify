export const authKeys = {
    all: ['auth'] as const,
    lists: () => [...authKeys.all, 'list'] as const,
    list: (filters: string) => [...authKeys.lists(), { filters }] as const,
    login: () => [...authKeys.all, 'login'] as const,
    register: () => [...authKeys.all, 'register'] as const,
    logout: () => [...authKeys.all, 'logout'] as const,
    profile: () => [...authKeys.all, 'profile'] as const,
    refresh: () => [...authKeys.all, 'refresh'] as const,
}