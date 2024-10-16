"use client"; // Mark this as a Client Component

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LockPic from "../../../public/lockPic.svg";

const VerifyForm = ({ initialTimeLeft }) => {
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

  // Countdown logic
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <form className="border border-[#303030] rounded-[20px] w-[450px] h-[450px] mx-10 my-12 py-2 px-8 flex justify-center items-center">
      <div>
        <div className="flex justify-center mt-4">
          <Image src={LockPic} alt="Calendar" width={79} height={79} />
        </div>

        <h2 className="text-2xl font-bold mt-2">رمز التحقق</h2>
        <p className="mt-2 text-[#A2A2A2]">
          فضلا أدخل رمز التحقق المرسل على
        </p>
        <div className="space-x-4">
          {[...Array(4)].map((_, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[idx] = el)}
              className="w-[55px] h-[40px] text-center text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              onInput={() => moveToNext(idx)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleBackspace(idx);
                }
              }}
            />
          ))}
        </div>

        <div className="text-2xl text-white-600 mt-6">
          {formatTime(timeLeft)}
        </div>
        <p className="text-[#FF5B2D]">إعادة إرسال رمز التحقق</p>
        <button
          type="submit"
          className="border bg-orange-600 rounded-[12px] mt-8 mx-6 w-[400px] h-[59px]"
        >
          التالي
        </button>
      </div>
    </form>
  );
};

export default VerifyForm;
