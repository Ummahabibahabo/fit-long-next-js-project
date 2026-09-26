"use client";
import PlanSavedDataCard from "@/components/Cards/PlanSavedDataCard";
import { WorksOutContext } from "@/context/WorksOutProvider";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const { plan, saved } = useContext(WorksOutContext);

  const [selected, setSelected] = useState(false);
  const handleSelectedButton = () => {
    setSelected(!selected);
  };
  const currentData = selected ? saved : plan;
  const totalMinutes = currentData.reduce(
    (total, item) => total + item.duration,
    0,
  );
  const totalCalories = currentData.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );
  return (
    <div>
      <h1 className="text-[30px] font-bold text-white">MY PLAN</h1>
      <p className="text-[14px] text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="bg-[#14171E] rounded-xl border border-dotted border-[#232732] px-6 py-7 mt-10">
        <div className="flex items-center justify-between">
          {/* Exercises */}
          <div className="flex-1">
            <p className="text-sm text-gray-400">Exercises</p>
            <p className="text-4xl font-bold text-lime-400">
              {currentData.length}
            </p>
          </div>

          <div className="h-14 w-px bg-[#252932]" />

          {/* Minutes */}
          <div className="flex-1 pl-7">
            <p className="text-sm text-gray-400">Minutes</p>
            <p className="text-4xl font-bold text-white">{totalMinutes}</p>
          </div>

          <div className="h-14 w-px bg-[#252932]" />

          {/* Calories */}
          <div className="flex-1 pl-7">
            <p className="text-sm text-gray-400">Calories</p>
            <p className="text-4xl font-bold text-white">{totalCalories}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <div className="p-4 rounded-[45px] bg-[#151820] border-4 border-[#292E3A] font-bold text-white">
          <button
            onClick={handleSelectedButton}
            className={
              selected
                ? "flex-1 px-8 py-5 text-4xl text-[#8A92A0]"
                : "flex-1 px-8 py-5 rounded-[30px] bg-[#20252E] border-4 border-[#2B303D] text-4xl"
            }
          >
            Today's Plan
          </button>

          <button
            onClick={handleSelectedButton}
            className={
              selected
                ? "flex-1 px-8 py-5 rounded-[30px] bg-[#20252E] border-4 border-[#2B303D] text-4xl"
                : "flex-1 px-8 py-5 text-4xl text-[#8A92A0]"
            }
          >
            Saved
          </button>
        </div>

        <h1>sort</h1>
      </div>
      <div>
        {currentData.map((planData) => {
          return (
            <PlanSavedDataCard
              key={planData.id}
              planData={planData}
              type={selected ? "saved" : "plan"}
            ></PlanSavedDataCard>
          );
        })}
      </div>
    </div>
  );
};

export default MyPlanPage;
