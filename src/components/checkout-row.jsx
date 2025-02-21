import { Link } from "react-router";
import Checkbox from "./checkbox";
import Quantity from "./quantity";

const CheckoutRow = ({ select, title, price, id, toggle }) => {
  return (
    <>
      <tr className={`${select && "bg-button"}`}>
        <td className="hidden items-center justify-center p-4 md:table-cell">
          <Checkbox checked={select} onClick={toggle} />
        </td>
        <td className="p-4 text-xs md:text-base">
          <Link to={`/product/${id}`}>{title}</Link>
        </td>
        <td className="p-4">
          <div className="flex items-center justify-center">
            <Quantity />
          </div>
        </td>
        <td className="p-4 text-right text-xs md:text-base">
          ${price.toFixed(2)}
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default CheckoutRow;
