import { X } from "lucide-react";
import { Link } from "react-router";
import SheetItem from "./sheet-item";
import Button from "./button";
import Separator from "./separator";

const SheetCart = ({ onClick, cart }) => {
  const total = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <>
      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xl">Your cart</span>
          <Button onClick={onClick}>
            <X />
          </Button>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>Product</span>
          <span>Total</span>
        </div>
      </div>
      <Separator className="bg-border" />
      <div className="scrollbar scrollbar-thumb-primary scrollbar-track-background flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        {cart.map((i) => (
          <SheetItem
            price={i.price}
            img={i.image}
            onClick={onClick}
            key={i.id}
            id={i.id}
            title={i.title}
            quantity={i.quantity}
          />
        ))}
      </div>
      <Separator className="bg-border" />
      <section className="flex flex-col gap-4 p-4">
        <div className="flex justify-between text-xl">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button
          onClick={onClick}
          className="bg-foreground text-secondary hover:bg-secondary-foreground flex w-full justify-center rounded-lg"
        >
          <Link className="w-full p-3" to="/checkout">
            Check out
          </Link>
        </button>
      </section>
    </>
  );
};

export default SheetCart;
