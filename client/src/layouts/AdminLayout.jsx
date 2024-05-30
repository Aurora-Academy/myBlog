import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

import { getToken } from "../utils/token";

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    // TODO valid token check
    if (!token) navigate("/login");
  }, [navigate]);
  return (
    <div>
      <main className="d-flex vh-100">
        <AdminNavbar />
        <div className="col-md-9 mt-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
