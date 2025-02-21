import { useState } from "react";
import Separator from "./separator";
import Button from "./button";
import Dialog from "../components/dialog";

const CheckoutSummary = ({ total }) => {
  const [showDialog, setShowDialog] = useState(false);

  const show = (setter) => () => {
    setter(true);
  };

  const hide = (setter) => () => {
    setter(false);
  };
  return (
    <>
      <div className="border-border flex h-fit w-full flex-col gap-2 rounded-lg border p-3 md:w-3/12">
        <span>Order Summary</span>
        <span>Subtotal</span>
        <Separator className="bg-border" />
        <div className="flex justify-between">
          <span>Total</span>
          <span>${total}</span>
        </div>
        <Button
          className="bg-foreground text-secondary hover:bg-secondary-foreground cursor-pointer rounded-lg p-3"
          onClick={show(setShowDialog)}
          onClose={hide(setShowDialog)}
        >
          Proceed to checkout
        </Button>
      </div>
      {showDialog && (
        <Dialog onClick={showDialog} onClose={hide(setShowDialog)} />
      )}
    </>
  );
};

export default CheckoutSummary;
