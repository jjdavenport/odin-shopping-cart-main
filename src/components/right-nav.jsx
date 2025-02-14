import { useState } from "react";
import { ShoppingBasket, Sun, Moon } from "lucide-react";
import Button from "./button";
import useTheme from "../hooks/theme-provider";
import Sheet from "./sheet";

const RightNav = () => {
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
        <Button className="border-border border" onClick={toggleTheme}>
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        </Button>
        <Button className="border-border border" onClick={toggleSheet}>
          <ShoppingBasket className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        {sheet && <Sheet onClose={toggleSheet} />}
      </nav>
    </>
  );
};

export default RightNav;
