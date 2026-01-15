import Image from "next/image";
import React from "react";
import bg from "../../../../public/CTA.png";
import Dot from "../icons/Dot";
import Link from "next/link";
const Cta = () => {
  return (
    <div className="relative text-center flex items-center justify-center min-h-[500px]">
      <Image
        fill
        src={bg}
        alt="bg"
        className="object-cover object-center -z-10"
      />
      <div>
        <span className="head-badge mb-12">
          <Dot /> CTA Section
        </span>
        <h1 className="leading-11 font-semibold text-4xl text-white max-w-[720px] mx-auto mb-10">
          Ready to improve your mental performance?
        </h1>
        <Link href={`/login`}>
          <button className="btn-primary w-[300px] ">Start Subscription</button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
