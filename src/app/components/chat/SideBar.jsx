"use client";

import React, { useState } from "react";
import { PlusCircle, MessageSquare, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-[#050505]/80 rounded-md text-white shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
            min-h-screen
          fixed lg:static inset-y-0 left-0 z-50
          w-[280px] border-r border-[#BDB38B]
          flex flex-col p-6 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
           text-white
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-3 border-b border-[#BDB38B] pb-6 mb-6 text-center">
          <h1 className="text-white text-5xl font-mono font-bold tracking-tighter">
            OP Ai
          </h1>
        </div>

        {/* Start New Chat Button */}
        <Link
          href={`/`}
          className="w-full bg-[#2A2A2A] hover:bg-[#333] text-gray-200 py-3 px-4 rounded-lg flex items-center gap-3 transition-colors mb-6 text-sm font-medium"
        >
          <PlusCircle size={18} color="white" />
          Start new chat
        </Link>

        {/* Primary Navigation */}
        <nav className="flex-1 space-y-6">
          <Link
            href={`chat/ai-chat`}
            className="flex items-center gap-3 text-gray-200 px-2 py-2 cursor-pointer hover:text-white transition-colors"
          >
            <MessageSquare size={18} />
            <span className="text-sm">AI chat</span>
          </Link>
        </nav>

        {/* Footer / Profile */}
        <div className="pt-6 space-y-4 mt-auto">
          <div className="pt-8 space-y-2">
            <h3 className="text-white text-sm font-semibold border-b border-[#BDB38B] pb-2">
              Mindset Mantra
            </h3>
            <div className="flex flex-col space-y-4">
              <Link
                href={`chat/journal`}
                className="text-gray-400 text-sm hover:text-white cursor-pointer px-2 transition-colors"
              >
                Journal
              </Link>
              <Link
                href={`chat/internal-challenge`}
                className="text-gray-400 text-sm hover:text-white cursor-pointer px-2 transition-colors border-b border-[#BDB38B] pb-4"
              >
                Internal Challenge
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <Image
                src="https://i.pravatar.cc/150?u=alex"
                alt="Profile"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-white/20"
              />
              <span className="text-gray-200 text-sm">alex_fowler</span>
            </div>
            <ChevronDown
              size={16}
              className="text-gray-500 group-hover:text-white transition-colors"
            />
          </div>

          <button className="w-full bg-[#2D2A2B] hover:bg-[#A89F7A] text-white font-bold py-3 rounded-sm transition-all text-sm">
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
