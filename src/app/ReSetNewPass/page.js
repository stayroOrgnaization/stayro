"use client";
import { useState, useEffect } from "react";
import "../Styles/globals.css";
import Image from "next/image";
import ResetImg from "../../../public/resetPas.svg";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const ReSetPassword = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="loginVerify-side w-[40%] h-full mt-20 mx-40 ">
          <form className="border border-[#303030] rounded-[20px] w-[450px] h-[450px] mx-10 my-12 py-2 px-8 flex justify-center items-center">
            <div>
              <h2 className=" text-2xl font-bold mb-6">كلمة المرور الجديدة </h2>
              <p className="mt-2 text-[#A2A2A2]">انشاء كلمة مرور جديدة</p>
              <div className="password input flex flex-col items-end mt-5">
                <label className="text-right mx-2"> كلمة السر</label>
                <input
                  type="password"
                  name="password"
                  placeholder="كلمة المرور"
                  className="text-right border bg-[#757575] opacity-5 placeholder-white text-white-200 rounded-[12px] mt-3 mx-6 w-[400px] h-[48px]"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="أعد كتابة كلمة المرور"
                  className="text-right border bg-[#757575] opacity-5 placeholder-white rounded-[12px] mt-3 mx-6 w-[400px] h-[48px]"
                  required
                />
              </div>
              <button
                type="submit"
                className=" border bg-orange-600 rounded-[12px]  mt-8 mx-6 w-[400px] h-[59px]"
              >
                التالي
              </button>
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
              src={ResetImg}
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

export default ReSetPassword;
