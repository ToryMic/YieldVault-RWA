/**
 * Shared types for data table state management and pagination.
 */

export type SortDirection = "asc" | "desc";

export interface DataTableState {
  search: string;
  sortBy: string;
  sortDirection: SortDirection;
  page: number;
  pageSize: number;
}
