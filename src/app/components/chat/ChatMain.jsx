"use client";

import React from "react";
import { Settings, Paperclip, ArrowUp } from "lucide-react";
import Image from "next/image";
import waterMark from "../../../../public/waterLogo.png";
import { League_Gothic } from "next/font/google";
import Link from "next/link";
const gothic = League_Gothic({ subsets: ["latin"] });
const ChatMain = () => {
  return (
    <main className="flex-1 flex flex-col relative min-h-screen">
      {/* Top Header */}
      <header className="flex justify-between items-center p-6 relative z-10">
        {/* Right Icon */}
        <div className="ml-auto">
          <Link href={`/chat/settings`}>
            {" "}
            <Settings
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              size={24}
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {/* Large Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            width={320}
            height={320}
            src={waterMark}
            alt="Watermark"
            className="w-80 md:w-[450px]"
          />
        </div>

        <div
          className={`${gothic.className} relative z-10 text-center space-y-4`}
        >
          <h2 className={` text-white text-5xl md:text-7xl font-bold `}>
            Start a New Chat
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl font-medium pt-8">
            What can I help with?
          </p>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 md:p-12 w-full max-w-5xl mx-auto relative z-10">
        <div className="relative flex items-center bg-[#1A1A1A] rounded-2xl border border-white/5 p-2">
          <input
            type="text"
            placeholder="Message ...."
            className="flex-1 bg-transparent border-none text-white px-4 py-3 focus:outline-none placeholder:text-gray-500"
          />
          <div className="flex items-center gap-2 pr-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Paperclip size={20} />
            </button>
            <button className="bg-[#BDB38B] p-2 rounded-xl text-black hover:bg-[#A89F7A] transition-all">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatMain;
