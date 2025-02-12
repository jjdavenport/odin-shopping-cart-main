import Button from "./button";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    setTheme(!theme);
  };
  return (
    <>
      <nav className="flex gap-4">
        <Button onClick={toggle}>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
        <Button>
          <ShoppingCart />
        </Button>
      </nav>
    </>
  );
};

export default Nav;
