import { useState } from "react";
import { ShoppingBasket, Sun, Moon } from "lucide-react";
import Button from "./button";
import useTheme from "../hooks/theme-provider";
import useCart from "../hooks/cart-provider";
import Sheet from "./sheet";

const RightNav = () => {
  const { theme, setTheme } = useTheme();
  const { cart } = useCart();
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
        <Button className="border-border relative border" onClick={toggleSheet}>
          {cart.length > 0 && (
            <span className="bg-primary text-secondary absolute -top-2 -right-3 rounded-lg px-2 text-sm font-semibold">
              {cart.length}
            </span>
          )}
          <ShoppingBasket className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        {sheet && <Sheet onClose={toggleSheet} />}
      </nav>
    </>
  );
};

export default RightNav;
