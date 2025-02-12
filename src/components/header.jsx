import Nav from "./nav";
import { Link } from "react-router";
import { Store } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="p-2 flex justify-between">
        <Link to="/" className="rounded-lg p-2 hover:bg-button ">
          <Store />
        </Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
