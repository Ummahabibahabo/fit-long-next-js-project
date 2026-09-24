import Image from "next/image";
import FooterIcon from "@/app/assests/logo.png";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#24262a] py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={FooterIcon}
            alt="Fitlog Logo"
            width={25}
            height={25}
            className="rotate-[-45deg] object-contain"
          />
          <p className="text-[14px] font-bold">FITLOG</p>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-center text-[#6B7280]">
          <MdCopyright className="shrink-0 text-xl" />

          <p className="text-sm sm:text-base">
            2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
