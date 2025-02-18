import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toasts, setToasts] = useState([]);

  const addToCart = (img, title, price) => {
    setToasts((prev) => [
      ...prev,
      {
        show: true,
        image: img,
        title: title,
        price: price,
      },
    ]);
  };

  const hideToast = () => {
    setToasts((prev) => prev.slice(1));
  };

  return (
    <CartContext.Provider
      value={{ toasts, addToCart, hideToast, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default useCart;
