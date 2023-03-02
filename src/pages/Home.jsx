import Navigation from "../components/Navigation";
import Boutique from "../components/Boutique";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />
        <div className="homeContainer">
          <div className="homeImg">
            <img src="/womanPic.png" alt="" />
            <h1 className="homeTitle">Welcome to Akn Shop</h1>
            <img src="/hommePic.png" alt="" />
          </div>
        </div>
      </div>
      <Boutique />
      <Footer />
    </div>
  );
};

export default Home;
