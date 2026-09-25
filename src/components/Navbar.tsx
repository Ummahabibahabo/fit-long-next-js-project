"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/app/assests/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<"plan" | "saved">("plan");

  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b-2 border-[#24262a] bg-black pb-4 text-white sm:pb-5">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 pt-4 text-[14px] lg:px-10">
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
        <div className="hidden items-center gap-1 sm:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "rounded-full bg-[#183000] px-4 py-1.5 font-semibold text-[#b5ff00]"
                : "px-4 py-1.5 font-semibold text-[#8c8f95]"
            }
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan"
                ? "rounded-full bg-[#183000] px-4 py-1.5 font-semibold text-[#b5ff00]"
                : "px-4 py-1.5 font-semibold text-[#8c8f95]"
            }
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 font-bold sm:gap-6">
          {/* Plan */}
          <Link href="/my-plan" onClick={() => setActiveButton("plan")}>
            <div className="flex cursor-pointer items-center gap-2 sm:gap-3">
              <span>Plan</span>

              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] sm:h-8 sm:w-8 sm:text-[13px] ${
                  activeButton === "plan"
                    ? "bg-[#b5ff00] text-black"
                    : "border border-[#303238] text-[#8c8f95]"
                }`}
              >
                0
              </span>
            </div>
          </Link>

          {/* Saved */}
          <Link href="/my-plan" onClick={() => setActiveButton("saved")}>
            <div className="flex cursor-pointer items-center gap-2 font-bold text-[#8c8f95] sm:gap-3">
              <span>Saved</span>

              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] sm:h-8 sm:w-8 sm:text-[13px] ${
                  activeButton === "saved"
                    ? "bg-[#b5ff00] text-black"
                    : "border border-[#303238] text-[#8c8f95]"
                }`}
              >
                0
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 border-t border-[#24262a] px-4 pt-3 sm:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={
              pathname === "/"
                ? "rounded-full bg-[#183000] px-4 py-2 font-medium text-[#b5ff00]"
                : "px-4 py-2 text-[#8c8f95]"
            }
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setMenuOpen(false)}
            className={
              pathname === "/my-plan"
                ? "rounded-full bg-[#183000] px-4 py-2 font-medium text-[#b5ff00]"
                : "px-4 py-2 text-[#8c8f95]"
            }
          >
            My Plan
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
