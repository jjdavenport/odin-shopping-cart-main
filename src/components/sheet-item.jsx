import { Link } from "react-router";
import Quantity from "./quantity";

const SheetItem = ({ img, title, id, onClick, price }) => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <button
          onClick={onClick}
          className="flex max-w-20 items-center justify-center overflow-hidden rounded-md bg-white p-1"
        >
          <Link to={`product/${id}`}>
            <img className="object-contain" src={img} />
          </Link>
        </button>
        <div className="flex flex-1 flex-col gap-2">
          <button className="text-left" onClick={onClick}>
            <Link to={`product/${id}`}>{title}</Link>
          </button>
          <span className="text-sm">${price.toFixed(2)}</span>
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
