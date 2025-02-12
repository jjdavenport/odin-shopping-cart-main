import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const NavButton = ({ text }) => {
  const [hover, setHover] = useState(false);
  const toggle = () => {
    setHover(!hover);
  };
  return (
    <>
      <button
        onClick={toggle}
        className="group p-2 flex font-sans gap-1 cursor-pointer items-center rounded-lg hover:bg-button"
      >
        {text}
        <ChevronDown className="group-hover:rotate-180 h-4 transition-all duration-300" />
      </button>
    </>
  );
};

export default NavButton;
