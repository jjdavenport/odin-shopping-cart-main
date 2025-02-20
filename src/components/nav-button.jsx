import { ChevronDown, Gem, CircuitBoard, Shirt, Venus } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const NavButton = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      setCanHover(true);
    }
  }, []);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (canHover) setHover(true);
  };

  const handleMouseLeave = () => {
    if (canHover) setHover(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggle}
        className={`${open ? "bg-button" : ""} hover:bg-button group focus:bg-button relative flex cursor-pointer items-center gap-1 rounded-lg p-3 font-sans outline-none`}
      >
        {children}
        <ChevronDown
          className={`${open || hover ? "rotate-180" : ""} h-4 transition-all duration-300`}
        />
      </button>
      <div className="absolute top-full h-4 w-full" />
      <div
        className={`bg-background border-border absolute top-[calc(100%+1rem)] left-1/2 z-10 w-52 origin-top -translate-x-1/2 transform rounded-lg border p-3 transition-all duration-100 ${
          open || hover
            ? "visible scale-100 opacity-100"
            : "invisible scale-75 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
              to="/store/jewelery"
            >
              <span className="flex w-full gap-1">
                <Gem className="h-5" />
                Jewelery
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
              to="/store/electronics"
            >
              <span className="flex w-full gap-1">
                <CircuitBoard className="h-5" />
                Electronics
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
              to="/store/mens&clothing"
            >
              <span className="flex w-full gap-1">
                <Shirt className="h-5" />
                Men's Clothing
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full justify-start rounded-lg p-2"
              to="/store/womens&clothing"
            >
              <span className="flex w-full gap-1">
                <Venus className="h-5" />
                Women's Clothing
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavButton;
