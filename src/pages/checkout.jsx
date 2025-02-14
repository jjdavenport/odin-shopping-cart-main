import Checkbox from "../components/checkbox";
import Quantity from "../components/quantity";
import Button from "../components/button";
import { Trash2 } from "lucide-react";

const Checkout = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <span>Checkout</span>
          <div className="flex items-center gap-2">
            <label htmlFor="Delete">Delete</label>
            <Button>
              <Trash2 />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Checkbox />
          <Quantity />
        </div>
      </div>
    </>
  );
};

export default Checkout;
