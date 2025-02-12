import { useState } from "react";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import { Link } from "react-router";
import Button from "./button";
import NavButton from "./nav-button";
import useTheme from "../hooks/useTheme";
import Sheet from "./sheet";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [sheet, setSheet] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const toggleSheet = () => {
    setSheet(!sheet);
  };

  return (
    <>
      <nav className="flex gap-4">
        <Link to="/" className="rounded-lg p-2 hover:bg-button ">
          Home
        </Link>
        <NavButton text="Store" />
        <Button onClick={toggleTheme}>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
        <Button onClick={toggleSheet}>
          <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        {sheet && <Sheet onClose={toggleSheet} />}
      </nav>
    </>
  );
};

export default Nav;
