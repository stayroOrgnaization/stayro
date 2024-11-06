"use client";
import Image from "next/image";
import VerifyPic from "../../../public/VerifyPic.svg";
import LockPic from "../../../public/lockPic.svg";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authStore } from "../../stores/auth";

const Verify = () => {
  const router = useRouter();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill("")); // Array to hold OTP values
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(
        () => setTimeLeft((prev) => prev - 1),
        1000
      );
      return () => clearInterval(intervalId);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleInput = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleResendCode = () => {
    if (canResend) {
      router.push("/ResetPasswordCode");
      // Logic to resend the verification code
      console.log("Resending verification code...");
      // Reset countdown
      setTimeLeft(120);
      setCanResend(false); // Disable resend link
      // Restart the countdown
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId); // Clear interval when countdown reaches zero
            setCanResend(true); // Allow resend link when countdown reaches zero
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId); // Clear interval on unmount
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Phone Number:", authStore.formData.phone);
    const otpToken = otp.join("");
    authStore.setFormData("otp_token", otpToken);
    console.log(
      "OTP Token being set in authStore:",
      authStore.formData.otp_token
    );

    const dataToSend = new FormData();
    dataToSend.append("phone_number", authStore.formData.phone || "");
    dataToSend.append("role", authStore.formData.role || "");
    dataToSend.append("otp_token", otpToken);

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/password/verify/",
        {
          method: "POST",
          body: dataToSend, // Use FormData here
        }
      );

      console.log("Response Status:", response.status);

      if (response.ok) {
        // Since we expect Form Data, we can handle the response as needed
        const responseText = await response.text(); // Read response as text

        // If the response is expected to have some data, handle it accordingly
        if (responseText) {
          console.log("Verification successful! Response:", responseText);
        }

        router.push("/SetNewPass"); // Navigate to SetNewPass regardless of response content
      } else {
        const errorText = await response.text(); // Read the error response as text
        console.error("Verification failed:", errorText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-FFFFFF mt-0">
      <div className="loginVerify-side lg:w-[65%] h-full mt-10 lg:mx-40 md:mx-40">
        <div className="lg:hidden mt-20 flex flex-col sm:mx-8">
          <h3 className="font-bold text-4xl text-gray-100 text-center">
            احجز براحة، اختر ستيرو
          </h3>
          <p className="font-normal text-lg text-gray-100 text-center mt-5">
            اكتشف تجربة مميزة للحجوزات
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-[#303030] rounded-[20px] w-[330px] lg:w-[450px] md:w-[450px] h-[450px] mx-10 my-12 py-2 px-8 flex justify-center items-center"
        >
          <div>
            <div className="flex justify-center mt-4">
              <Image src={LockPic} alt="Calendar" width={79} height={79} />
            </div>
            <h2 className="text-2xl font-bold mt-2">رمز التحقق</h2>
            <p className="mt-2 text-[#A2A2A2] text-sm">
              فضلا أدخل رمز التحقق المرسل على{" "}
              {authStore.formData.phone
                ? "*".repeat(authStore.formData.phone.length - 2) +
                  authStore.formData.phone.slice(-2)
                : "رقم غير صالح"}
            </p>
            <div className="space-x-4">
              {otp.map((_, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[idx] = el)}
                  value={otp[idx]}
                  onChange={(e) => handleInput(idx, e.target.value)}
                  className="w-[35px] h-[40px] text-center text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                  onKeyDown={(e) =>
                    e.key === "Backspace" &&
                    idx > 0 &&
                    inputRefs.current[idx - 1].focus()
                  }
                />
              ))}
            </div>
            <div className="text-2xl text-white-600 mt-6">
              {formatTime(timeLeft)}
            </div>
            <a
              href="#"
              onClick={handleResendCode}
              className={`text-[#FF5B2D] cursor-pointer ${
                canResend ? "" : "opacity-50 cursor-not-allowed"
              }`}
            >
              إعادة إرسال رمز التحقق
            </a>
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

      <div className="pic side mt-20 mx-20 hidden lg:block">
        <h3 className="font-bold text-4xl text-gray-100 text-center">
          احجز براحة، اختر ستيرو
        </h3>
        <p className="font-normal text-lg text-gray-100 text-center mt-5">
          اكتشف تجربة مميزة للحجوزات
        </p>
        <div className="mt-20 mx-10">
          <Image src={VerifyPic} alt="Calendar" width={450} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Verify;
