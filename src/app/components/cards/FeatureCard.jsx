import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
const FeatureCard = ({ feature }) => {
  return (
    <div className={`${inter.className} bg-[#DBD0A6] rounded-xl p-6 h-46`}>
      <div className="bg-[#8E7D3F] rounded-xl p-0 w-14 h-14 border border-white flex items-center justify-center -mt-14 mb-5 mx-auto">
        <Image
          width={16}
          height={16}
          src={feature.img}
          alt="Feature Icon"
          className="mx-auto"
        />
      </div>
      <h3 className={`text-black font-bold text-base leading-5 mb-1`}>
        {feature.title}
      </h3>
      <p className="leading-5 text-sm text-[#2D2A2B]">{feature.subTitle}</p>
    </div>
  );
};

export default FeatureCard;
