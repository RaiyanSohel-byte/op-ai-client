import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50 flex items-center justify-between max-w-7xl mx-auto py-12 px-4 lg:px-0">
      <Image
        height={60}
        width={57}
        src={logo}
        alt="logo"
        className="h-10 w-10 lg:h-15 lg:w-15"
      />
      <div className="hidden lg:flex items-center gap-9">
        <Link href={`/`} className="text-white">
          Home
        </Link>
        <Link href={`/coach`} className="text-white">
          Coach
        </Link>
        <Link href={`/login`} className="btn-primary">
          Start Subscription
        </Link>
      </div>
      <div className="lg:hidden">
        {" "}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
