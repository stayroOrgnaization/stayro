"use client";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img from "../../../../public/image.png";
import { useEffect, useState } from "react";
import Link from "next/link";

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.stayro.com/ar/application/api/about-items/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log("API Response:", jsonData); // Log the response
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-between w-[1400x] h-[3000px] mt-10">
        <div className="pic w-[1000px] h-[2900px] flex flex-col  mt-20 mx-40">
          <div className="pic flex flex-col items-center">
            <Image
              src={Logo}
              alt="Streo"
              width={100}
              height={100}
              className="rounded"
            />
            <h1 className="font-bold text-[44px] mt-10"> عن ستيرو</h1>
          </div>
          <div className="content mt-10 flex flex-col items-end ">
            <div className="head  flex">
              <p>مقدمة عن ستيرو</p>
              <Image
                src={Img}
                alt="Streo"
                width={8}
                height={8}
                className="rounded"
              />
            </div>
          </div>
        </div>

        <div className="options  w-[240px] h-[240px]">
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/Profile">
              {" "}
              الصفحة الشخصية
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/PassSetting">
              تعيين كلمة المرور
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            {" "}
            <Link className="mt-3" href="/Customer/About">
              {" "}
              عن ستيرو
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/Terms">
              {" "}
              الشروط والأحكام
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/Privacy">
              {" "}
              سياسات الخصوصية
            </Link>
          </div>
          <div className="flex justify-center border border-[#303030] w-[240px] h-[45px] mt-4 rounded-2xl">
            <Link className="mt-3" href="/Customer/FAQ">
              {" "}
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;