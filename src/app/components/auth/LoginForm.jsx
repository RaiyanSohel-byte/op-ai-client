"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="font-sans relative lg:w-[580px] px-10 mx-auto border border-[#A89F7A] py-15 rounded-[10px]">
      <div className="z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-white text-4xl font-semibold mb-2 tracking-tight">
            Login
          </h1>
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link
              href={`/register`}
              className="text-gray-300 underline cursor-pointer hover:text-white"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-[#BDB38B] hover:bg-[#A89F7A] text-[#050505] font-medium py-3 px-4 rounded-md transition-colors mb-8">
          <Image
            width={20}
            height={20}
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-gray-700 flex-grow"></div>
          <span className="text-gray-500 text-xs font-bold tracking-widest">
            OR
          </span>
          <div className="h-[1px] bg-gray-700 flex-grow"></div>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Email Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none border-r border-gray-700 pr-3 mr-3">
              <Mail className="text-gray-400 w-5 h-5" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border text-white pl-16 pr-4 py-4 rounded-lg focus:outline-none border-[#BDB38B] transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none border-r border-gray-700 pr-3 mr-3">
              <Lock className="text-gray-400 w-5 h-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border text-white pl-16 pr-12 py-4 rounded-lg focus:outline-none border-[#BDB38B] transition-all placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-gray-600 text-sm hover:text-gray-400 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="w-full bg-[#BDB38B] hover:bg-[#A89F7A] text-[#050505] font-bold py-4 rounded-lg transition-all mt-4">
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm tracking-wide">
            Privacy Policy and Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
