import { useState } from "react";
import { X } from "lucide-react";
import Button from "./button";

const Sheet = ({ onClose }) => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 ${
          close ? "opacity-0 transition-opacity duration-300" : ""
        }`}
        onClick={handleClose}
      ></div>
      <aside
        className={`fixed border-l border-border z-50 bg-background right-0 top-0 h-screen w-5/12 p-4 ${
          close ? "animate-slide-out-right" : "animate-slide-in-right"
        }`}
      >
        <Button onClick={handleClose}>
          <X />
        </Button>
      </aside>
    </>
  );
};

export default Sheet;
