import { Trash2 } from "lucide-react";
import { useState } from "react";
import Checkbox from "./checkbox";
import Button from "./button";
import CheckoutRow from "./checkout-row";

const CheckoutTable = ({ cart }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [select, setSelect] = useState({});

  const toggleAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const newSelectI = {};
    cart.forEach((i) => {
      newSelectI[i.id] = newSelectAll;
    });

    setSelect(newSelectI);
  };

  const toggle = (id) => {
    setSelect((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="border-border h-fit w-full overflow-hidden rounded-lg border md:w-9/12">
      <table className="divide-border w-full divide-y">
        <thead>
          <tr>
            <th className="hidden items-center p-4 text-left md:flex">
              <Checkbox checked={selectAll} onClick={toggleAll} />
            </th>
            <th className="p-4 text-left text-sm md:text-base">Product</th>
            <th className="p-4 text-center text-sm md:text-base">Quantity</th>
            <th className="p-4 text-sm md:text-right md:text-base">Price</th>
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
              key={i.id}
              id={i.id}
              title={i.title}
              price={i.price}
              select={select[i.id] || false}
              toggle={() => toggle(i.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutTable;
