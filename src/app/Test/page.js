import React from "react";
import Image from "next/image";
import Calendar from "../../../public/CalendarPic.png";

export default function Register() {
  return (
    <div className="min-h-screen md:flex-row sm:flex-row lg-flex justify-center justify-center mt-12 ">
      <div className="  text-gray-100  mt-2 md:hidden ">
        <h3 className="font-bold text-2xl text-center">
          احجز براحة، اختر ستيرو
        </h3>
        <p className="font-normal text-lg text-center mt-4">
          اكتشف تجربة مميزة للحجوزات
        </p>
      </div>
      <div className=" login-side flex mx-10 mt-20 lg-w-[65%] h-full lg:flex-col md:w-[80%] sm:w-[80%] ">
        {/* Form container */}
        <div className="relative w-auto">
          <p className="text-red-500 text-center mt-2">hello</p>
          <form className="border border-[#303030] rounded-[20px] lg:w-[40%] h-[100%] md:w-[70%] sm:w-full ">
            <div className="text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول
            </div>
            <div className="telephone input flex flex-col mt-8">
              <label className="text-right mx-2">رقم الهاتف</label>
              <div className="flex justify-end space-x-2 mx-2 w-[90%]">
                <select
                  name="countryCode"
                  className="bg-[#757575] opacity-5 border-[#303030] rounded-[12px] h-10 mt-3 h-[48px] text-gray-100!"
                >
                  <option className="text-gray-100" value="+966">
                    (KSA)
                  </option>
                </select>
                <input
                  className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 w-[340px] h-[48px]"
                  required
                />
              </div>
            </div>
            <div className="password input flex flex-col items-end mt-5 w-[90%]">
              <label className="text-right mx-2">البريد الالكتروني</label>
              <input
                className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-2 w-[390px] h-[48px]"
                required
              />
            </div>
            <div className="password input flex flex-col items-end mt-5  w-[100%]">
              <label className="text-right mx-2">كلمة السر</label>
              <input
                type="password"
                className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-2 w-[390px] h-[48px]"
                required
              />
            </div>
            <div className="text-right mt-5 mx-2 text-orange-500"></div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[90%] border-[#303030] bg-stayro rounded-[12px] mx-2 mt-4 w-[469px] h-12"
              >
                تسجيل الدخول
              </button>
            </div>

            <div className="mt-4 mx-2 mb-4 flex justify-end space-x-2">
              <p>هل لديك حساب جديد؟</p>
            </div>
          </form>
          <div
            className=" w-[504px] h-[538px] bg-left-bottom bg-no-repeat bg-cover "
            style={{
              backgroundImage: `url(${Calendar.src})`, // Correct way to set the background image
            }}
          >
            {/* Your content */}
          </div>
        </div>
      </div>

      {/* Hidden divider on small devices */}
      <div className="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>

      {/* Right side content */}
    </div>
  );
}
