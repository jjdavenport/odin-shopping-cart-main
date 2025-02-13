import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Separator from "../components/separator";
import Checkbox from "../components/checkbox";
import Quantity from "../components/quantity";
import Footer from "../components/footer";

const Checkout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Separator className="bg-border" />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <span>Checkout</span>
          <div className="flex items-center gap-10">
            <Checkbox />
            <Quantity />
          </div>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Checkout;
