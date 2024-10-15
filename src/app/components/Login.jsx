"use client";
import { observer } from "mobx-react-lite";
import { authStore } from "../../stores/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Calendar from "../../../public/CalendarPic.png";
import Saudi from "../../../public/Saudi.svg";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const Login = observer(() => {
  const router = useRouter();
  console.log(authStore);

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await authStore.login();

    if (!authStore.errorMessage) {
      router.push("/VerifyLogin");
    }
  };

  return (
    <>
      <div className="main flex justify-center  ">
        <div className="login flex flex-col w-[60%] h-[748px] md:items-center mt-20 md:w-full ">
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
            <p className="flex justify-center border-2 border-red-600 bg-[#FFFFFF0D] text-red-600 text-center mt-2 p-2 rounded w-[350px] mx-44 my-10">
              {authStore.errorMessage}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border border-[#303030] rounded-[20px] lg:w-[517px] lg:h-[600px] mt-10 mb-4 lg:mx-20 md:mx-44 md:mx-10 md:w-[517px] sm:w-[394px]"
          >
            <div className="text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول
            </div>
            <div className="telephone-input flex flex-col mt-8">
              <label className="text-right mx-4">رقم الهاتف</label>
              <div className="flex justify-end align-center space-x-1 mx-6">
                <div className="flex items-center justify-end  border-[#303030] bg-[#FFFFFF0D] h-[40px] w-[86px] rounded-[12px] mt-3">
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
                    className="bg-transparent text-[#A2A2A2]  w-[40px] h-[24px] text-center"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={authStore.formData.phone}
                  placeholder="ادخل رقم هاتفك"
                  onChange={(e) =>
                    authStore.setFormData("phone", e.target.value)
                  }
                  className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3  lg:w-[375px] md:w-[375px] w-[200px] h-[40px]"
                />
              </div>
            </div>
            <div className="email-input flex flex-col items-end mt-5">
              <label className="text-right mx-2">البريد الالكتروني</label>
              <input
                type="text"
                name="username"
                value={authStore.formData.username} // Use authStore here
                onChange={
                  (e) => authStore.setFormData("username", e.target.value) // Use authStore here
                }
                placeholder="أدخل البريد الالكتروني الخاص بك"
                className=" text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px] "
                required
              />
            </div>
            <div className="password input flex flex-col items-end mt-5">
              <label className="text-right mx-2">كلمة السر</label>
              <input
                type="password"
                name="password"
                value={authStore.formData.password} // Use authStore here
                onChange={
                  (e) => authStore.setFormData("password", e.target.value) // Use authStore here
                }
                placeholder="أدخل كلمة المرور"
                required
                className="text-right border-[#303030] bg-[#FFFFFF0D] text-[#A2A2A2] placeholder-[#A2A2A2] p-2 rounded-[12px] mt-3 mx-6 lg:w-[469px] md:w-[469px] w-[270px] h-[40px]"
              />
            </div>
            <div className="text-right mt-5 mx-2 text-orange-500">
              <Link href="/ReSetPasPhone">هل نسيت كلمة المرور؟</Link>
            </div>
            <div className="flex justify-end mx-6">
              <button
                type="submit"
                className="border bg-[#FF5B2D] rounded-[12px]  mt-8  lg:w-[469px] md:w-[469px] w-[270px] h-[50px]"
              >
                تسجيل الدخول
              </button>
            </div>

            <div className="mt-4 mx-2 mb-4 flex justify-end space-x-2">
              <Link href="/SignUp">تسجيل جديد</Link>
              <p>هل لديك حساب جديد؟</p>
            </div>
          </form>
        </div>
        <div className="h-[100vh] w-[0.5px] bg-[#303030] hidden lg:block"></div>

        <div className="pic side mt-20 mx-36 hidden lg:block">
          <div>
            <h3 className="font-bold text-4xl text-gray-100 text-center">
              احجز براحة، اختر ستيرو
            </h3>
            <p className="font-normal text-lg text-gray-400 text-center mt-5">
              اكتشف تجربة مميزة للحجوزات
            </p>
          </div>
          <div className="mt-20">
            <Image
              src={Calendar}
              alt="Calendar"
              width={400}
              height={200}
              className="rounded-lg hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Login;
