import Image from "next/image";
import React from "react";
import bg from "../../../public/globalBg.png";
import Sidebar from "../components/chat/SideBar";

const ChatLayout = ({ children }) => {
  return (
    <section className="relative min-h-screen py-5 flex items-start justify-between">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="flex justify-between w-full mx-auto px-4 lg:px-0">
        <nav className="">
          <Sidebar />
        </nav>
        <main className="lg:w-9/12">{children}</main>
      </div>
    </section>
  );
};

export default ChatLayout;
