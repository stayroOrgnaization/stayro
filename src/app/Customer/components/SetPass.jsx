"use client";
import { useState } from "react";
import "../../globals.css";
import Image from "next/image";
import ResetImg from "../../../../public/resetPas.svg";
import { authStore } from "../../../stores/auth";
import { useRouter } from "next/navigation";

const SetPass = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("كلمتا المرور غير متطابقتين");
      return;
    }

    // Log phone number and otp_token to verify their values
    console.log("Phone Number:", authStore.formData.phone);
    console.log("OTP Token:", authStore.formData.otp_token);
    console.log("email:", authStore.formData.email);
    console.log("authStore formData:", { ...authStore.formData });

    // Create FormData to send to the API
    const dataToSend = new FormData();
    dataToSend.append("phone_number", authStore.formData.phone);
    dataToSend.append("otp_token", authStore.formData.otp_token);
    dataToSend.append("role", authStore.formData.role);
    dataToSend.append("password", password);
    dataToSend.append("confirm_password", confirmPassword);

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/password/set/",
        {
          method: "POST",
          body: dataToSend,
        }
      );

      if (response.ok) {
        console.log("Password set successfully!");
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("API Error Response:", errorData); // Log the full error response
        setErrorMessage(errorData.message || "خطأ في تعيين كلمة المرور");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("حدث خطأ، يرجى المحاولة مرة أخرى");
    }
  };

  return (
    <div className="flex justify-center bg-FFFFFF mt-0 ">
      <div className="loginVerify-side lg:w-[65%] mt-20  ">
        <div className=" lg:hidden mt-20 flex flex-col sm:mx-8 ">
          <h3 className="font-bold text-4xl text-gray-100 text-center">
            احجز براحة، اختر ستيرو
          </h3>
          <p className="font-normal text-lg text-gray-100 text-center mt-5 ">
            اكتشف تجربة مميزة للحجوزات
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center border border-[#303030] rounded-[20px] lg:w-[517px] md:w-[517px] h-[390px] mt-10 mb-4 lg:mx-20 md:mx-20 w-[390px]"
        >
          <div>
            <h2 className=" text-2xl font-bold mb-6">كلمة المرور الجديدة</h2>
            <p className="mt-2 text-[#A2A2A2]">انشاء كلمة مرور جديدة</p>
            <div className="password input flex flex-col items-end mt-5">
              <label className="text-right mx-2">كلمة السر</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
                required
              />
              <label className="text-right mx-2">أعد كتابة كلمة المرور</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="أعد كتابة كلمة المرور"
                className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
                required
              />
              {errorMessage && (
                <p className="text-red-500 mt-2 text-right">{errorMessage}</p>
              )}
            </div>
            <div className="flex justify-end mx-6">
              <button
                type="submit"
                className="border bg-[#FF5B2D] rounded-[12px] mt-8 lg:w-[469px] md:w-[469px] w-[270px] h-[50px]"
              >
                التالي
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>

      <div className="pic side mt-20 mx-20 hidden lg:block">
        <div>
          <h3 className="font-bold text-4xl text-gray-100 text-center ">
            احجز براحة، اختر ستيرو
          </h3>
          <p className="font-normal text-lg text-gray-100 text-center mt-5 ">
            اكتشف تجربة مميزة للحجوزات
          </p>
        </div>
        <div className="mt-20 mx-10">
          <Image src={ResetImg} alt="Calendar" width={450} height={200} />
        </div>
      </div>
    </div>
  );
};

export default SetPass;
