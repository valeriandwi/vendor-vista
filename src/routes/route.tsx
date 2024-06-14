import LoginPage from "@/pages/login";
import MaterialPage from "@/pages/material";
import SupplierPage from "@/pages/supplier";
import SupplierDetailPage from "@/pages/supplier/detail";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/material",
    element: <MaterialPage />,
  },
  {
    path: "/supplier",
    element: <SupplierPage />,
  },
  {
    path: "/supplier/:id",
    element: <SupplierDetailPage />,
  },
]);
