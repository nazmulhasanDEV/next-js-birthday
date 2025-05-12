'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white py-3 px-4 md:px-8 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-pink-500">
          SETMySpace
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm hover:text-pink-500">Home</a>
          <a href="/spaces" className="text-sm hover:text-pink-500">Spaces</a>
          <a href="/celebrations" className="text-sm hover:text-pink-500">Celebrations</a>
          <a href="/professionals" className="text-sm hover:text-pink-500">Professionals</a>
          <a href="/vendors" className="text-sm hover:text-pink-500">Vendors</a>
          <a href="/blog" className="text-sm hover:text-pink-500">Blog</a>
        </div>

        {/* Action Buttons (Always Visible) */}
        <div className="hidden md:flex items-center space-x-3">

          <button className="flex  gap-2 items-center text-xs md:text-sm text-pink-500">
            <img src="/user_attributes.svg" />
            <span className="text-black">BECOME A PROFESSIONAL</span>
          </button>
          <button className="bg-black cursor-pointer hover:bg-pink-600 text-white px-4 py-2 text-xs md:text-sm rounded">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-3 bg-white shadow-md rounded-b pb-4">
          <a href="/" className="block text-sm hover:text-pink-500">Home</a>
          <a href="/spaces" className="block text-sm hover:text-pink-500">Spaces</a>
          <a href="/celebrations" className="block text-sm hover:text-pink-500">Celebrations</a>
          <a href="/professionals" className="block text-sm hover:text-pink-500">Professionals</a>
          <a href="/vendors" className="block text-sm hover:text-pink-500">Vendors</a>
          <a href="/blog" className="block text-sm hover:text-pink-500">Blog</a>

          <div className="pt-3 border-t">
            <button className="block w-full text-left text-sm text-pink-500 mb-2">
              BECOME A PROFESSIONAL
            </button>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 text-sm rounded">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
