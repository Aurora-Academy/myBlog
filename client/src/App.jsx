import { Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import VerifyPassword from "./pages/VerifyPassword";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
// Admin Pages
import BlogList from "./pages/admin/blogs/List";
import UserList from "./pages/admin/users/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-password" element={<VerifyPassword />} />
        <Route path="/register" element={<Register />} />
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<BlogList />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="users" element={<UserList />} />
        </Route>
        {/* Error Routing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
