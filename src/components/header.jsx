import Nav from "./nav";
import { Link } from "react-router";
import { Store } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="p-2 flex justify-between">
        <Link to="/" className="rounded-lg p-2 hover:bg-button">
          <Store className="h-[1.5rem] w-[1.5rem]" />
        </Link>
        <Nav />
      </header>
    </>
  );
};

export default Header;
