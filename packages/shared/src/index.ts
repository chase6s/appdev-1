/**
 * Shared types and utilities for Shipyard Engineering.
 */

export interface ApiResponse<T> {
  data: T;
  error: string | null;
  status: number;
}

export type Nullable<T> = T | null;

export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}