import { X } from "lucide-react";
import { Link } from "react-router";
import SheetItem from "./sheet-item";
import Button from "./button";
import Separator from "./separator";

const SheetCart = ({ onClick, cart }) => {
  return (
    <>
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
      <Separator className="bg-border" />
      <div className="flex flex-1 flex-col gap-2">
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
      <section className="flex flex-col gap-4 py-4">
        <Separator className="bg-border" />
        <div className="flex justify-between text-xl">
          <span>Total</span>
          <span>$15.00</span>
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
