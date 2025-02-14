import { House, Store } from "lucide-react";
import { Link } from "react-router";
import NavButton from "./nav-button";

const LeftNav = () => {
  return (
    <>
      <nav className="flex gap-4">
        <Link to="/" className="hover:bg-button flex gap-1 rounded-lg p-3">
          <House />
        </Link>
        <NavButton>
          <Store />
        </NavButton>
      </nav>
    </>
  );
};

export default LeftNav;
