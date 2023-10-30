import OurServices from "../../Components/OurServices"
import Banner from "../../Components/Banner";
import Brands from "../../Components/Brands";
import Footer from "../../Components/Footer";
import ContactUs from "../../Components/ContactUs"
import "./Home.css";

const Home = () => {
  function handleBrandOnclick(brand) {}
  return (
    <div>
      <Banner />
      <Brands />
      <ContactUs/>
      <OurServices/>
      <Footer />
    </div>
  );
};

export default Home;
