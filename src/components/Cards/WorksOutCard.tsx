import Image from "next/image";
import { LibraryTypes } from "../types";
import { IoMdTime } from "react-icons/io";

import KcalIcon from "@/app/assests/Vector.png";
import { CiStar } from "react-icons/ci";
interface WorksOutCardProps {
  library: LibraryTypes;
}

const WorksOutCard = ({ library }: WorksOutCardProps) => {
  return (
    <div className="space-y-3 rounded-xl border border-gray-800 bg-[#20242E] shadow-2xl">
      <div className="h-[380px] overflow-hidden rounded-xl">
        <Image
          src={library.image}
          alt={library.name}
          width={280}
          height={160}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className="space-y-2 p-4">
        <div className="flex gap-2">
          {library.muscleGroups.map((muscle) => (
            <button
              className="rounded-lg bg-[#C2F800] px-2.5 py-1 text-xs font-bold text-black"
              key={muscle}
            >
              {muscle}
            </button>
          ))}
        </div>

        <h1 className="text-base font-bold text-white uppercase">
          {library.name}
        </h1>

        <p className="text-xs text-[#9CA3AF]">{library.equipment}</p>

        <div className="flex justify-between text-xs text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <IoMdTime className="h-4 w-4 shrink-0" />
            <p>{library.duration} min</p>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={KcalIcon}
              alt="Calories"
              width={16}
              height={16}
              className="h-4 w-4 shrink-0"
            />
            <p>{library.caloriesBurned} kcal</p>
          </div>

          <div className="flex items-center gap-2">
            <CiStar className="h-4 w-4 shrink-0" />
            <p>{library.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksOutCard;
