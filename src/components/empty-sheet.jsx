import { Link } from "react-router";
import { X } from "lucide-react";
import Button from "./button";

const EmptySheet = ({ onClick }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-end gap-1">
        <Button onClick={onClick}>
          <X />
        </Button>
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
          <span className="text-2xl">Your cart is empty</span>
          <Link
            to="/checkout"
            className="bg-foreground text-secondary hover:bg-secondary-foreground flex w-7/12 justify-center rounded-lg p-3"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptySheet;
