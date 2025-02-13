import Nav from "./nav";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="p-2 flex items-center justify-between">
        <Link
          to="/"
          className="rounded-lg p-3 flex gap-2 text-lg hover:bg-button"
        >
          <ShoppingCart className="h-[1.5rem] w-[1.5rem]" />
          <span className="hidden md:flex">ShoppingCart</span>
        </Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
