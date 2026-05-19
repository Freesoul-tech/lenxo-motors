/**
 * React Query Hooks for API calls
 * Provides typed, reusable hooks for data fetching and mutations
 */

import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from "@tanstack/react-query";
import { apiGet, apiPost, apiPut, apiPatch, apiDelete, ApiError } from "@/lib/api-client";

/**
 * Hook for GET requests
 */
export function useApiQuery<T>(
  endpoint: string | null,
  options?: Omit<UseQueryOptions<T, ApiError>, "queryKey" | "queryFn">
) {
  return useQuery<T, ApiError>({
    queryKey: [endpoint],
    queryFn: () => apiGet<T>(endpoint!),
    enabled: !!endpoint,
    ...options,
  });
}

/**
 * Hook for POST mutations
 */
export function useApiMutation<TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: Omit<UseMutationOptions<TData, ApiError, TVariables>, "mutationFn">
) {
  return useMutation<TData, ApiError, TVariables>({
    mutationFn: (data) => apiPost<TData>(endpoint, data),
    ...options,
  });
}

/**
 * Hook for PUT mutations
 */
export function useApiPutMutation<TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: Omit<UseMutationOptions<TData, ApiError, TVariables>, "mutationFn">
) {
  return useMutation<TData, ApiError, TVariables>({
    mutationFn: (data) => apiPut<TData>(endpoint, data),
    ...options,
  });
}

/**
 * Hook for PATCH mutations
 */
export function useApiPatchMutation<TData = unknown, TVariables = unknown>(
  endpoint: string,
  options?: Omit<UseMutationOptions<TData, ApiError, TVariables>, "mutationFn">
) {
  return useMutation<TData, ApiError, TVariables>({
    mutationFn: (data) => apiPatch<TData>(endpoint, data),
    ...options,
  });
}

/**
 * Hook for DELETE mutations
 */
export function useApiDeleteMutation<TData = unknown>(
  endpoint: string,
  options?: Omit<UseMutationOptions<TData, ApiError, void>, "mutationFn">
) {
  return useMutation<TData, ApiError, void>({
    mutationFn: () => apiDelete<TData>(endpoint),
    ...options,
  });
}
