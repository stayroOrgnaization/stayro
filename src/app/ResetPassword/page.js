"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VerifyPic from "../../../public/VerifyPic.svg";
import LockPic from "../../../public/lockPic.svg";
import { useRef } from "react";
import { useState, useEffect } from "react";

const setPassword = () => {
  // for the code verification focus and move
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

  // countdown
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
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
    <>
      <Navbar />
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="loginVerify-side w-[40%] h-full mt-20 mx-40 ">
          <form className="border border-[#303030] rounded-[20px] w-[450px] h-[470px] mx-10 my-12 py-2 px-8 flex justify-center items-center">
            <div>
              <div className="flex justify-center mt-4">
                <Image
                  src={LockPic}
                  alt="Calendar"
                  width={79}
                  height={79}
                ></Image>
              </div>

              <h2 className=" text-2xl font-bold mt-2"> استعادة كلمة المرور</h2>
              <p className="mt-2 text-[#A2A2A2]">
                أدخل رمز التحقق المرسل على رقم الهاتف التالي
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
                className=" border bg-orange-600 rounded-[12px]  mt-8 mx-6 w-[350px] h-[59px]"
              >
                التالي
              </button>
              <p className="mt-6">هل تراجعت؟ تسجيل الدخول</p>
            </div>
          </form>
        </div>

        <div class="h-[100vh] w-[0.5px] bg-[#303030]"></div>

        <div className="pic side mt-20 mx-20 ">
          <div>
            <h3 className="font-bold text-4xl text-gray-100 text-center ">
              {" "}
              احجز براحة، اختر ستيرو
            </h3>
            <p className="font-normal text-lg text-gray-100 text-center mt-5 ">
              {" "}
              اكتشف تجربة مميزة للحجوزات
            </p>
          </div>
          <div className="mt-20 mx-10">
            <Image
              src={VerifyPic}
              alt="Calendar"
              width={450}
              height={200}
            ></Image>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default setPassword;
