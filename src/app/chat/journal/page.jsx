"use client";

import React from "react";
import { ArrowLeft, ChevronDown, Trash2 } from "lucide-react";

const entries = [
  { id: "#JE-001", desc: "Type your Goals..........", date: "", action: false },
  {
    id: "#JE-002",
    desc: "Project Ideas for Website Redesign",
    date: "Aug 19, 2023",
    action: true,
  },
  {
    id: "#JE-003",
    desc: "Weekly Goals and Priorities",
    date: "Aug 15, 2023",
    action: true,
  },
  {
    id: "#JE-004",
    desc: "Meeting Notes with Marketing Team",
    date: "Aug 12, 2023",
    action: true,
  },
  {
    id: "#JE-005",
    desc: "Personal Reflections on Recent Changes",
    date: "Aug 10, 2023",
    action: true,
  },
  {
    id: "#JE-006",
    desc: 'Book Notes: "Atomic Habits"',
    date: "Aug 08, 2023",
    action: true,
  },
  {
    id: "#JE-007",
    desc: "Monthly Review: July 2023",
    date: "Aug 05, 2023",
    action: true,
  },
  {
    id: "#JE-008",
    desc: "Travel Plans for September Vacation",
    date: "Aug 02, 2023",
    action: true,
  },
];

const categories = [
  { label: "Personal Win", count: 10, color: "bg-white" },
  { label: "Personal Challenge", count: 8, color: "bg-gray-600" },
  { label: "Professional Win", count: 4, color: "bg-[#BDB38B]" },
  { label: "Professional Challenge", count: 2, color: "bg-[#5B543D]" },
];

const statistics = [
  { label: "Total Entries", value: 24, percent: 100 },
  { label: "This Month", value: 8, percent: 33 },
  { label: "Last Week", value: 5, percent: 20 },
];

const JournalDashboard = () => {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 relative overflow-hidden font-sans">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none grayscale"
        style={{
          backgroundImage: "url('/authBG.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <Header />

        {/* Filters */}
        <Filters />

        {/* Table */}
        <JournalTable entries={entries} />

        {/* Bottom Section */}
        <BottomSection categories={categories} statistics={statistics} />
      </div>
    </div>
  );
};

export default JournalDashboard;

const Header = () => (
  <div className="flex items-center mb-12">
    <button className="p-2 border border-gray-800 rounded-md hover:bg-white/5 transition-colors">
      <ArrowLeft size={20} className="text-gray-400" />
    </button>
    <h1 className="flex-1 text-center text-4xl md:text-5xl font-bold tracking-tight mr-10">
      Journal Entries Management
    </h1>
  </div>
);

const Filters = () => (
  <div className="flex justify-between items-center mb-6">
    <div className="bg-[#1A1A1A] px-4 py-2 rounded-md border border-white/5 text-sm">
      Your Journal Entries
    </div>
    <div className="relative group">
      <button className="bg-[#1A1A1A] px-4 py-2 rounded-md border border-white/5 text-sm flex items-center gap-2 hover:border-[#BDB38B]/50 transition-colors">
        All Categories <ChevronDown size={16} />
      </button>
    </div>
  </div>
);

const JournalTable = ({ entries }) => (
  <>
    {/* Table Header */}
    <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#1A1A1A] rounded-t-xl border-x border-t border-white/5 text-gray-400 font-medium text-sm md:text-base">
      <div className="col-span-2">Entry ID</div>
      <div className="col-span-6">Description</div>
      <div className="col-span-3 text-right md:text-left">Created Date</div>
      <div className="col-span-1 text-right">Actions</div>
    </div>

    {/* Entries */}
    <div className="space-y-3 mt-4 mb-12">
      {entries.map((entry, i) => (
        <div
          key={i}
          className="grid grid-cols-12 gap-4 items-center px-6 py-4 bg-[#0F0F0F] border border-white/5 rounded-xl hover:border-[#BDB38B]/30 transition-all group"
        >
          <div className="col-span-2 text-[#BDB38B] font-bold text-xs md:text-sm">
            {entry.id}
          </div>
          <div className="col-span-6 text-gray-300 text-sm truncate">
            {entry.desc}
          </div>
          <div className="col-span-3 text-gray-400 text-xs md:text-sm">
            {entry.date}
          </div>
          <div className="col-span-1 flex justify-end">
            {entry.action && (
              <Trash2
                size={18}
                className="text-red-500 cursor-pointer hover:scale-110 transition-transform"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </>
);

const BottomSection = ({ categories, statistics }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 px-4">
    {/* Categories */}
    <div>
      <h3 className="text-lg font-semibold mb-6">Categories</h3>
      <div className="space-y-4 max-w-xs">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-sm font-medium"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${cat.color}`} />
              <span className="text-gray-300">{cat.label}</span>
            </div>
            <span className="text-gray-400">{cat.count}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Statistics */}
    <div>
      <h3 className="text-lg font-semibold mb-6">Statistics</h3>
      <div className="space-y-8">
        {statistics.map((stat, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-medium text-gray-300">
                {stat.label}
              </span>
              <span className="text-sm text-gray-400">{stat.value}</span>
            </div>
            <div className="h-2 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BDB38B] rounded-full transition-all duration-1000"
                style={{ width: `${stat.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
