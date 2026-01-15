import React from "react";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Pricing from "../components/home/Pricing";
import Cta from "../components/home/Cta";

const Home = () => {
  return (
    <div>
      {" "}
      <Banner />
      <Features />
      <Pricing />
      <Cta />
    </div>
  );
};

export default Home;
