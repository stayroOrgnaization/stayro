"use client";
import React from "react";

const LoginButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-4 py-1 mr-2 bg-stayro text-fcolor rounded-md shadow-md hover:bg-opacity-90 transition duration-300"
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
          <g clip-path="url(#clip0_5009_14303)">
            <path
              d="M6.69922 2.12305L1.76371 7.05855L6.69922 11.9941"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.76568 7.0586L12.2656 7.05859"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
      <span className="pt-1 text-sm">تسجيل الدخول</span>
    </button>
  );
};

export default LoginButton;
