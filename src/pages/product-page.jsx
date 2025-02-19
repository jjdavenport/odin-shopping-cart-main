import { useParams, Link } from "react-router";
import useProducts from "../hooks/products-provider";
import Button from "../components/button";
import Quantity from "../components/quantity";
import useCart from "../hooks/cart-provider";

const ProductPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const { data } = useProducts();

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex flex-1 p-4">
      <div className="border-border flex flex-col items-start gap-2 rounded-lg border p-4 md:flex-row">
        <img
          className="rounded-lg object-contain md:w-1/2"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col gap-4 p-2 md:w-1/2 md:p-10">
          <span className="text-2xl">{product.title}</span>
          <span className="text-xl">${product.price}</span>
          <Quantity className="w-full" />
          <div className="flex flex-col gap-4 lg:flex-row">
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.image,
                  product.title,
                  product.price,
                )
              }
              className="bg-secondary-foreground text-secondary flex w-full justify-center rounded-lg p-3"
            >
              <Link className="w-full" to="/checkout">
                Buy it now
              </Link>
            </button>
            <Button
              onClick={() =>
                addToCart(
                  product.id,
                  product.image,
                  product.title,
                  product.price,
                )
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
  );
};

export default ProductPage;
