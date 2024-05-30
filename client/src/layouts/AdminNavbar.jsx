import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/logo.png";

const AdminNavbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="col-md-3 border" style={{ maxWidth: "250px" }}>
        <div
          className="d-flex flex-column p-3 vh-100"
          style={{ width: "250px" }}
        >
          <Link
            to="/admin"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img className="img-fluid p-2" src={Logo} width={50} />
            <span className="fs-4">Blogify</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to="/admin"
                className={`nav-link link-body-emphasis ${
                  pathname === "/admin" ? "active" : ""
                }`}
              >
                <i className="fa fa-home"></i>
                &nbsp;Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`nav-link link-body-emphasis ${
                  pathname.includes("users") ? "active text-light" : ""
                }`}
              >
                <i className="fa fa-users"></i>&nbsp;Users
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blogs"
                className={`${
                  pathname.includes("blogs")
                    ? "nav-link link-body-emphasis text-light active"
                    : "nav-link link-body-emphasis"
                }`}
              >
                <i className="fa fa-book"></i>
                &nbsp;Blogs
              </Link>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <Link
              to="#"
              className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong className="text-dark">mdo</strong>
            </Link>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
