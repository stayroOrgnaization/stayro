"use client";

import { useRef } from "react";

export default function Home() {
  const inputRefs = useRef([]);

  const moveToNext = (currentIdx) => {
    if (currentIdx < 3 && inputRefs.current[currentIdx].value.length === 1) {
      inputRefs.current[currentIdx + 1].focus();
    }
  };

  const handleBackspace = (currentIdx) => {
    if (currentIdx > 0 && inputRefs.current[currentIdx].value.length === 0) {
      inputRefs.current[currentIdx - 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex space-x-4">
        {[...Array(4)].map((_, idx) => (
          <input
            key={idx}
            type="text"
            maxLength="1"
            ref={(el) => (inputRefs.current[idx] = el)}
            className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onInput={() => moveToNext(idx)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handleBackspace(idx);
              }
            }}
          />
        ))}
      </form>
    </div>
  );
}
