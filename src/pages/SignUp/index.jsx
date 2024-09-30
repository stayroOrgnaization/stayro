import { useEffect, useState } from "react";
import "../../Styles/globals.css";
import Image from "next/image";
import SignUpPic from "../../../public/SignUpPic.svg";

const SignUp = () => {
  // form field state
  const [formData, setFormData] = useState({
    // countryCode: "+966",
    phone: "",
    role: "customer",
    email: "",
    password: "",
    confirm_password: "",
  });

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Validate form fields
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare data to send to the API
    const dataToSendToApi = {
      // country_code: formData.countryCode,
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
    <div className="flex justify-center bg-FFFFFF ">
      <div className="login side w-[65%] h-full ">
        <form
          onSubmit={handleSubmit}
          className="border border-slate-200 rounded-lg w-[517px] h-auto mx-10 mt-40"
        >
          <div className=" font-tajawal text-center text-lg font-bold text-black mx-2 mt-3">
            تسجيل الدخول{" "}
          </div>
          <div className="flex flex-col items-end">
            <div className="telephone input flex flex-col mt-8">
              <label className=" font-tajawal text-right mx-2">
                {" "}
                رقم الهاتف
              </label>
              <div className=" space-x-1 mx-6">
                <select
                  name="countryCode"
                  // value={formData.countryCode} // Ensure value is set properly
                  // onChange={handleInputChange}
                  className=" bg-[#F5F5F5] border rounded-lg h-10 mt-3 w-[88px] h-[48px] text-gray-700"
                >
                  <option value="+966">+966 (KSA)</option>
                </select>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="ادخل رقم هاتفك"
                  required
                  type="tel"
                  className=" border bg-[#F5F5F5] text-gray-700 rounded-lg mt-3 w-[375px] h-[48px]"
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="أدخل البريد الالكتروني الخاص بك"
                className="border bg-[#F5F5F5] text-gray-700 rounded-lg mt-3 mx-6 w-[469px] h-[48px] "
              />
            </div>

            <div className="password input flex flex-col mt-5">
              <label className="font-tajawal text-right mx-2">
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
                className="border bg-[#F5F5F5] text-gray-700 rounded-lg mt-3 mx-6 w-[469px] h-[48px]"
              />
            </div>
            <div className="password input flex flex-col mt-5">
              <label className=" font-tajawal text-right mx-2">
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
                className=" border bg-[#F5F5F5] text-gray-700 rounded-lg mt-3 mx-6 w-[469px] h-[48px]"
              />
            </div>

            <button
              type="submit"
              className=" border bg-orange-600 rounded-lg  mt-8 mx-6 w-[469px] h-[65px]"
            >
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
  );
};

export default SignUp;
