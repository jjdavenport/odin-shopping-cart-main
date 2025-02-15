import { useEffect, useState } from "react";
import Button from "./button";

const Dialog = ({ onClose, onClick }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onClick ? setOpen(true) : setTimeout(() => setOpen(false), 300);
    return () => clearTimeout();
  }, [onClick]);

  return (
    <>
      <div
        className={`${onClick ? "opacity-100" : "opacity-0"} fixed inset-0 flex items-center justify-center bg-black/50`}
      >
        <dialog
          className={`border-border bg-background mx-auto flex flex-col items-center gap-4 rounded-lg border p-4 transition-all duration-100 ${onClick ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          <span className="text-primary">
            Are you sure you want to Checkout?
          </span>
          <div className="flex gap-2">
            <Button className="border-border border" onClick={onClose}>
              Cancel
            </Button>
            <button
              onClick={onClose}
              className="bg-foreground text-secondary hover:bg-secondary-foreground cursor-pointer rounded-lg p-3"
            >
              Checkout
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Dialog;
