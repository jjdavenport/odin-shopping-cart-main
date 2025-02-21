import CheckoutTable from "../components/checkout-table";
import CheckoutSummary from "../components/checkout-summary";
import useCart from "../hooks/cart-provider";

const Checkout = () => {
  const { cart } = useCart();

  const total = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:flex-row">
        <CheckoutTable cart={cart} />
        <CheckoutSummary total={total} />
      </div>
    </>
  );
};

export default Checkout;
