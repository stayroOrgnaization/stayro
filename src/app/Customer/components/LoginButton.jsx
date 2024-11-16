'use client'; // Necessary for using client-side hooks like useRouter
import React from "react";
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const LoginButton = () => {
  const router = useRouter(); // Initialize useRouter hook

  const handleLoginClick = () => {
    router.push('/Login'); // Navigate to the login page
  };

  return (
    <button
      onClick={handleLoginClick} // Call the function when the button is clicked
      className="w-[171px] h-[54px] flex items-center justify-center px-4 py-1 mr-2 bg-stayro text-gray-100 rounded-[20px] shadow-md hover:bg-opacity-90 transition duration-300"
    >
      {/* Arrow Icon */}
      <span className="mr-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5009_14303)">
            <path
              d="M6.69922 2.12305L1.76371 7.05855L6.69922 11.9941"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.76568 7.0586L12.2656 7.05859"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_5009_14303">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="matrix(-1 0 0 1 14.0156 0.0585938)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      {/* Text */}
      <span className="pt-1 text-sm flex no-wrap row font-bold">تسجيل الدخول</span>
    </button>
  );
};

export default LoginButton;
