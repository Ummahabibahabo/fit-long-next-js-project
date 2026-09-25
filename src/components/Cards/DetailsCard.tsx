import Image from "next/image";
import { LibraryTypes } from "../types";
import { CiStar } from "react-icons/ci";
import { BiCalendarPlus } from "react-icons/bi";
import { LuBookMarked } from "react-icons/lu";

interface DetailsCardProps {
  detailsData: LibraryTypes;
}

const DetailsCard = ({ detailsData }: DetailsCardProps) => {
  const {
    image,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    name,
    muscleGroups,
    description,
    instructions,
  } = detailsData;

  return (
    <div className="text-white">
      <div className="grid grid-cols-1 gap-8 rounded-xl border border-[#252932] bg-[#101217] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] md:grid-cols-2">
        {/* ================= IMAGE ================= */}
        <div className="h-full min-h-[500px] overflow-hidden rounded-lg bg-[#161920]">
          <Image
            src={image}
            alt={name}
            width={588}
            height={773}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex min-w-0 flex-col">
          {/* TITLE + DESCRIPTION */}
          <div>
            <h1 className="text-[28px] font-extrabold uppercase leading-tight tracking-wide text-white">
              {name}
            </h1>

            <p className="mt-3 text-[14px] leading-6 text-[#9CA3AF]">
              {description}
            </p>
          </div>

          {/* ================= MUSCLE GROUPS ================= */}
          <div className="mt-4 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-md bg-[#C2F800] px-3 py-1 text-[12px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= INFORMATION ================= */}
          <div className="mt-5 overflow-hidden rounded-lg border border-[#252932] bg-[#161920]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Equipment
              </span>

              <span className="text-[13px] font-medium text-white">
                {equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Difficulty
              </span>

              <span className="text-[13px] font-medium text-white">
                {difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Sets
              </span>

              <span className="text-[13px] font-medium text-white">{sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Reps
              </span>

              <span className="text-[13px] font-medium text-white">{reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Duration
              </span>

              <span className="text-[13px] font-medium text-white">
                {duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Calories
              </span>

              <span className="text-[13px] font-medium text-white">
                {caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[12px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                Rating
              </span>

              <span className="flex items-center gap-1 text-[13px] font-medium text-white">
                <CiStar size={17} className="fill-[#C2F800] text-[#C2F800]" />
                {rating}
              </span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-6">
            <h2 className="text-[14px] font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[13px] leading-5 text-[#D1D5DB]"
                >
                  <span className="min-w-[18px] font-medium text-[#8B929D]">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Add to Today's Plan */}
            <button
              type="button"
              className="group flex items-center gap-2 rounded-lg bg-[#C2F800] px-4 py-2.5 text-[13px] font-semibold text-black shadow-[0_0_15px_rgba(194,248,0,0.12)] transition-all duration-200 hover:bg-[#D4FF36] hover:shadow-[0_0_20px_rgba(194,248,0,0.25)]"
            >
              <BiCalendarPlus
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-200 group-hover:rotate-6"
              />

              <span>Add to today's plan</span>
            </button>

            {/* Save for Later */}
            <button
              type="button"
              className="group flex items-center gap-2 rounded-lg border border-[#30343D] bg-[#161920] px-4 py-2.5 text-[13px] font-medium text-[#D1D5DB] transition-all duration-200 hover:border-[#C2F800] hover:bg-[#1C2028] hover:text-white"
            >
              <LuBookMarked
                size={17}
                strokeWidth={2}
                className="transition-all duration-200 group-hover:fill-[#C2F800] group-hover:text-[#C2F800]"
              />

              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
