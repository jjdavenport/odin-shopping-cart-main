import { useState } from "react";
import EmptySheet from "./empty-sheet";

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
        className={`fixed inset-0 z-40 bg-black/50 ${
          close ? "opacity-0 transition-opacity duration-300" : ""
        }`}
        onClick={handleClose}
      ></div>
      <aside
        className={`border-border bg-background fixed top-0 right-0 z-50 flex h-screen w-full flex-col gap-2 border-l p-3 md:w-5/12 ${
          close ? "animate-slide-out-right" : "animate-slide-in-right"
        }`}
      >
        <EmptySheet onClick={handleClose} />
      </aside>
    </>
  );
};

export default Sheet;
