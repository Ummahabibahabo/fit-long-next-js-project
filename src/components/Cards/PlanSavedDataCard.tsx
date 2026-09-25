import Image from "next/image";
import { LibraryTypes } from "../types";
import KcalImg from "@/app/assests/Vector.png";
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import Link from "next/link";
import RemoveCard from "./RemoveCard";
import MarkAsButton from "./MarkAsButton";

interface PlanSavedDataCardProps {
  planData: LibraryTypes;
}

const PlanSavedDataCard = ({ planData }: PlanSavedDataCardProps) => {
  return (
    <div className=" mt-10 flex w-full items-center justify-between gap-6 border border-[#232732] bg-[#14171E] px-4 py-3 rounded-xl shadow-lg">
      {/* Left Side */}
      <div className="flex min-w-0 items-center gap-3">
        {/* Image */}
        <Image
          src={planData.image}
          alt={planData.name}
          width={100}
          height={65}
          className="h-[65px] w-[100px] shrink-0 rounded-lg object-cover"
        />

        {/* Content */}
        <div className="flex min-w-0 flex-col justify-center gap-1">
          {/* Name */}
          <h1 className="truncate text-[14px] font-bold uppercase text-white oswald">
            {planData.name}
          </h1>

          {/* Equipment */}
          <p className="truncate text-[12px] font-semibold text-[#8A92A0]">
            {planData.equipment}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-[12px] text-[#D1D5DB]">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <IoMdTime className="h-3.5 w-3.5 shrink-0 text-[#CCFF00]" />
              <span>{planData.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <Image
                src={KcalImg}
                alt="Calories"
                width={14}
                height={14}
                className="h-3.5 w-3.5 shrink-0"
              />
              <span>{planData.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <CiStar className="h-3.5 w-3.5 shrink-0 text-[#CCFF00]" />
              <span>{planData.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-2">
        {/* View Details */}
        <Link href={`/workOuts/${planData.id}`}>
          <button
            type="button"
            className="rounded-full border border-[#303541] px-4 py-2 text-[12px] font-medium text-white transition hover:border-[#CCFF00]"
          >
            View Details
          </button>
        </Link>

        {/* Mark as Done */}
        <MarkAsButton planData={planData}></MarkAsButton>

        {/* Close */}
        <RemoveCard planData={planData}></RemoveCard>
      </div>
    </div>
  );
};

export default PlanSavedDataCard;
