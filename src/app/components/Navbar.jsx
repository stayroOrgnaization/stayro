"use client";

import { useState } from "react";
import { observer } from "mobx-react-lite"; 
import { authStore } from "../../stores/auth";  
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import UserImage from "./UserImage";
import Link from "next/link";

const Navbar = observer(({ initialActiveLink } ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState(initialActiveLink);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center mt-[20px]">

      <div className="container flex justify-between items-center pt-2 px-3 ">
      <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="flex row w-auto">

        {authStore.isAuthenticated() ? (<div className="hidden md:block"><UserImage
              
              src={authStore.profileImage}
            /> </div>):(<div className='hidden md:block mt-4 pb-4' ><LoginButton /></div>)}
          <Link
                href="/Profile"
                onClick={() => handleLinkClick("الملف الشخصي")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "الملف الشخصي"
                    ? "border-b-2 border-gray-100 text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
              </Link>
              <div className="hidden md:fixed row w-auto">
          <SearchButton />
          <ThemeToggle />
          </div>
        </div>


        <div className="text-stayro "> </div>
        <div className="hidden md:flex custom-font pr-44 kustify-center items-center">
          {authStore.isAuthenticated() ? (
            <div className="mt-8 ">
               <Link
                href="#"
                onClick={() => setActiveLink("المحادثات")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "المحادثات"
                    ? "border-b-2 border-gray-100  text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
                المحادثات
              </Link>
              <Link
                href="#"
                onClick={() => setActiveLink("الحجوزات")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "الحجوزات"
                    ? "border-b-2 border-gray-100  text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
                الحجوزات
              </Link>
              
              <Link
                href="/Housing"
                onClick={() => setActiveLink("المساكن")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "المساكن"
                    ? "border-b-2 border-gray-100  text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
                المساكن
              </Link>
              <Link
                href="/"
                onClick={() => setActiveLink("الرئيسية")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "الرئيسية"
                    ? "border-b-2 border-gray-100  text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
                الرئيسية
              </Link>
              
              </div>
          ) : (
            <div className="mt-4 pb-4">
              <Link
                href="/"
                onClick={() => handleLinkClick("الرئيسية")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "الرئيسية"
                    ? "border-b-2 border-gray-100  text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
                الرئيسية
              </Link> 
              <Link
                href="/Housing"
                onClick={() => setActiveLink("المساكن")}
                className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
                  activeLink === "المساكن"
                    ? "border-b-2 border-gray-100  text-gray-100 -translate-y-[4px]"
                    : "border-b-2 border-transparent opacity-50"
                }`}
              >
                المساكن
              </Link>
              
              </div>
          )}
        </div>

        <div className="text-stayro text-xl font-bold ">
          <Logo dir="ltr" />
        </div>

       
      </div>

           
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] block w-full h-auto">
          {authStore.isAuthenticated() ? (
            <>
            <button onClick={toggleMenu}>X</button>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
              >
                المساكن
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
              >
                الرئيسية
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
              >
                الرئيسية
              </Link>
              <Link
                href="/Housing"
                className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
              >
                المساكن
              </Link>
            
              <Link
                href="/Profile"
                onClick={() => handleLinkClick("الملف الشخصي")}
              className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
              > <div className="hidden md:block"><UserImage
              
              src={authStore.profileImage}
            /></div>
              </Link>
              <div className="block px-4 py-4 flex justify-center items-center">
              <LoginButton />
              </div>
          <SearchButton />
          <ThemeToggle />
            </>
          )}
        </div>
      )}
    </nav>
  );
});

export default Navbar;
