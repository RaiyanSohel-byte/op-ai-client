"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "1. How is my data protected?",
    answer:
      "Your privacy is very important. Be aware that you data and chat history are private. The OP Mental Performance Ai Coach does not store any of your data in the cloud. Additionally, the app was designed to only store minimal data necessary to help you gain the most value from the app. All data stored is done so locally on your device.",
  },
  {
    question: "2. Can I cancel anytime?",
    answer:
      "Yes, you can manage your subscription through your account settings and cancel at any time without hidden fees.",
  },
  {
    question: "3. Does the AI replace human coaching?",
    answer:
      "Our AI is designed to supplement human coaching by providing 24/7 support and data-driven insights, not to replace the personal connection of a human coach.",
  },
  {
    question: "4. What genres or styles does it support?",
    answer:
      "The platform supports a wide range of performance styles and genres tailored to your specific mental performance needs.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#050505] py-24 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Topographic Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/authBG.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-medium text-center mb-16 tracking-tight">
          Frequently asked <span className="text-[#EAB308]">questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`border border-[#BDB38B]/20 rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "bg-[#121212] border-[#BDB38B]/40" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white text-xl font-medium">
                    {item.question}
                  </span>
                  <div className="text-gray-400">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[#BDB38B]/70 leading-relaxed text-sm md:text-base border-t border-[#BDB38B]/10 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
