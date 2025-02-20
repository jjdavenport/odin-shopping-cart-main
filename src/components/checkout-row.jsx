import { useState } from "react";
import { Link } from "react-router";
import Checkbox from "./checkbox";
import Quantity from "./quantity";

const CheckoutRow = ({ selectAll, title, price, id }) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <tr className={`${selectAll && "bg-button"} `}>
        <td className="p-4">
          <Checkbox checked={selectAll} onClick={toggle} />
        </td>
        <td className="p-4 text-sm md:text-base">
          <Link to={`/product/${id}`}>{title}</Link>
        </td>
        <td className="p-4">
          <div className="flex items-center justify-center">
            <Quantity />
          </div>
        </td>
        <td className="p-4 text-right text-sm md:text-base">
          ${price.toFixed(2)}
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default CheckoutRow;
