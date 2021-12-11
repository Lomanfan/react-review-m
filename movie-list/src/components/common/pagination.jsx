import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log("currentPage", currentPage); //make sure to receive info of the currentPage

  const pagesCount = Math.ceil(itemsCount / pageSize);
  // console.log(pagesCount);   //0.9 page, add Math.ceil()
  if (pagesCount === 1) return null; //no pagination
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={page === currentPage? "page-item active" : "page-item"}>
            <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
