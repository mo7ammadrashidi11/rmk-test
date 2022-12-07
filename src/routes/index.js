import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login";
import Products from "../pages/products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);
export default router;
