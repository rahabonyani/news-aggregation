export interface Filters {
  from_date: string;
  to_date: string;
}

export interface Query {
  query: string;
}

export interface AllFilters extends Filters, Query {}
