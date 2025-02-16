import Button from "./button";
import { Link } from "react-router";

const Product = ({ img, title, price, href, onClick }) => {
  return (
    <>
      <div className="border-border flex flex-col overflow-hidden rounded-lg border">
        <div className="flex flex-col items-center bg-white">
          <Link to={href}>
            <img className="h-80 object-contain" src={img} />
          </Link>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-2 p-3">
          <div className="bg-background flex flex-1 flex-col justify-between gap-1">
            <Link to={href}>{title}</Link>
            <Link to={href}>${price}</Link>
          </div>
          <div className="bg-background flex items-center gap-2">
            <Link
              to="/checkout"
              className="bg-secondary-foreground text-secondary flex w-full justify-center rounded-lg p-3"
            >
              Buy it now
            </Link>
            <Button onClick={onClick} className="border-border w-full border">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
