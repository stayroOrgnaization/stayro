import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Img from "../../../public/image.png";

const Policy = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between w-[1400x] h-[3000px] mt-10">
        <div className="pic w-[1000px] h-[2900px] flex flex-col  mt-20 mx-40">
          <div className="pic flex flex-col items-center">
            <h1 className="font-bold text-[44px] mt-10"> سياسات الخصوصية </h1>
          </div>
          <div className="content mt-10 flex flex-col items-end ">
            <div className="head  flex">
              <p> المقدمة </p>
              <Image
                src={Img}
                alt="Streo"
                width={8}
                height={8}
                className="rounded"
              />
            </div>
            <p className="mt-4 text-right">
              نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي
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

export default Policy;