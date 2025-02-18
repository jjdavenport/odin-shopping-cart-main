import { ChevronDown, Gem, CircuitBoard, Shirt, Venus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const NavButton = ({ children }) => {
  const [state, setState] = useState({
    hover: false,
    click: false,
  });

  const toggle = () => {
    setState((prev) => ({ ...prev, click: !prev.click }));
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setState((prev) => ({ ...prev, hover: true }))}
      onMouseLeave={() => setState((prev) => ({ ...prev, hover: false }))}
    >
      <button
        onClick={toggle}
        className={`${state.hover || (state.click && "bg-button")} hover:bg-button group focus:bg-button relative flex cursor-pointer items-center gap-1 rounded-lg p-3 font-sans`}
      >
        {children}
        <ChevronDown
          className={`${state.hover || state.click ? "rotate-180" : ""} h-4 transition-all duration-300`}
        />
      </button>
      <div className="absolute top-full h-4 w-full" />
      <div
        className={`bg-background border-border absolute top-[calc(100%+1rem)] left-1/2 z-10 w-52 origin-top -translate-x-1/2 transform rounded-lg border p-3 transition-all duration-100 ${
          state.hover || state.click
            ? "visible scale-100 opacity-100"
            : "invisible scale-75 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full gap-1 rounded p-2"
              to="/store/jewelery"
            >
              <Gem className="h-5" />
              Jewelery
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full gap-1 rounded p-2"
              to="/store/electronics"
            >
              <CircuitBoard className="h-5" />
              Electronics
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full gap-1 rounded p-2"
              to="/store/mens&clothing"
            >
              <Shirt className="h-5" />
              Men's Clothing
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="hover:bg-button flex w-full gap-1 rounded p-2"
              to="/store/womens&clothing"
            >
              <Venus className="h-5" />
              Women's Clothing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavButton;
