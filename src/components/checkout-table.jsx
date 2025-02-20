import { Trash2 } from "lucide-react";
import { useState } from "react";
import Checkbox from "./checkbox";
import Button from "./button";
import CheckoutRow from "./checkout-row";

const CheckoutTable = ({ cart }) => {
  const [selectAll, setSelectAll] = useState(false);

  const toggleAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div className="border-border h-fit w-full rounded-lg border md:w-9/12">
      <table className="divide-border w-full divide-y">
        <thead>
          <tr>
            <th className="hidden items-center p-4 text-left md:flex">
              <Checkbox checked={selectAll} onClick={toggleAll} />
            </th>
            <th className="p-4 text-left text-sm md:text-base">Product</th>
            <th className="p-4 text-center text-sm md:text-base">Quantity</th>
            <th className="p-4 text-right text-sm md:text-base">Price</th>
            <th className="hidden items-center justify-end p-1 md:flex">
              <Button>
                <Trash2 />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody className="divide-border divide-y">
          {cart.map((i) => (
            <CheckoutRow
              selectAll={selectAll}
              key={i.id}
              id={i.id}
              title={i.title}
              price={i.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutTable;
