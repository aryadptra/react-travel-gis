//import react router dom
import { Routes, Route } from "react-router-dom";

//=======================================================================
//ADMIN
//=======================================================================

//import view Login
import Login from "../pages/admin/Login.jsx";

//import component private routes
import PrivateRoute from "./PrivateRoutes";

import Categories from "../pages/admin/categories/Index.jsx";
import Dashboard from "../pages/admin/dashboard/Index.jsx";

//import view admin Dashboard
// import Dashboard from "../pages/admin/dashboard/Index";

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
            <Categories />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RoutesIndex;
