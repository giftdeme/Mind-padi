"use client";
import { useState } from "react";
import "@/app/globals.css";
export default function MindPadiModal() {
  const options = [
    { id: 1, title: "Work Stress", desc: "Managing workplace pressure and finding balance." },
    { id: 2, title: "Creative Burnout", desc: "Break creative blocks and rediscover inspiration." },
    { id: 3, title: "Financial Anxiety", desc: "Navigate financial concerns and regain control." },
    { id: 4, title: "Productivity & Focus", desc: "Boost your concentration and efficiency." },
    { id: 5, title: "Mental Resilience", desc: "Strengthen your mind and cope with life's hurdles." },
    { id: 6, title: "Self-Discovery & Growth", desc: "Achieve personal development and fulfillment." },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-lg w-full">
        
        {/* Modal Header */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
          What brings you to <span className="text-indigo-600 font-bold">MindPadi</span> today?
        </h2>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {options.map((option) => (
            <button
              key={option.id}
              className={`border-2 rounded-lg p-4 text-left ${
                selected === option.id
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-400"
              }`}
              onClick={() => setSelected(option.id)}
            >
              <h3 className="text-gray-900 font-medium">{option.title}</h3>
              <p className="text-sm text-gray-500">{option.desc}</p>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button className="text-gray-600 hover:text-gray-900 font-semibold">← Back</button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              selected !== null
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={selected === null}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
