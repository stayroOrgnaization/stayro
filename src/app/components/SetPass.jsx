"use client";
import { useState, useEffect } from "react";
import "../Styles/globals.css";
import Image from "next/image";
import ResetImg from "../../../public/resetPas.svg";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const SetPass = () => {
  return (
    <>
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="loginVerify-side lg:w-[65%] mt-20  ">
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
          <form className="flex flex-col items-center justify-center border border-[#303030] rounded-[20px] lg:w-[517px] md:w-[517px] h-[390px] mt-10 mb-4 lg:mx-20 md:mx-20 w-[390px]">
            <div>
              <h2 className=" text-2xl font-bold mb-6">كلمة المرور الجديدة </h2>
              <p className="mt-2 text-[#A2A2A2]">انشاء كلمة مرور جديدة</p>
              <div className="password input flex flex-col items-end mt-5">
                <label className="text-right mx-2"> كلمة السر</label>
                <input
                  type="password"
                  name="password"
                  placeholder="كلمة المرور"
                  className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="أعد كتابة كلمة المرور"
                  className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
                />
              </div>
              <div className="flex justify-end mx-6">
                <button
                  type="submit"
                  className="border bg-[#FF5B2D] rounded-[12px]  mt-8  lg:w-[469px] md:w-[469px] w-[270px] h-[50px]"
                >
                  التالي
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>

        <div className="pic side mt-20 mx-20 hidden lg:block">
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
    </>
  );
};

export default SetPass;
