"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="cursor-pointer relative">
      {openMenu ? (
        <ImCancelCircle
          size={24}
          color="white"
          onClick={() => setOpenMenu(false)}
        />
      ) : (
        <GiHamburgerMenu
          size={24}
          color="white"
          onClick={() => setOpenMenu(true)}
        />
      )}
      {openMenu && (
        <div className="absolute top-5 right-5 bg-black border border-gray-300 text-white p-4 rounded-xl font-bold">
          <div className="flex flex-col">
            <Link href="/">Home</Link>

            <Link href="/coach">Coach</Link>
          </div>
          <div className="mt-5 flex gap-4">
            <Link href="/login" className="btn-primary text-black text-center">
              Start Subscription
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
