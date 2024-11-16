"use client";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img from "../../../public/image.png";
// import { useEffect, useState } from "react";

const About = () => {
  //   const [data, setData] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch data when component mounts
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.stayro.com/ar/application/api/about-items/"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const jsonData = await response.json();

  //       // Log the response data to the console
  //       console.log("API Response:", jsonData);

  //       setData(jsonData);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
            <p className="mt-4 text-right">
              في عالمنا المتسارع والمليء بالانشغالات، باتت الحاجة إلى مكان
              يمكننا فيه الاسترخاء والابتعاد عن ضغوط الحياة اليومية أمرًا ملحًا.
              منصة &quot;ستيرو&quot; لحجز وحدات الضيافة تقدم لكم الحل المثالي لذلك، حيث
              تتيح للمستخدمين حجز أماكن إقامة مميزة وراحة لا تضاهى، سواء كان ذلك
              لعطلة نهاية الأسبوع أو رحلة عمل أو إجازة طويلة. في هذا المقال
              المفصل، سنستعرض جميع جوانب منصة &quot;ستيرو&quot; ونلقي الضوء على كيفية
              تأثيرها الإيجابي على حياة المستخدمين من خلال توفير تجارب ضيافة لا
              تُنسى.
            </p>
          </div>
        </div>

        <div className="options  w-[240px] h-[240px]">
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
      <Footer />
    </>
  );
};
export default About;
