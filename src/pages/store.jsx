import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Separator from "../components/separator";
import Footer from "../components/footer";

const Store = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Separator className="bg-border" />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Store;
