import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastProvider } from "./hooks/toast-provider";
import "./index.css";
import Home from "./pages/home";
import Store from "./pages/store";
import Checkout from "./pages/checkout";
import Layout from "./components/layout";
import ProductPage from "./pages/product-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "store/:id",
        element: <Store />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </StrictMode>,
);
