import React from "react";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Pricing from "../components/home/Pricing";
import Cta from "../components/home/Cta";
import TestimonialsSection from "../components/home/Testimonial";
import FAQSection from "../components/home/FaqSection";

const Home = () => {
  return (
    <div>
      {" "}
      <Banner />
      <Features />
      <Pricing />
      <TestimonialsSection />
      <FAQSection />
      <Cta />
    </div>
  );
};

export default Home;
