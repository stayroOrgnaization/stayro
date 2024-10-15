"use client";
// this page ask users to enter their phone number to reset password
import { useState } from "react";
import "../Styles/globals.css";
import Image from "next/image";
import ResetImg from "../../../public/resetPas.svg";
import Saudi from "../../../public/Saudi.svg";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const ReSetPasPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Initialize router

  // Handle phone number change
  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    // Create FormData for the request
    const formData = new FormData();
    formData.append("phone_number", phoneNumber);
    formData.append("method", "sms");
    formData.append("role", "customer");

    try {
      // Send POST request
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/password/reset/",
        {
          method: "POST",
          body: formData,
        }
      );

      // Check if the response is ok
      if (response.ok) {
        // Redirect to ResetPasswordCode page
        router.push("/ResetPasswordCode");
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error response:", errorData);
        if (errorData.message) {
        } else {
          setErrorMessage("حدث خطأ، حاول لاحقا");
        }
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
      setErrorMessage("حدث خطأ حاول لاحقا.");
    }
  };

  return (
    <>
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="loginVerify-side w-[40%] h-full mt-20 mx-40 ">
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
            onSubmit={handleSubmit}
            className="border border-[#303030] rounded-[20px] w-[450px] h-[450px] mx-10 my-12 mt-8 py-2 px-8 flex justify-center items-center"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">استعادة كلمة المرور</h2>
              <p className="mt-2 text-[#A2A2A2]">
                أدخل رقم الجوال المسجل لارسال رمز تحقق
              </p>
              <label className="text-right mx-2"> رقم الجوال</label>
              <div className="flex justify-end space-x-2 mx-6">
                <div className="flex items-center justify-center border-[#303030] bg-[#FFFFFF0D] h-[40px] w-[86px] rounded-[12px] mt-3 ">
                  <Image
                    src={Saudi}
                    alt="KSA"
                    width={24} // Decrease the width for better alignment
                    height={24}
                    className="rounded "
                  />
                  <input
                    type="text"
                    value="+966"
                    readOnly
                    className="bg-transparent text-[#A2A2A2]  w-[34px] h-[24px] text-center"
                  />
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3  lg:w-[300px] md:w-[300px] w-[200px] h-[40px]"
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-center mt-2">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="border bg-orange-600 rounded-[12px] mt-8 mx-6 w-[400px] h-[59px]"
              >
                التالي
              </button>
            </div>
          </form>
        </div>

        <div className="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>

        <div className="pic side mt-20 mx-20 hidden lg:block ">
          <div>
            <h3 className="font-bold text-4xl text-gray-100 text-center ">
              احجز براحة، اختر ستيرو
            </h3>
            <p className="font-normal text-lg text-gray-100 text-center mt-5 ">
              اكتشف تجربة مميزة للحجوزات
            </p>
          </div>
          <div className="mt-20 mx-10">
            <Image
              src={ResetImg}
              alt="Reset Password"
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

export default ReSetPasPhone;
