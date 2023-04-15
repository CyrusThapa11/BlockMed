import { useContext } from "react";
import Features from "../../components/Common/Features.js";
import Header from "../../components/Common/Header.js";
import Navbar from "../../components/Common/Navbar.js";
import Offer from "../../components/Common/Offer.js";
import Testimonials from "../../components/Common/Testimonials.js";
import EthContext from "../../contexts/EthContext/EthContext.js";

const Home = () => {
  const GobalState = useContext(EthContext).state;
  console.log("GobalState", GobalState);
  return (
    <>
      <Header />
      <Features />
      <Offer />
      <Testimonials />
    </>
  );
};

export default Home;
