import { useState } from "react";
import Checkbox from "../components/checkbox";
import Quantity from "../components/quantity";
import Button from "../components/button";
import { Trash2 } from "lucide-react";
import Toast from "../components/toast";
import Dialog from "../components/dialog";
import Separator from "../components/separator";

const Checkout = () => {
  const [showToast, setShowToast] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const show = (setter) => () => {
    setter(true);
  };

  const hide = (setter) => () => {
    setter(false);
  };

  return (
    <>
      <div className="flex flex-1 gap-4 p-4">
        <div className="border-border flex flex-1 flex-col rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <span>Shopping basket</span>
            <div className="flex items-center gap-2">
              <label htmlFor="Delete">Delete</label>
              <Button>
                <Trash2 />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <Checkbox />
            <Quantity onClick={show(setShowToast)} />
          </div>
        </div>
        <div className="border-border flex h-fit flex-col gap-2 rounded-lg border p-3">
          <span>Order Summary</span>
          <span>Subtotal</span>
          <Separator className="bg-border" />
          <span>Total</span>
          <Button
            className="bg-foreground text-secondary hover:bg-secondary-foreground cursor-pointer rounded-lg p-3"
            onClick={show(setShowDialog)}
            onClose={hide(setShowDialog)}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
      {showToast && <Toast onClose={hide(setShowToast)} />}
      {showDialog && (
        <Dialog onClick={showDialog} onClose={hide(setShowDialog)} />
      )}
    </>
  );
};

export default Checkout;
