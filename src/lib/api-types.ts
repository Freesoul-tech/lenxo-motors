/**
 * API Type Definitions
 * Common types for backend API responses
 */

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface User {
  id: number;
  email: string;
  createdAt: string;
}
