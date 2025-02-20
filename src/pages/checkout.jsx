import CheckoutTable from "../components/checkout-table";
import CheckoutSummary from "../components/checkout-summary";
import useCart from "../hooks/cart-provider";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:flex-row">
        <CheckoutTable cart={cart} />
        <CheckoutSummary />
      </div>
    </>
  );
};

export default Checkout;
