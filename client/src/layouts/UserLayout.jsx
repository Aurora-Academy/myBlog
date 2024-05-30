import { Outlet } from "react-router-dom";

import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  return (
    <div>
      <UserNavbar />
      <main className="container-fluid" style={{ height: "405px" }}>
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
