import { useState, useEffect } from "react";

const Toast = ({ onClose }) => {
  const [state, setState] = useState("entering");

  useEffect(() => {
    setState("visible");
    const timer = setTimeout(() => {
      setState("exiting");
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getClasses = () => {
    switch (state) {
      case "entering":
        return "translate-y-full opacity-0";
      case "visible":
        return "translate-y-0 opacity-100";
      case "exiting":
        return "translate-x-full opacity-0";
      default:
        return "";
    }
  };

  return (
    <div
      className={`border-border bg-background fixed right-5 bottom-5 flex h-28 w-96 items-center justify-center rounded-lg border transition-all duration-300 ease-in-out ${getClasses()}`}
    >
      <span>Added to Cart</span>
    </div>
  );
};

export default Toast;
