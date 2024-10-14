"use client";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { authStore } from "../../stores/auth"; // Import MobX store
import { useRouter } from "next/navigation";
import "../Styles/globals.css";
import Image from "next/image";
import SignUpPic from "../../../public/SignUpPic.png";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Saudi from "../../../public/Saudi.svg";

const SignUp = observer(() => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true when component is mounted on the client
  }, []);

  if (!isMounted) {
    // Return null during SSR to avoid hydration issues
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    authStore.setFormData(name, value); // Update form data in MobX store
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authStore.signUp();

    if (!authStore.errorMessage) {
      authStore.resetFormData(); // Reset form data in the MobX store
      router.push("/");
    }
  };

  return (
    <>
      <div className="main flex flex-col md:flex-row  justify-center items-center ">
        <div className="signUp side w-[65%] h-[748px] flex-col md:items-center mt-20 md:w-full">
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

          {authStore.errorMessage && (
            <div className="flex justify-center border-2 border-red-600 bg-[#FFFFFF0D] text-red-600 text-center mt-2 p-2 rounded w-[350px] mx-44 my-10">
              <p>{authStore.errorMessage}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border border-[#303030] rounded-[20px] lg:w-[570px] lg:h-[600px] mt-10 mb-4 lg:mx-20 md:mx-44 md:mx-10 md:w-[517px] sm:w-[394px] "
          >
            <div className=" text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول{" "}
            </div>
            <div className="flex flex-col items-center">
              {authStore.passwordError && (
                <div className="">
                  <p className="text-red-600 text-sm text-right border-[#303030]  rounded-[12px]">
                    {authStore.passwordError}
                  </p>
                </div>
              )}

              <div className="telephone input flex flex-col mt-8">
                <label className=" text-right mx-4"> رقم الهاتف</label>
                <div className="flex justify-center align-center space-x-1 mx-6">
                  <div className="flex items-center justify-center space-x-1 border-[#303030] bg-[#FFFFFF0D] h-[40px] lg:w-[86px] rounded-[12px] mt-3">
                    <Image
                      src={Saudi}
                      alt="KSA"
                      width={24} // Decrease the width for better alignment
                      height={24}
                      className="rounded"
                    />
                    <input
                      type="text"
                      value="+966"
                      readOnly
                      className="bg-transparent text-[#A2A2A2] w-[40px] h-[24px] text-center"
                    />
                  </div>
                  <input
                    name="phone"
                    value={authStore.formData.phone}
                    onChange={handleInputChange}
                    placeholder="ادخل رقم هاتفك"
                    required
                    type="tel"
                    className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3  lg:w-[375px] md:w-[375px] w-[200px] h-[40px]"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-8 ">
                <label className=" text-right mx-4"> البريد الالكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={authStore.formData.email}
                  onChange={handleInputChange}
                  placeholder="أدخل البريد الالكتروني الخاص بك"
                  className=" text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px] "
                />
              </div>

              <div className="password input flex flex-col mt-5">
                <label className=" text-right lg-mx-4 md:mx-4">
                  {" "}
                  كلمة المرور
                </label>
                <input
                  type="password"
                  name="password"
                  value={authStore.formData.password}
                  onChange={handleInputChange}
                  placeholder="أدخل كلمة المرور"
                  required
                  className=" text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 lg:mx-6 md:mx-6  lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
                />
              </div>

              <div className="password input flex flex-col mt-5">
                <label className="  text-right mx-4"> أعد كلمة المرور</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={authStore.formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="أعد كتابة كلمة المرور"
                  className="text-right border-[#303030] bg-[#FFFFFF0D]  text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
                />
              </div>

              <button
                type="submit"
                className=" border bg-[#FF5B2D] rounded-[12px]  mt-8 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[50px]"
              >
                تسجيل الدخول
              </button>
            </div>

            <div className="mt-4 mx-2 mb-4 flex justify-end space-x-2 ">
              <Link href="/Login" className="text-[#FF5B2D]">
                تسجيل الدخول{" "}
              </Link>
              <p className="">هل لديك حساب ؟ </p>
            </div>
          </form>
        </div>
        <div className="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>
        <div className="pic-side mt-20 mx-20 hidden lg:block">
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
              src={SignUpPic}
              alt="Calendar"
              width={450}
              height={200}
            ></Image>
          </div>
        </div>
        {/* <div
          className="relative w-[509px] h-[538px] bg-no-repeat bg-cover bg-right-bottom lg:hidden sm:hidden md:block"
          style={{
            backgroundImage: `url(${SignUpPic.src})`,
          }}
        ></div> */}
      </div>
    </>
  );
});

export default SignUp;
