import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import dataLoader from "./loader/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h2>This is error page</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: dataLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
