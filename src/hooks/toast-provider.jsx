import { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
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
    <ToastContext.Provider value={{ toasts, addToCart, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToasts = () => useContext(ToastContext);

export default useToasts;
