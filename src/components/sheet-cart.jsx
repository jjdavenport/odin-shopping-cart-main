import Button from "./button";
import Separator from "./separator";
import Quantity from "./quantity";
import { X } from "lucide-react";
import { Link } from "react-router";

const SheetCart = ({ onClick }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-xl">Your cart</span>
        <Button onClick={onClick}>
          <X />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <span>Product</span>
        <span>Total</span>
      </div>
      <Separator className="bg-border" />
      <div className="flex flex-1 flex-col">
        <Quantity />
      </div>
      <Link
        to="/checkout"
        className="bg-foreground text-secondary hover:bg-secondary-foreground flex w-full justify-center rounded-lg p-3"
      >
        Check out
      </Link>
    </>
  );
};

export default SheetCart;
