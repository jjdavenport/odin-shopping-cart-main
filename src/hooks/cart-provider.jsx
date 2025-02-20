import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toasts, setToasts] = useState([]);

  const addToCart = (id, img, title, price) => {
    setCart((prev) => [
      ...prev,
      {
        id: id,
        quantity: 1,
        image: img,
        title: title,
        price: price,
      },
    ]);

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

  const increment = () => {
    setCart((prev) => ({ ...prev, quantity: prev + 1 }));
  };

  const decrement = () => {
    setCart((prev) => ({ ...prev, quantity: prev - 1 }));
  };

  const hideToast = () => {
    setToasts((prev) => prev.slice(1));
  };

  return (
    <CartContext.Provider value={{ toasts, addToCart, hideToast, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default useCart;
