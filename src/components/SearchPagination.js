import React from "react";
import "../styles/searchPagination.css";
import Pagination from "rc-pagination";

const SearchPagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <Pagination
            className="mb-3 text-center col-md-9 active"
            pageSize={1}
            total={pageNumbers.length}
            onChange={paginate}
            style={{}}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPagination;
