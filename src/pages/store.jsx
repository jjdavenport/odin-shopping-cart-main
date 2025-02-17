import Product from "../components/product";
import useProducts from "../hooks/products-provider";
import useToasts from "../hooks/toast-provider";

const Store = () => {
  const { data } = useProducts();
  const { addToCart } = useToasts();

  const category = data.category.filter("men's clothing");

  return (
    <>
      <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {category &&
          category.map((i) => (
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
    </>
  );
};

export default Store;
