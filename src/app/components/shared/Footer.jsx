import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2D2A2B] text-white py-16 px-6 md:px-12 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Description & Social Icons */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Optimal Performance
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Optimal Performance delivers evidence-based, expert-driven
              strategies that empower high performers and organizations to
              achieve performance and wellness results, while providing a
              trusted platform for qualified professionals to share their
              expertise and scale their impact.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Facebook size={16} fill="white" stroke="none" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFD600] via-[#FF0069] to-[#7638FF] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Instagram size={16} color="white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Linkedin size={16} fill="white" stroke="none" />
              </div>
              <div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Contact"].map((link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronRight
                    size={18}
                    className="text-gray-500 group-hover:text-white transition-colors"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Legal</h3>
            <ul className="space-y-4">
              {["Privacy", "Policy", "Terms"].map((link) => (
                <li
                  key={link}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Links with Names */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight">Social Icons</h3>
            <ul className="space-y-4">
              {["Instagram", "Facebook", "LinkedIn", "Twitter (X)"].map(
                (social) => (
                  <li
                    key={social}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <ChevronRight
                      size={18}
                      className="text-gray-500 group-hover:text-white transition-colors"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {social}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-6 text-xs md:text-sm text-gray-400">
          <p>Copyright 2025 fenyx femme</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <span className="hover:text-white cursor-pointer transition-colors">
              Inc Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Legal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
