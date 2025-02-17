import Product from "../components/product";
import useProducts from "../hooks/products-provider";
import useToasts from "../hooks/toast-provider";

const Home = () => {
  const { data } = useProducts();
  const { addToCart } = useToasts();
  return (
    <>
      <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((i) => (
            <Product
              href={`/product/${i.id}`}
              key={i.id}
              img={i.image}
              title={i.title}
              price={i.price}
              state={{ product: i }}
              onClick={() => addToCart(i.image, i.title, i.price)}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
