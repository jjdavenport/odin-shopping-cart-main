import { useLocation } from "react-router";
import Product from "../components/product";
import useProducts from "../hooks/products-provider";
import useCart from "../hooks/cart-provider";

const Store = () => {
  const { data } = useProducts();
  const { addToCart } = useCart();
  const location = useLocation();

  let category = location.pathname.split("/")[2];

  if (category === "mens&clothing") category = "men's clothing";
  if (category === "womens&clothing") category = "women's clothing";

  const categoryProducts = data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  );

  return (
    <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {categoryProducts.map((i) => (
        <Product
          href={`/product/${i.id}`}
          key={i.id}
          img={i.image}
          title={i.title}
          price={i.price}
          onClick={() => addToCart(i.image, i.title, i.price)}
        />
      ))}
    </div>
  );
};

export default Store;
