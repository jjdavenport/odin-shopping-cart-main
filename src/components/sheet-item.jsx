import { Link } from "react-router";
import Quantity from "./quantity";

const SheetItem = ({ img, title, id, onClick, price }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onClick}
          className="flex justify-center overflow-hidden rounded-md bg-white p-1"
        >
          <Link to={`product/${id}`}>
            <img className="w-20 object-contain" src={img} />
          </Link>
        </button>
        <div className="flex flex-col items-center">
          <button className="text-left" onClick={onClick}>
            <Link to={`product/${id}`}>{title}</Link>
          </button>
          <span className="w-full text-left text-sm">${price.toFixed(2)}</span>
          <Quantity />
        </div>
        <div className="h-full">
          <span>${price.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};

export default SheetItem;
