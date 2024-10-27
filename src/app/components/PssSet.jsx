"use client";
import { useState } from "react";
import Link from "next/link";
import EnterPhonePopUp from "./EnterPhonePopUp"; // Your popup component

const PssSet = () => {
  // State to control the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle popup visibility
  const handleForgotPasswordClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsPopupVisible(true); // Show the popup
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="main-dev h-[892px] w-[1440px] flex flex-col items-end">
      {/* Upper section */}
      <div className="h-[61px] w-[1150px] mt-10 flex flex-col items-end">
        <h3 className="text-[#F5F5F5] text-[20px] font-bold text-right">
          إعدادات عامة
        </h3>
        <p className="text-[#A2A2A2] text-[17px] font-normal text-right mt-2">
          إعداد معلومات وبياناتك الشخصية
        </p>
      </div>

      {/* Form and options */}
      <div className="second-container w-[1100px] h-[1156px] flex flex-row mt-10">
        <form className="profile w-[852px] h-[671px]">
          <div className="profile-paragaph w-[800px] h-[47px] flex flex-col items-end">
            <h1 className="text-[#F5F5F5] text-[20px] font-bold text-right">
              تعيين كلمة المرور
            </h1>
            <p className="text-[#A2A2A2] text-[17px] font-normal text-right mt-2">
              إعداد وتعيين كلمة المرور
            </p>
          </div>

          {/* Form */}
          <div className="form-part w-[804px] h-[395px] mt-10 flex flex-col items-end">
            <div className="F.name-Num flex">
              <div className="flex flex-col items-end space-y-2">
                <label>كلمة المرور الحالية</label>
                <input
                  type="password"
                  name="password"
                  className="border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                />
                <Link
                  href="#"
                  className="forgot text-[#FF5B2D]"
                  onClick={handleForgotPasswordClick} // Trigger popup on click
                >
                  هل نسيت كلمة المرور؟
                </Link>
              </div>
            </div>

            {/* New password fields */}
            <div className="Email-Country flex space-x-6 mt-6">
              <div className="flex flex-col items-end space-y-4">
                <label> كلمة المرور الجديدة</label>
                <input
                  className="Email border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  type="password"
                  name="password"
                />
              </div>

              <div className="flex flex-col items-end space-y-4">
                <label> تكرار كلمة المرور الجديدة</label>
                <input
                  className="country border text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-xl w-[386px] h-[48px]"
                  type="password"
                  name="password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="save w-[804px] h-[48px] border border-[#FF5B2D] bg-[#FF5B2D] rounded-xl mt-8"
            >
              حفظ التغيرات
            </button>
          </div>
        </form>

        {/* Sidebar Options */}
        <div className="options w-[240px] h-[435px]">
          <div className="border border-[#303030] w-[240px] h-[45px] rounded-2xl text-center">
            <Link className="text-[#F5F5F5] text-center " href="/Profile">
              الصفحة الشخصية
            </Link>
          </div>
          <div className="border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <p className="mt-3"> تعيين كلمة المرور</p>
          </div>
          <div className="border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            {" "}
            <p className="mt-3">عن ستيرو</p>
          </div>
          <div className="border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <p className="mt-3"> الشروط والأحكام </p>
          </div>
          <div className="border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <p className="mt-3"> سياسات الخصوصية </p>
          </div>
          <div className="border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <p className="mt-3"> الأسئلة الشائعة </p>
          </div>
          <div className="border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <p className="mt-3"> حذف الحساب </p>
          </div>
        </div>
      </div>

      {/* Render the EnterPhonePopUp as a popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1A1A1A] w-[700px] h-[600px] rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            {/* Render the EnterPhonePopUp component */}
            <EnterPhonePopUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default PssSet;
