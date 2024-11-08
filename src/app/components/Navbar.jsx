"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "./SearchButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Logo from "./Logo";
import Link from "next/link";
import { authStore } from "../../stores/auth.js";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("الرئيسية");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (linkName) => setActiveLink(linkName);

  useEffect(() => {
    // Mark component as mounted on client
    setIsClient(true);

    // Check authentication status on client only
    if (authStore.isAuthenticated()) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <nav className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center mt-[20px] mx-[75px]">
      <div className="container flex justify-between items-center pt-2 px-3 ">
        <div className="flex row w-auto">
          {isClient && (isAuthenticated ? <LogoutButton /> : <LoginButton />)}
          <SearchButton />
          <ThemeToggle />
        </div>

        {/* Logo */}
        <div className="text-stayro "> </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex custom-font pr-44">
          <a
            href="#"
            onClick={() => handleLinkClick("المساكن")}
            className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
              activeLink === "المساكن"
                ? "border-b-2 border-gray-100 text-gray-100 -translate-y-[4px]"
                : "border-b-2 border-transparent opacity-50"
            }`}
          >
            المساكن
          </a>
          <Link
            href="/"
            onClick={() => handleLinkClick("الرئيسية")}
            className={`mr-8 py-1 no-underline tracking-wide transition text-sm duration-700 ease-in-out ${
              activeLink === "الرئيسية"
                ? "border-b-2 border-gray-100 text-gray-100 -translate-y-[4px]"
                : "border-b-2 border-transparent opacity-50"
            }`}
          >
            الرئيسية
          </Link>
        </div>

        <div className="text-stayro text-xl font-bold ">
          <Logo dir="ltr" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-100 focus:outline-none"
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="#"
            className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-100 hover:bg-gray-600 hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
