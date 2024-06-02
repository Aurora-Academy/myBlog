import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ data, limit, page, setLimit, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumberOfPages = Math.ceil(data?.total / limit);
  let items = [];

  for (let n = 1; n <= totalNumberOfPages; n++) {
    items.push(
      <li className={`page-item ${currentPage === n ? "active" : ""}`} key={n}>
        <Link
          className="page-link"
          onClick={() => {
            setPage(n);
            setCurrentPage(n);
          }}
        >
          {n}
        </Link>
      </li>
    );
  }

  return (
    <div className="row">
      <div className="d-flex justify-content-center d-grid gap-2">
        <ul className="pagination">
          <select
            className="page-item"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="20">20</option>
          </select>
        </ul>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <Link
                className="page-link"
                onClick={() => {
                  setPage(1);
                  setCurrentPage(1);
                }}
              >
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            {items?.map((item) => item)}
            <li className="page-item">
              <Link
                className="page-link"
                to="#"
                onClick={() => {
                  setPage(totalNumberOfPages);
                  setCurrentPage(totalNumberOfPages);
                }}
              >
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
