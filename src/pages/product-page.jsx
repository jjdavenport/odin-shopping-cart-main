import { useLocation } from "react-router";
import { Link } from "react-router";
import Button from "../components/button";
import Quantity from "../components/quantity";
import useCart from "../hooks/cart-provider";

const ProductPage = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const product = location.state?.product;

  return (
    <>
      <div className="flex flex-1 p-4">
        <div className="border-border flex flex-col items-start gap-2 rounded-lg border p-4 md:flex-row">
          <img
            className="rounded-lg object-contain md:w-1/2"
            src={product.image}
          />
          <div className="flex flex-col gap-4 p-2 md:w-1/2 md:p-10">
            <span className="text-2xl">{product.title}</span>
            <span className="text-xl">${product.price}</span>
            <Quantity className="w-full" />
            <div className="flex flex-col gap-4 lg:flex-row">
              <Link
                to="/checkout"
                className="bg-secondary-foreground text-secondary flex w-full justify-center rounded-lg p-3"
              >
                Buy it now
              </Link>
              <Button
                onClick={() =>
                  addToCart(product.image, product.title, product.price)
                }
                className="border-border w-full border"
              >
                Add to cart
              </Button>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
