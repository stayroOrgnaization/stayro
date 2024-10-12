"use client";
import { useState } from "react";
import "../Styles/globals.css";
import Image from "next/image";
import ResetImg from "../../../public/resetPas.svg";
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
          setErrorMessage(errorData.message); // Display specific error message
        } else {
          setErrorMessage("An error occurred. Please try again."); // Generic error message
        }
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="loginVerify-side w-[40%] h-full mt-20 mx-40 ">
          <form
            onSubmit={handleSubmit} // Add onSubmit handler
            className="border border-[#303030] rounded-[20px] w-[450px] h-[450px] mx-10 my-12 mt-8 py-2 px-8 flex justify-center items-center"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">استعادة كلمة المرور</h2>
              <p className="mt-2 text-[#A2A2A2]">
                أدخل رقم الجوال المسجل لارسال رمز تحقق
              </p>
              <label className="text-right mx-2"> رقم الجوال</label>
              <div className="flex justify-end space-x-2 mx-6">
                <select
                  name="countryCode"
                  className="bg-[#757575] opacity-5 border-[#303030] rounded-[12px] h-10 mt-3 h-[48px] text-gray-100!"
                >
                  <option className="text-gray-100" value="+966">
                    (KSA)
                  </option>
                </select>
                <input
                  type="tel"
                  value={phoneNumber} // Bind value to state
                  onChange={handleInputChange} // Handle input change
                  className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 w-[340px] h-[48px]"
                  required // Ensure input is required
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

        <div className="h-[100vh] w-[0.5px] bg-[#303030]"></div>

        <div className="pic side mt-20 mx-20 ">
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
