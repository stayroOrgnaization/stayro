"use client";
import Link from "next/link.js";
import Logo from "./Logo.jsx";
export default function Footer() {
  return (
    <footer
      className="bg-dbg mt-12 w-full  transition-colors duration-300"
      dir="rtl"
    >
      {/* First Part: Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 ">
        {/* First section: Logo and Text */}
        <div>
          <div className="text-stayro text-xl mr-12 md:mr-0 font-bold flex items-center space-x-4">
            <Logo className="right-0 " />
          </div>
          <p className="text-gray-400  max-w-[289px] mt-8 mr-12 mb-4 md:mr-0">
  تأسست منصة &quot;ستيرو&quot; على رؤية واضحة ومهمة سامية؛ تقديم خدمة حجز وحدات
  ضيافة تتسم بالجودة والراحة والسهولة.
</p>

        </div>
        <div>
          <ul className="space-y-1 md:space-y-2 ">
            <li>
              
              <div className="text-white text-lg font-semibold flex flex-row items-end justify-start mx-20">
                <svg
                  className="mb-4"
                  width="19"
                  height="3"
                  viewBox="0 0 19 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.45312 1.52344H17.4531"
                    stroke="#F5F5F5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link href="/About">عن ستيرو</Link>
              </div>
            </li>
            <li className="flex justify-arround">
              <Link
                href="/Policy"
                className="text-gray-400 text-base mx-20 hover:text-gray-400 transition-colors"
              >
                سياسات الخصوصية
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-400 transition-colors"
              >
                دليل الإستخدام
              </Link>
            </li>
            <li>
             
            </li>
            <li className="flex justify-arround">
              <Link
                href="#"
                className="text-gray-400 text-base mx-20 hover:text-gray-400 transition-colors"
              >
                الشروط والأحكام
              </Link>
              <Link
                href="/FAQ"
                className="text-gray-400 mr-6 hover:text-gray-400 transition-colors"
              >
                الأسئلة الشائعة
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2 mt-32 mb-8 my-8 mr-12 md:mr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700 ml-[4px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.955-7.428c-.006-.061-.023-.116-.027-.176C23.894 4.036 23.476 4 23 4H1C.527 4 .109 4.033 0 5.109L12 12.713zM0 6.868v10.996C0 18.979.53 19 1 19h22c.469 0 1-.021 1-1.136V6.869L12 14.59 0 6.868z" />
            </svg>
            <Link
              href="mailto:info@styro.com"
              className="text-gray-100 hover:text-white transition-colors "
            >
              support@stayro.com
            </Link>
          </div>
        </div>
      </div>
      <div className="container  mx-auto flex justify-between items-center border-t border-gray-600 pt-4 my-8">
        <div>
          <p className="mr-12 md:mr-0">&copy; 2024 Stayro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
