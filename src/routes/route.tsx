import LoginPage from "@/pages/login";
import MaterialPage from "@/pages/material";
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
]);
