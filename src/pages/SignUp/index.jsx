import "../../Styles/globals.css";
import Image from "next/image";
import SignUpPic from "../../../public/SignUpPic.svg";

const SignUp = () => {
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
