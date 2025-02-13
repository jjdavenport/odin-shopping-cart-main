import { ChevronDown, Gem, CircuitBoard, Shirt, Venus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const NavButton = ({ text }) => {
  const [hover, setHover] = useState(false);
  const toggle = () => {
    setHover(!hover);
  };

  return (
    <div className="relative" onMouseLeave={() => setHover(false)}>
      <button
        onMouseEnter={() => setHover(true)}
        onClick={toggle}
        className="hover:bg-button relative group p-3 focus:bg-button flex font-sans gap-1 cursor-pointer items-center rounded-lg"
      >
        {text}
        <ChevronDown
          className={`${hover && "rotate-180"} h-4 transition-all duration-300`}
        />
      </button>
      {hover && (
        <>
          <div className="absolute w-full h-4 top-full" />
          <div
            className={`border ${
              hover ? "opacity-100 scale-100" : "opacity-0 scale-90"
            } absolute bg-background rounded-lg w-52 top-[calc(100%+1rem)] left-1/2 transform -translate-x-1/2 p-3 border-border`}
          >
            <ul className="flex flex-col gap-1">
              <li className="w-full">
                <Link
                  className="flex w-full gap-1 p-2 hover:bg-button rounded"
                  to="/store/jewelry"
                >
                  <Gem className="h-5" />
                  Jewelry
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className="flex w-full p-2 gap-1 hover:bg-button rounded"
                  to="/store/electronics"
                >
                  <CircuitBoard className="h-5" />
                  Electronics
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className="flex w-full p-2 gap-1 hover:bg-button rounded"
                  to="/store/mens&clothing"
                >
                  <Shirt className="h-5" />
                  Men's Clothing
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className="flex w-full p-2 gap-1 hover:bg-button rounded"
                  to="/store/womans&clothing"
                >
                  <Venus className="h-5" />
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default NavButton;
