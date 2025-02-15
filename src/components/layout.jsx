import { Outlet } from "react-router";
import { useEffect } from "react";
import Wrapper from "./wrapper";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
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
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
