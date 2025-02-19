import RightNav from "./right-nav";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import LeftNav from "./left-nav";
import Separator from "./separator";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 md:px-10">
        <LeftNav />
        <Link
          to="/odin-shopping-cart-main/"
          className="hover:bg-button mx-auto flex gap-2 rounded-lg p-3 text-lg"
        >
          <ShoppingCart className="h-[1.5rem] w-[1.5rem]" />
          <span className="hidden md:flex">ShoppingCart</span>
        </Link>
        <RightNav />
      </header>
      <Separator className="bg-border" />
    </>
  );
};

export default Header;
