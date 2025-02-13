import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router";
import Button from "./button";
import Separator from "./separator";

const Sheet = ({ onClose }) => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
    setTimeout(() => {
      onClose();
    }, 200);
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
        className={`fixed border-l border-border z-50 bg-background flex flex-col gap-2 right-0 top-0 h-screen w-full md:w-5/12 p-3 ${
          close ? "animate-slide-out-right" : "animate-slide-in-right"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl">Cart</span>
          <Button onClick={handleClose}>
            <X />
          </Button>
        </div>
        <Separator className="bg-border" />
        <Link
          to="/checkout"
          className="w-full bg-foreground text-secondary hover:bg-secondary-foreground flex p-3 rounded-lg justify-center"
        >
          Proceed to checkout
        </Link>
      </aside>
    </>
  );
};

export default Sheet;
