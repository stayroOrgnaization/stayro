'use client';
import { useEffect, useState } from "react";
import "../Styles/globals.css";
import Image from "next/image";
import SignUpPic from "../../../public/SignUpPic.png";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const SignUp = () => {
  // form field state
  const [formData, setFormData] = useState({
    phone: "",
    role: "customer",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Error state for validation messages
  const [passwordError, setPasswordError] = useState("");
  // const [phoneError, setPhoneError] = useState("");

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate phone number
  // const validatePhoneNumber = (phone) => {
  //   const phonePattern = /^[0-9]{9,}$/; // Simple phone validation for 9 or more digits
  //   return phonePattern.test(phone);
  // };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    setPasswordError("");
    // setPhoneError("");

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      isValid = false;
    }

    // Validate phone number
    // if (!validatePhoneNumber(formData.phone)) {
    //   setPhoneError("Enter a valid phone number.");
    //   isValid = false;
    // }

    if (!isValid) return; // Stop form submission if validation fails

    // Prepare data to send to the API
    const dataToSendToApi = {
      phone_number: formData.phone,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      role: formData.role,
    };

    try {
      // Send POST request to the backend
      const response = await fetch(
        "https://api.stayro.com/ar/auth/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSendToApi),
        }
      );

      // Check for successful response
      if (response.ok) {
        const responseData = await response.json();
        console.log("User registered successfully:", responseData);
        // Redirect or show a success message here
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Error registering user:", errorData);
        alert("Registration failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration");
    }
  };

  // Ensure the component is rendered only on the client to prevent hydration issues
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true when component is mounted on the client
  }, []);

  if (!isMounted) {
    // Return null during SSR to avoid hydration issues
    return null;
  }

  return (
    <>
    <Navbar />
      <div className="flex justify-center bg-FFFFFF mt-0 ">
        <div className="login side w-[65%] h-full ">
          <div className="">
            {passwordError && (
              <p className="text-red-600 text-sm ">
                كلمتا المرور غير متطابقتين
              </p>
            )}{" "}
          </div>
          <form
            onSubmit={handleSubmit}
            className="border border-[#303030] rounded-[20px] w-[570px] h-auto mx-10 my-12 py-2 px-8"
          >
            <div className=" text-center text-lg font-bold text-gray-100 mx-2 mt-3">
              تسجيل الدخول{" "}
            </div>
            <div className="flex flex-col items-end">
              <div className="telephone input flex flex-col mt-8 mr-6">
                <label className=" text-right mx-2"> رقم الهاتف</label>
                <div className="flex justify-center align-center space-x-2">
                  <select
                    name="countryCode"
                    className=" bg-[#757575] opacity-5  border-[#303030] rounded-[12px] h-10 mt-3 w-[88px] h-[48px] text-gray-100"
                  >
                    <option className="text-gray-100" value="+966">+966 (KSA)</option>
                  </select>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="ادخل رقم هاتفك"
                    required
                    type="tel"
                    className="text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 w-[375px] h-[48px]"
                  />
                </div>
                {/* {phoneError && (
                  <p className="text-red-600 text-sm mx-6 mt-2">{phoneError}</p>
                )} */}
              </div>

              <div className="flex flex-col mt-8 ">
                <label className=" text-right mx-2">
                  {" "}
                  البريد الالكتروني
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="أدخل البريد الالكتروني الخاص بك"
                  className=" text-right border bg-[#757575] opacity-5 text-gray-100 rounded-[12px] mt-3 mx-6 w-[469px] h-[48px] "
                />
              </div>

              <div className="password input flex flex-col mt-5">
                <label className=" text-right mx-2">
                  {" "}
                  كلمة المرور
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="أدخل كلمة المرور"
                  required
                  className=" text-right border bg-[#757575] opacity-5 text-text-gray-100 rounded-[12px] mt-3 mx-6 w-[469px] h-[48px]"
                />
              </div>

              <div className="password input flex flex-col mt-5">
                <label className="  text-right mx-2">
                  {" "}
                  أعد كلمة المرور
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="أعد كتابة كلمة المرور"
                  className="text-right border bg-[#757575] opacity-5 text-text-gray-100 rounded-[12px] mt-3 mx-6 w-[469px] h-[48px]"
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
        <div class="h-[100vh] w-[1px] bg-gray-500"></div>
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
};

export default SignUp;
