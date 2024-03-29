export interface PaginationProps {
  totalCount?: number;
  pageRangeDisplayed?: number;
  currentPage?: number;
  onChange?: (selectedItem: { selected: number }) => void;
}
