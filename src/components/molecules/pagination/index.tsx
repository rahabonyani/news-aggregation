import { HStack } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { PaginationProps } from "./types";

const Pagination = ({
  totalCount = 1,
  pageRangeDisplayed = 2,
  currentPage,
  onChange,
}: PaginationProps) => {
  return (
    <HStack
      width="full"
      justifyContent="center"
      py={6}
      sx={{
        ul: {
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
          padding: " 0 5rem",
          gap: 2,

          li: {
            a: {
              borderRadius: "md",
              padding: " 0.4rem 0.5rem",
              cursor: "pointer",
              backgroundColor: "gray.300",
            },
          },
          "li.selected": {
            a: {
              backgroundColor: "orange.400 !important",
              color: "white",
            },
          },
          "li.disabled": {
            a: {
              backgroundColor: "gray.100",
              cursor: "default",
            },
          },
        },
      }}
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onChange}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={totalCount}
        initialPage={currentPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </HStack>
  );
};

export default Pagination;
