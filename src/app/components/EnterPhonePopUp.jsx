"use client";
import { useState } from "react";
import "../Styles/globals.css";
import Image from "next/image";
import Saudi from "../../../public/Saudi.svg";
import EnterCodePopUp from "./EnterCodPopUp";

const EnterPhonePopUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showEnterCodePopUP, setshowEnterCodePopUP] = useState(false);
  const closePopup = () => {
    setshowEnterCodePopUP(false);
  };

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
        // Show the ResetPasswordCode pop-up
        setshowEnterCodePopUP(true);
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error response:", errorData);
        if (errorData.message) {
          setErrorMessage(errorData.message);
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
      {showEnterCodePopUP ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1A1A1A] w-[700px] h-[600px] rounded-lg shadow-lg relative flex justify-center items-center ">
            <button
              onClick={closePopup}
              className="absolute top-2 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <EnterCodePopUp />
          </div>
        </div>
      ) : (
        <div className="flex justify-center bg-FFFFFF mt-0 ">
          <div className="mt-10">
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
                      width={24}
                      height={24}
                      className="rounded "
                    />
                    <input
                      type="text"
                      value="+966"
                      readOnly
                      className="bg-transparent text-[#A2A2A2] w-[34px] h-[24px] text-center"
                    />
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 lg:w-[300px] md:w-[300px] w-[200px] h-[40px]"
                    required
                  />
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-center mt-2">
                    {errorMessage}
                  </p>
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
        </div>
      )}
    </>
  );
};

export default EnterPhonePopUp;
