"use client";
import { observer } from "mobx-react-lite";
import { authStore } from "../../stores/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Calendar from "../../../public/CalendarPic.png";
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
      <Navbar />
      <div className="flex justify-center bg-dbg mt-12">
        <div className="flex login-side mx-10 mt-20 w-[65%] h-full md:flex-col ">
          {authStore.errorMessage && (
            <p className="text-red-500 text-center mt-2">
              {authStore.errorMessage}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="border ml-32 border-[#303030] rounded-[20px] w-[50%] h-[100%]"
          >
            <div className="text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول
            </div>
            <div className="telephone input flex flex-col mt-8">
              <label className="text-right mx-2">رقم الهاتف</label>
              <div className="flex justify-end space-x-2 mx-2">
                <select
                  name="countryCode"
                  className="bg-[#757575] opacity-5 border-[#303030] rounded-[12px] h-10 mt-3 h-[48px] text-gray-100!"
                  onChange={
                    (e) => loginStore.setFormData("countryCode", e.target.value) // Use loginStore here
                  }
                >
                  <option className="text-gray-100" value="+966">
                    (KSA)
                  </option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={authStore.formData.phone} // Use authStore here
                  onChange={
                    (e) => authStore.setFormData("phone", e.target.value) // Use loginStore here
                  }
                  className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 w-[340px] h-[48px]"
                />
              </div>
            </div>
            <div className="password input flex flex-col items-end mt-5">
              <label className="text-right mx-2">البريد الالكتروني</label>
              <input
                type="text"
                name="username"
                value={authStore.formData.username} // Use authStore here
                onChange={
                  (e) => authStore.setFormData("username", e.target.value) // Use authStore here
                }
                className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-2 w-[390px] h-[48px]"
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
                className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-2 w-[390px] h-[48px]"
                required
              />
            </div>
            <div className="text-right mt-5 mx-2 text-orange-500">
              <Link href="/ReSetPasPhone">هل نسيت كلمة المرور؟</Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[90%] border-[#303030] bg-stayro rounded-[12px] mx-2 mt-4 w-[469px] h-12"
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
        <div className="h-[100vh] w-[0.5px] bg-[#303030]"></div>
        <div className="pic side mt-20 mx-36">
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
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Login;
