import Image from "next/image";
import React from "react";
import pricingImage from "../../../../public/Price.png";
import pricingImage2 from "../../../../public/PriceResponsive.png";
const Pricing = () => {
  return (
    <>
      {" "}
      <div className="relative hidden text-center lg:flex items-center justify-center min-h-[1428px]">
        <Image
          fill
          src={pricingImage}
          alt="Pricing"
          className="object-cover -z-10"
        />
      </div>
      <div className="relative text-center flex lg:hidden justify-center min-h-screen">
        <Image
          fill
          src={pricingImage2}
          alt="Pricing"
          className="object-cover -z-10"
        />
      </div>
    </>
  );
};

export default Pricing;
