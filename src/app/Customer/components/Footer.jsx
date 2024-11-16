"use client";
import Logo from "./Logo.jsx";
export default function Footer() {
  return (
    <footer
      className="bg-dbg w-full py-8 transition-colors duration-300"
      dir="rtl"
    >
      {/* First Part: Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First section: Logo and Text */}
        <div>
          <div className="text-stayro text-xl font-bold flex items-center space-x-4">
            <Logo className="right-0" />
          </div>
          <p className="text-gray-400 mt-2 max-w-[289px] mt-12">
            تأسست منصة "ستيرو" على رؤية واضحة ومهمة سامية؛ تقديم خدمة حجز وحدات
            ضيافة تتسم بالجودة والراحة والسهولة.
          </p>
        </div>

        {/* Second section: "عن ستيرو" and related links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">عن ستيرو</h3>
          <ul className="space-y-2 ">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-400 transition-colors"
              >
                سياسات الخصوصية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-400 transition-colors"
              >
                دليل الإستخدام
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-400 transition-colors"
              >
                الشروط والأحكام
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-400 transition-colors"
              >
                الأسئلة الشائعة
              </a>
            </li>
          </ul>
        </div>

        {/* Third section: Email Icon and Email */}
        <div>
          <div className="flex items-center space-x-2 mt-32 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700 ml-[4px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.955-7.428c-.006-.061-.023-.116-.027-.176C23.894 4.036 23.476 4 23 4H1C.527 4 .109 4.033 0 5.109L12 12.713zM0 6.868v10.996C0 18.979.53 19 1 19h22c.469 0 1-.021 1-1.136V6.869L12 14.59 0 6.868z" />
            </svg>
            <a
              href="mailto:info@styro.com"
              className="text-gray-100 hover:text-white transition-colors"
            >
              support@stayro.com
            </a>
          </div>
        </div>
      </div>

      {/* Second Part: Bottom (Copyright) */}
      <div className="container mx-auto flex justify-between items-center border-t border-gray-600 pt-4 mt-8">
        <div>
          <p>&copy; 2024 Styro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
