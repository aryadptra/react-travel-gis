//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from "../pages/admin/Login.jsx";

//import component private routes
import PrivateRoute from "./PrivateRoutes";

//import view admin Dashboard
import Dashboard from "../pages/admin/dashboard/Index.jsx";

//import view admin categories Index
import CategoriesIndex from "../pages/admin/categories/Index.jsx";

//import view admin category Create
import CategoryCreate from "../pages/admin/categories/Create.jsx";

//import view admin category Edit
import CategoryEdit from "../pages/admin/categories/Edit.jsx";

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/admin/login" */}
      <Route path="/admin/login" element={<Login />} />

      {/* private route "/admin/dashboard" */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* private route "/admin/categories" */}
      <Route
        path="/admin/categories"
        element={
          <PrivateRoute>
            <CategoriesIndex />
          </PrivateRoute>
        }
      />

      {/* private route "/admin/categories/create" */}
      <Route
        path="/admin/categories/create"
        element={
          <PrivateRoute>
            <CategoryCreate />
          </PrivateRoute>
        }
      />

      {/* private route "/admin/categories/edit/:id" */}
      <Route
        path="/admin/categories/edit/:id"
        element={
          <PrivateRoute>
            <CategoryEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesIndex;
