"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../Styles/globals.css";
import Image from "next/image";
import Calendar from "../../../public/CalendarPic.png";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    email: "",
    role: "customer",
  });
  // set error message

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    if (!formData.phone || !formData.password) {
      alert("Please fill in all fields.");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Creating a FormData object
    const dataToSend = new FormData();
    dataToSend.append("phone_number", formData.phone);
    dataToSend.append("password", formData.password);
    dataToSend.append("username", formData.username);
    dataToSend.append("role", formData.role);

    try {
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/login/",
        {
          method: "POST",
          body: dataToSend,
        }
      );

      console.log("Response status:", response.status);

      if (response.status === 200) {
        console.log("Login successful.");
        router.push("http://localhost:3000/");
      } else {
        const errorMessage = await response.text();
        console.error("Login error:", errorMessage);
        setErrorMessage(
          "Login failed: " + errorMessage || "Unknown error occurred."
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred during login.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-dbg mt-12">
        <div className=" flex login-side  mx-10 mt-20  w-[65%] h-full md:flex-col ">
          <div className="">
            {errorMessage && (
              <p className="text-red-500 text-center mt-2">{errorMessage}</p>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="border  ml-32 border-[#303030] rounded-[20px] w-[50%] h-[100%]"
          >
            <div className="text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول{" "}
            </div>
            <div className="telephone input flex flex-col mt-8">
              <label className="text-right mx-2"> رقم الهاتف</label>
              <div className="flex justify-end space-x-2 mx-2">
                <select
                  name="countryCode"
                  className="bg-[#757575] opacity-5  border-[#303030] rounded-[12px]  h-10 mt-3  h-[48px] text-gray-100!"
                >
                  <option className="text-gray-100" value="+966">
                    {" "}
                    (KSA)
                  </option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 w-[340px] h-[48px]"
                />
              </div>
            </div>
            <div className="password input flex flex-col items-end mt-5">
              <label className="text-right mx-2"> البريد الالكتروني</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-2 w-[390px] h-[48px]"
                required
              />
            </div>
            <div className="password input flex flex-col items-end mt-5">
              <label className="text-right mx-2"> كلمة السر</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-2 w-[390px] h-[48px]"
                required
              />
            </div>
            <div className="text-right mt-5 mx-2 text-orange-500">
              <Link href="/SignUp"> هل نسيت كلمة المرور؟ </Link>
              هل نسيت كلمة المرور؟
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[90%] border-[#303030] bg-stayro rounded-[12px] mx-2 mt-4 w-[469px] h-12"
              >
                تسجيل الدخول
              </button>
            </div>

            <div className="mt-4 mx-2 mb-4 flex justify-end space-x-2 ">
              <Link href="/SignUp">تسجيل جديد</Link>
              <p>هل لديك حساب جديد؟ </p>
            </div>
          </form>
        </div>
        <div class="h-[100vh] w-[0.5px] bg-[#303030]"></div>
        <div className="pic side mt-20 mx-36 ">
          <div>
            <h3 className="font-bold text-4xl text-gray-100 text-center ">
              {" "}
              احجز براحة، اختر ستيرو
            </h3>
            <p className="font-normal text-lg text-gray-400 text-center mt-5">
              {" "}
              اكتشف تجربة مميزة للحجوزات
            </p>
          </div>

          <div className="mt-20 ">
            <Image
              src={Calendar}
              alt="Calendar"
              width={400}
              height={200}
              className="rounded-lg"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
