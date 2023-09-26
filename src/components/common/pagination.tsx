import { IComponentBaseProps } from "@/src/types";
import { Pagination as MuiPagination } from "@mui/material";
import classNames from "classnames";
import { FC } from "react";

export interface IPaginationProps extends IComponentBaseProps {
  currentPage: number;
  totalItems: number;
  onChangePage?: (currentPage: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ className, currentPage, totalItems, onChangePage }) => {
  return (
    <MuiPagination
      className={classNames(className)}
      page={currentPage}
      count={totalItems}
      color="primary"
      variant="outlined"
      onChange={(_, page) => onChangePage?.(page)}
    />
  );
};

Pagination.displayName = "Pagination";

export default Pagination;
