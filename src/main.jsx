import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Home from "./pages/home";
import Store from "./pages/store";
import Checkout from "./pages/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
