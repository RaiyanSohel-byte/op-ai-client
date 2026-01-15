"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "The program's foundation in exercise science and its commitment to individualized training plans are truly impressive. It's a comprehensive approach that I wholeheartedly endorse.",
    name: "Mickael grants",
    role: "CEO of Apples to Oranges",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    text: "The program's foundation in exercise science and its commitment to individualized training plans are truly impressive. It's a comprehensive approach that I wholeheartedly endorse.",
    name: "Mickael grants",
    role: "CEO of Apples to Oranges",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    text: "The program's foundation in exercise science and its commitment to individualized training plans are truly impressive. It's a comprehensive approach that I wholeheartedly endorse.",
    name: "Mickael grants",
    role: "CEO of Apples to Oranges",
    image: "https://i.pravatar.cc/150?u=3",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getPosition = (i) => {
    // returns -1 = left, 0 = center, 1 = right, 2+ = hidden
    if (i === index) return 0;
    if (i === (index - 1 + testimonials.length) % testimonials.length)
      return -1;
    if (i === (index + 1) % testimonials.length) return 1;
    return 2; // hidden
  };

  return (
    <section className="relative bg-[#050505] py-20 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="relative z-10 max-w-7xl w-full">
        {/* Badge Header */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 px-4 py-1.5">
            <span className="head-badge">Testimonials / Expert Backing</span>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative h-[350px] md:h-[400px] flex items-center justify-center">
          {testimonials.map((item, i) => {
            const pos = getPosition(i);

            if (pos === 2) return null; // hide far items

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, x: pos * 150 }}
                animate={{
                  opacity: pos === 0 ? 1 : 0.5,
                  scale: pos === 0 ? 1 : 0.85,
                  x: pos * 150,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`absolute p-8 rounded-xl border border-white/5 bg-[#1A242B]/80 backdrop-blur-sm flex flex-col justify-between w-full max-w-md md:max-w-lg`}
                style={{ zIndex: pos === 0 ? 10 : 5 }}
              >
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  "{item.text}"
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <Image
                      width={48}
                      height={48}
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full grayscale object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-[#BDB38B] font-semibold text-sm">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-xs">{item.role}</p>
                    </div>
                  </div>

                  {/* Star Rating Pill */}
                  <div className="flex bg-[#BDB38B] px-2 py-1 rounded-full gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#4A442E" color="#4A442E" />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-[#BDB38B]/40 text-[#BDB38B] hover:bg-[#BDB38B] hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-[#BDB38B]/40 text-[#BDB38B] hover:bg-[#BDB38B] hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
