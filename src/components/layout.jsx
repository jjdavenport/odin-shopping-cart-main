import { Outlet } from "react-router";
import { useEffect } from "react";
import Wrapper from "./wrapper";
import Header from "./header";
import Footer from "./footer";
import Toast from "./toast";
import useCart from "../hooks/cart-provider";

const Layout = () => {
  const { toasts, hideToast } = useCart();

  useEffect(() => {
    document.documentElement.classList.add(
      "scrollbar",
      "scrollbar-thumb-primary",
      "scrollbar-track-background",
    );
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <main className="flex flex-1 flex-col">
          <Outlet />
          {toasts.map((i, index) => (
            <Toast key={index} i={i} onClose={hideToast} />
          ))}
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
