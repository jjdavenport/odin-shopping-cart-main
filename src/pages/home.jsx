import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Separator from "../components/separator";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Separator className="bg-border" />
        <div className="flex flex-1"></div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
