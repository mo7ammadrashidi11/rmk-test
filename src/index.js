import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import router from "./routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
