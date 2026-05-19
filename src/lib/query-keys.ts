/**
 * Query Key Factory
 * Centralized query key management for type-safe React Query cache keys
 */

export const queryKeys = {
  all: ["api"] as const,
  
  // Users
  users: () => [...queryKeys.all, "users"] as const,
  user: (id: number) => [...queryKeys.users(), id] as const,
  userById: (id: number) => [...queryKeys.all, "users", id] as const,
  
  // Projects
  projects: () => [...queryKeys.all, "projects"] as const,
  project: (id: number) => [...queryKeys.projects(), id] as const,
  
  // Services
  services: () => [...queryKeys.all, "services"] as const,
  service: (id: number) => [...queryKeys.services(), id] as const,
  
  // Add more as needed
};

/**
 * Usage in hooks:
 * 
 * const { data } = useQuery({
 *   queryKey: queryKeys.users(),
 *   queryFn: () => fetchUsers(),
 * });
 * 
 * // Invalidate after mutation:
 * queryClient.invalidateQueries({ queryKey: queryKeys.users() });
 */
