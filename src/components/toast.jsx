import { useState, useEffect } from "react";

const Toast = ({ onClose, i }) => {
  const [state, setState] = useState("entering");

  useEffect(() => {
    setState("visible");
    const timer = setTimeout(() => {
      setState("exiting");
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const classes = () => {
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
      className={`border-border bg-background fixed right-2 bottom-2 flex h-28 w-96 items-center gap-2 rounded-lg border p-3 transition-all duration-300 ease-in-out ${classes()}`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm">{i.title}</span>
        <span>Added to Cart</span>
      </div>
    </div>
  );
};

export default Toast;
