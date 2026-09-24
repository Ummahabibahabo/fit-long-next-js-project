import BannerImg from "@/app/assests/banner.png";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between rounded-xl bg-[#222630] p-6 shadow-2xl sm:flex-row sm:p-8 lg:p-10 gap-10">
      <div className="space-y-5">
        <h5 className="text-[14px] font-bold text-[#C2F800]">
          WORKOUT LIBRARY
        </h5>

        <h1 className="oswald text-[36px] font-[800] leading-tight text-white sm:text-[40px] lg:text-[60px]">
          TRAIN WITH INTENT. LOG <br /> EVERY SET.
        </h1>

        <p className="text-[16px] text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        <a
          href="#library"
          className="flex w-fit items-center gap-2 rounded-xl bg-[#C2F800] px-4 py-2 text-[12px] font-bold text-black"
        >
          BROWSE WORKOUTS
          <FiArrowDown className="text-2xl" />
        </a>
      </div>

      <div>
        <Image src={BannerImg} alt="Fitlog Logo" width={400} height={400} />
      </div>
    </div>
  );
};

export default Banner;
