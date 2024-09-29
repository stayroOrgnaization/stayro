import { useState } from "react";
import "../../Styles/globals.css";
import Image from "next/image";
import SignUpPic from "../../../public/SignUpPic.svg";

const SignUp = () => {
  // form field state
  const [formData, setFormData] = useState({
    countryCode: "+966",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: Validate form fields (e.g., check if passwords match)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare data to send to the API
    const dataToSend = {
      country_code: formData.countryCode,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
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
          body: JSON.stringify(dataToSend),
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

  return (
    <div className="flex justify-center bg-FFFFFF ">
      <div className="login side w-[50%] h-full ">
        <form className="border border-slate-200 rounded-lg w-[60%] h-[100%] mx-10 mt-40">
          <div className=" font-tajawal text-center text-lg font-bold text-black mx-2 mt-3">
            تسجيل الدخول{" "}
          </div>
          <div className="telephone input flex flex-col mt-8">
            <label className=" font-tajawal text-right mx-2"> رقم الهاتف</label>
            <div className="flex justify-center space-x-2">
              <select
                name="countryCode"
                class="border rounded-lg h-10 mt-3 w-20 bg-slate-100 text-gray-700"
              >
                <option value="+1">+966 (KSA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input
                type="tel"
                className=" border bg-slate-100 text-gray-700 rounded-lg mt-3 w-60 h-10"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8 ">
            <label className="font-tajawal text-right mx-2">
              {" "}
              البريد الالكتروني
            </label>

            <input
              type="email"
              className="border bg-slate-100 text-gray-700 rounded-lg mt-3 w-80 h-10 mx-16"
            />
          </div>

          <div className="password input flex flex-col mt-5">
            <label className="font-tajawal text-right mx-2"> كلمة المرور</label>
            <input
              type="password"
              className="bg-slate-100 text-gray-700 rounded-lg mt-3 w-80 h-10 mx-16"
            />
          </div>
          <div className="password input flex flex-col mt-5">
            <label className=" font-tajawal text-right mx-2">
              {" "}
              أعد كلمة المرور
            </label>
            <input
              type="password"
              className="bg-slate-100 text-gray-700 rounded-lg mt-3 w-80 h-10 mx-16"
            />
          </div>

          <div className="flex justify-center">
            <button className=" border bg-orange-600 rounded-lg  mt-8 h-12 w-80 h-10 mx-16">
              تسجيل الدخول
            </button>
          </div>

          <div className="mt-4 mx-2 mb-4 flex justify-end space-x-2 ">
            <p className="font-tajawal">تسجيل الدخول </p>
            <p className="font-tajawal">هل لديك حساب ؟ </p>
          </div>
        </form>
      </div>
      <div className="pic side mt-20 mx-20 ">
        <div>
          <h3 className="font-bold text-4xl text-black text-center font-tajawal">
            {" "}
            احجز براحة، اختر ستيرو
          </h3>
          <p className="font-normal text-lg text-gray-400 text-center mt-5 font-tajawal">
            {" "}
            اكتشف تجربة مميزة للحجوزات
          </p>
        </div>
        <div className="mt-20">
          <Image
            src={SignUpPic}
            alt="Calendar"
            width={300}
            height={200}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
