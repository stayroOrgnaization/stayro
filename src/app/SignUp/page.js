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
    await authStore.signUp(); // Call the sign-up method from AuthStore

    if (!authStore.errorMessage) {
      router.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="login side w-[65%] h-full ">
          <form
            onSubmit={handleSubmit}
            className="border border-[#303030] rounded-[20px] w-[570px] h-auto mx-10 my-12 py-2 px-8"
          >
            <div className=" text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول{" "}
            </div>
            <div className="flex flex-col items-end">
              {authStore.passwordError && (
                <p className="text-red-600 text-sm ">
                  {authStore.passwordError}
                </p>
              )}

              <div className="telephone input flex flex-col mt-8 mr-6">
                <label className=" text-right mx-2"> رقم الهاتف</label>
                <div className="flex justify-center align-center space-x-2">
                  <select
                    name="countryCode"
                    className=" bg-[#FFFFFF0D] border-[#303030] rounded-[12px] h-10 mt-3 w-[88px] h-[48px] text-gray-100"
                  >
                    <option
                      className="text-gray-100 text-text-gray-100"
                      value="+966"
                    >
                      +966 (KSA)
                    </option>
                  </select>
                  <input
                    name="phone"
                    value={authStore.formData.phone}
                    onChange={handleInputChange}
                    placeholder="ادخل رقم هاتفك"
                    required
                    type="tel"
                    className="text-right border-[#303030] bg-[#FFFFFF0D]  text-text-gray-100 text-gray-100 rounded-[12px] mt-3 w-[375px] h-[48px]"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-8 ">
                <label className=" text-right mx-2"> البريد الالكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={authStore.formData.email}
                  onChange={handleInputChange}
                  placeholder="أدخل البريد الالكتروني الخاص بك"
                  className=" text-right border-[#303030] bg-[#FFFFFF0D] text-gray-100 rounded-[12px] mt-3 mx-6 w-[469px] h-[48px] "
                />
              </div>

              <div className="password input flex flex-col mt-5">
                <label className=" text-right mx-2"> كلمة المرور</label>
                <input
                  type="password"
                  name="password"
                  value={authStore.formData.password}
                  onChange={handleInputChange}
                  placeholder="أدخل كلمة المرور"
                  required
                  className=" text-right border-[#303030] bg-[#FFFFFF0D]  text-text-gray-100 rounded-[12px] mt-3 mx-6 w-[469px] h-[48px]"
                />
              </div>

              <div className="password input flex flex-col mt-5">
                <label className="  text-right mx-2"> أعد كلمة المرور</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={authStore.formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="أعد كتابة كلمة المرور"
                  className="text-right border-[#303030] bg-[#FFFFFF0D]  text-gray-100 rounded-[12px] mt-3 mx-6 w-[469px] h-[48px]"
                />
              </div>

              <button
                type="submit"
                className=" border bg-orange-600 rounded-[12px]  mt-8 mx-6 w-[469px] h-[65px]"
              >
                تسجيل الدخول
              </button>
            </div>

            <div className="mt-4 mx-2 mb-4 flex justify-end space-x-2 ">
              <Link href="/Login">تسجيل الدخول </Link>
              <p className="">هل لديك حساب ؟ </p>
            </div>
          </form>
        </div>
        <div className="h-[100vh] w-[0.5px] bg-[#303030]"></div>
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
              src={SignUpPic}
              alt="Calendar"
              width={450}
              height={200}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
});

export default SignUp;
