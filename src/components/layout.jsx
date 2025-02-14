import { useState } from "react";
import { Outlet } from "react-router";
import Wrapper from "./wrapper";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
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
