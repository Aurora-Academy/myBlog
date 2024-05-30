import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const UserNavbar = () => {
  return (
    <div>
      <nav
        className="navbar bg-body-tertiary navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="32" alt="Logo" className="img-fluid m-1" />
            Blogify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
            <div className="btn-toolbar">
              <div className="btn-group p-1">
                <Link className="btn btn-outline-light" to="/login">
                  <i className="fa fa-sign-in fa-lg"></i>
                </Link>
              </div>
              <div className="btn-group p-1">
                <Link className="btn btn-outline-light" to="/bookmarks">
                  <i className="fa fa-bookmark fa-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
