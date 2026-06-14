import { type ApiResponse } from '@shipyard/shared';

export function createSuccessResponse<T>(data: T): ApiResponse<T> {
  return { data, error: null, status: 200 };
}

export function createErrorResponse<T>(error: string, status: number = 500): ApiResponse<T> {
  return { data: null as unknown as T, error, status };
}