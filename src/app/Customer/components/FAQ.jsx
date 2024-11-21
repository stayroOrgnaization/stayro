// components/FaqList.js
"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Img from "../../../../public/image.png";

export default function FaqList() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await fetch("https://api.stayro.com/ar/faq/api/faq/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFaqData(data.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFAQ();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-between w-[1400x] h-[3000px] mt-10">
        <div className="pic w-[1000px] h-[2900px] flex flex-col  mt-20 mx-40">
          <div className="pic flex flex-col items-center">
            {/* <Image
              src={Logo}
              alt="Streo"
              width={100}
              height={100}
              className="rounded"
            /> */}
            <h1 className="font-bold text-[44px] mt-4"> الأسئلة الشائعة </h1>
          </div>
          <div className="content mt-10 flex flex-col items-end ">
            <div className="head  flex gap-2">
              <p className=" font-bold text-[18px]"> الأسئلة العامة عن ستيرو</p>
              <Image
                src={Img}
                alt="Streo"
                className="rounded w-[14px] h-[10px] mt-[5px]"
              />
            </div>
            <div className="mt-6">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  style={{ marginBottom: "20px" }}
                  className="text-right"
                >
                  <div className="flex justify-end gap-2">
                    <h2> {item.question_ar} </h2>
                    <span className="w-[10px] h-[10px] bg-white rounded-full mt-1"></span>
                  </div>
                  <div className="mt-2">
                    <p>{item.answer_ar}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="options  w-[240px] h-[240px]">
          <div className="border border-[#303030] w-[240px] h-[45px] mt-6 rounded-2xl">
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
      <Footer />
    </>
  );
}
