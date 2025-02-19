import { ChevronDown, Gem, CircuitBoard, Shirt, Venus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";
import Button from "./button";

const NavButton = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const desktop = useMediaQuery({ minWidth: 1024 });

  const toggle = () => {
    setOpen(!open);
  };

  const close = () => {
    setHover(false);
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (desktop) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    if (desktop) {
      setHover(false);
      if (!open) {
        setOpen(false);
      }
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggle}
        className={`${open && "bg-button"} ${
          desktop ? "hover:bg-button" : ""
        } group focus:bg-button relative flex cursor-pointer items-center gap-1 rounded-lg p-3 font-sans outline-none`}
      >
        {children}
        <ChevronDown
          className={`${open ? "rotate-180" : ""} h-4 transition-all duration-300`}
        />
      </button>
      <div className="absolute top-full h-4 w-full" />
      <div
        className={`bg-background border-border absolute top-[calc(100%+1rem)] left-1/2 z-10 w-52 origin-top -translate-x-1/2 transform rounded-lg border p-3 transition-all duration-100 ${
          open || (hover && desktop)
            ? "visible scale-100 opacity-100"
            : "invisible scale-75 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          <li className="w-full">
            <button
              onClick={close}
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
            >
              <Link className="flex w-full gap-1" to="/store/jewelery">
                <Gem className="h-5" />
                Jewelery
              </Link>
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={close}
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
            >
              <Link className="flex w-full gap-1" to="/store/electronics">
                <CircuitBoard className="h-5" />
                Electronics
              </Link>
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={close}
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
            >
              <Link className="flex w-full gap-1" to="/store/mens&clothing">
                <Shirt className="h-5" />
                Men's Clothing
              </Link>
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={close}
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
            >
              <Link className="flex w-full gap-1" to="/store/womens&clothing">
                <Venus className="h-5" />
                Women's Clothing
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavButton;
