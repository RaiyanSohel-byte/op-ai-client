import React from "react";
import Dot from "../icons/Dot";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Features = () => {
  return (
    <div>
      <span className="head-badge">
        <Dot /> Features
      </span>
      <p
        className={`${inter.className} text-white text-[16px] leading-5 font-medium`}
      >
        Explore the capabilities of our AI coach chatbot, designed to enhance
        your personal and professional growth.
      </p>
    </div>
  );
};

export default Features;
