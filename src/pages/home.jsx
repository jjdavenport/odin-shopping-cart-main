import Product from "../components/product";
import useProducts from "../hooks/products-provider";

const Home = () => {
  const { data } = useProducts();
  return (
    <>
      <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((i) => (
            <Product key={i.id} img={i.image} title={i.title} price={i.price} />
          ))}
      </div>
    </>
  );
};

export default Home;
