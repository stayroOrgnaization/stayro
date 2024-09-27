'use client';
import { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dbg w-full" >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-stayro text-xl font-bold"> </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="text-stayro text-xl font-bold">Styro </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
