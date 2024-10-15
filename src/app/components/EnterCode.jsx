"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import VerifyPic from "../../../public/VerifyPic.svg";
import LockPic from "../../../public/lockPic.svg";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+ app router

const Verify = () => {
  const inputRefs = useRef([]);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // Countdown for 2 minutes
  const router = useRouter(); // Initialize useRouter hook

  const moveToNext = (currentIdx) => {
    if (currentIdx < 5 && inputRefs.current[currentIdx].value.length === 1) {
      inputRefs.current[currentIdx + 1].focus();
    }
  };

  const handleBackspace = (currentIdx) => {
    if (currentIdx > 0 && inputRefs.current[currentIdx].value.length === 0) {
      inputRefs.current[currentIdx - 1].focus();
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather the code from input fields
    const verificationCode = inputRefs.current.map((ref) => ref.value).join("");

    // API call to verify the code
    try {
      const response = await fetch(
        "https://api.stayro.com/auth/api/password/verify/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ code: verificationCode }), // Send code as form-data
        }
      );

      if (!response.ok) {
        throw new Error("Invalid code");
      }

      // If successful, redirect to the home page
      router.push("/home");
    } catch (err) {
      setError("رمز التحقق غير صالح"); // Set error message for invalid code
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-FFFFFF mt-0">
        <div className="Verify-side lg:w-[65%] h-full mt-10 lg:mx-40 md:mx-40 ">
          <div className=" lg:hidden mt-20 flex flex-col sm:mx-8 ">
            <h3 className="font-bold text-4xl text-gray-100 text-center">
              {" "}
              احجز براحة، اختر ستيرو
            </h3>
            <p className="font-normal text-lg text-gray-100 text-center mt-5 ">
              {" "}
              اكتشف تجربة مميزة للحجوزات
            </p>
          </div>
          <form
            className="border border-[#303030] rounded-[20px] w-[330px] lg:w-[450px] md:w-[450px] h-[450px] mx-10 my-12 py-2 px-8 flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="flex justify-center mt-4">
                <Image src={LockPic} alt="Lock" width={79} height={79} />
              </div>

              <h2 className="text-2xl font-bold mt-2">رمز التحقق</h2>
              <p className="mt-2 text-[#A2A2A2]">فضلا أدخل رمز التحقق</p>
              <div className="space-x-4">
                {[...Array(6)].map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[idx] = el)}
                    className="w-[35px] h-[40px] text-center text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
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
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <p className="text-[#FF5B2D]">إعادة إرسال رمز التحقق</p>
              <button
                type="submit"
                className="border bg-orange-600 rounded-[12px] mt-8 mx-6 w-[310px] h-[59px]"
              >
                التالي
              </button>
            </div>
          </form>
        </div>

        <div className="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>

        <div className="pic side mt-20 mx-20 hidden lg:block ">
          <div>
            <h3 className="font-bold text-4xl text-gray-100 text-center">
              احجز براحة، اختر ستيرو
            </h3>
            <p className="font-normal text-lg text-gray-100 text-center mt-5">
              اكتشف تجربة مميزة للحجوزات
            </p>
          </div>
          <div className="mt-20 mx-10">
            <Image src={VerifyPic} alt="VerifyPic" width={450} height={200} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Verify;
