"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/app/assests/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative border-b-2 border-[#24262a] pb-4 text-white sm:pb-5">
      {/* Main Navbar */}
      <div className="flex items-center justify-between text-[14px]">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl sm:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Fitlog Logo" width={25} height={25} />

            <span className="font-bold tracking-wide">FITLOG</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 sm:flex">
          <li className="rounded-full bg-[#183000] px-4 py-1.5 font-medium text-[#b5ff00]">
            Workouts
          </li>

          <li className="px-4 py-1.5 text-[#8c8f95]">My Plan</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Plan */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span>Plan</span>

            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b5ff00] p-0 text-[12px] font-bold leading-none text-black sm:h-8 sm:w-8 sm:text-[13px]">
              0
            </button>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-[#8c8f95] sm:gap-3">
            <span>Saved</span>

            <button className="flex h-7 w-7 items-center justify-center rounded-full border border-[#303238] p-0 text-[12px] leading-none sm:h-8 sm:w-8 sm:text-[13px]">
              0
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="mt-4 flex flex-col gap-2 border-t border-[#24262a] pt-3 sm:hidden">
          <li className="rounded-full bg-[#183000] px-4 py-2 font-medium text-[#b5ff00]">
            Workouts
          </li>

          <li className="px-4 py-2 text-[#8c8f95]">My Plan</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
