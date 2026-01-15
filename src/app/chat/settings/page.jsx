"use client";
import React, { useState } from "react";
import { Settings, Camera, ChevronDown } from "lucide-react";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    username: "",
    description: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen  text-white p-6 md:p-12 relative overflow-hidden font-sans">
      {/* Topographic Background Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none grayscale"
        style={{
          backgroundImage: "url('/authBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            General Settings
          </h1>
          <div className="bg-[#BDB38B]/20 p-2 rounded-full border border-[#BDB38B]/40">
            <Settings className="text-[#BDB38B] w-6 h-6" />
          </div>
        </div>

        {/* Upload Logo Section */}
        <div className="flex flex-col items-center justify-center mb-12 group">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#BDB38B] flex items-center justify-center cursor-pointer overflow-hidden transition-all hover:border-[#BDB38B]">
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
            />
            <div className="flex flex-col items-center gap-1">
              <Camera className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </div>
          <span className="mt-3 text-sm md:text-base font-medium tracking-wide">
            Upload Logo
          </span>
        </div>

        {/* Form Grid */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="w-full bg-transparent border border-[#BDB38B] rounded-lg py-4 px-4 focus:outline-none focus:border-[#BDB38B] transition-colors placeholder:text-gray-600"
              onChange={handleChange}
            />
          </div>

          {/* Address Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Address</label>
            <input
              type="email"
              name="address"
              placeholder="yourname5584@gmail.com"
              className="w-full bg-transparent border border-[#BDB38B] rounded-lg py-4 px-4 focus:outline-none focus:border-[#BDB38B] transition-colors placeholder:text-gray-600"
              onChange={handleChange}
            />
          </div>

          {/* Username Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="your username"
              className="w-full bg-transparent border border-[#BDB38B] rounded-lg py-4 px-4 focus:outline-none focus:border-[#BDB38B] transition-colors placeholder:text-gray-600"
              onChange={handleChange}
            />
          </div>

          {/* Description Field (Spans 1 row on desktop) */}
          <div className="space-y-2 row-span-2">
            <label className="text-sm font-semibold ml-1">Description</label>
            <textarea
              name="description"
              placeholder="your information here!"
              rows="6"
              className="w-full bg-transparent border border-[#BDB38B] rounded-lg py-4 px-4 focus:outline-none focus:border-[#BDB38B] transition-colors placeholder:text-gray-600 resize-none h-full"
              onChange={handleChange}
            />
          </div>

          {/* Gender Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Gender</label>
            <div className="relative">
              <select
                name="gender"
                className="w-full bg-transparent border border-[#BDB38B] rounded-lg py-4 px-4 focus:outline-none focus:border-[#BDB38B] transition-colors appearance-none text-gray-400"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {/* Save Button (Centered at bottom) */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              className="w-full md:w-[280px] bg-[#BDB38B] hover:bg-[#A89F7A] text-black font-bold py-4 rounded-xl transition-all shadow-lg text-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
