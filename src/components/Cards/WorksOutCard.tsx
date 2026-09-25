"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";

import KcalIcon from "@/app/assests/Vector.png";
import { WorksOutContext } from "@/context/WorksOutProvider";
import { LibraryTypes } from "../types";

interface WorksOutCardProps {
  library: LibraryTypes;
}

const WorksOutCard = ({ library }: WorksOutCardProps) => {
  const {
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    id,
  } = library;

  const { plan } = useContext(WorksOutContext);

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isAlreadyAdded = plan.some((planData) => planData.id === library.id);

    if (isAlreadyAdded) {
      e.preventDefault();

      toast.warning(`This workout is already added to your plan!`);

      return;
    }

    toast.success(`Opening ${library.name}...`);
  };

  return (
    <Link href={`/workOuts/${id}`} onClick={handleCardClick} className="block">
      <div className="space-y-3 rounded-xl border border-gray-800 bg-[#20242E] shadow-2xl">
        {/* Image */}
        <div className="h-[380px] overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={name}
            width={280}
            height={160}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-2 p-4">
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-lg bg-[#C2F800] px-2.5 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h1 className="text-base font-bold uppercase text-white">{name}</h1>

          {/* Equipment */}
          <p className="text-xs text-[#9CA3AF]">{equipment}</p>

          {/* Info */}
          <div className="flex justify-between text-xs text-[#9CA3AF]">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <IoMdTime className="h-4 w-4 shrink-0" />
              <p>{duration} min</p>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Image
                src={KcalIcon}
                alt="Calories"
                width={16}
                height={16}
                className="h-4 w-4 shrink-0"
              />
              <p>{caloriesBurned} kcal</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <CiStar className="h-4 w-4 shrink-0" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorksOutCard;
