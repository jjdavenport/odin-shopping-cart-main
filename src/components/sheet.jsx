import { useState, useEffect } from "react";
import EmptySheet from "./empty-sheet";
import SheetCart from "./sheet-cart";
import useCart from "../hooks/cart-provider";

const Sheet = ({ onClose }) => {
  const { cart } = useCart();
  const [close, setClose] = useState(false);

  useEffect(() => {
    !close
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [close]);

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
          close && "opacity-0 transition-opacity duration-300"
        }`}
        onClick={handleClose}
      ></div>
      <aside
        className={`border-border bg-background fixed top-0 right-0 z-50 flex h-full max-h-screen w-full flex-col border-l md:w-6/12 lg:w-5/12 ${
          close ? "animate-slide-out-right" : "animate-slide-in-right"
        }`}
      >
        {cart.length > 0 ? (
          <SheetCart cart={cart} onClick={handleClose} />
        ) : (
          <EmptySheet onClick={handleClose} />
        )}
      </aside>
    </>
  );
};

export default Sheet;
