"use client";

import PlanSavedDataCard from "@/components/Cards/PlanSavedDataCard";
import { WorksOutContext } from "@/context/WorksOutProvider";
import { useContext, useState } from "react";
import EmptyPlanState from "./EmptyPlanState";

const MyPlanPage = () => {
  const { plan, saved } = useContext(WorksOutContext);

  const [selected, setSelected] = useState(false);

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // =========================
  // SORT FUNCTION
  // =========================
  const sortData = (data: typeof plan) => {
    return [...data].sort((a, b) => {
      if (sortBy === "duration") {
        return b.duration - a.duration;
      }

      if (sortBy === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  };

  // =========================
  // SORT PLAN & SAVED
  // =========================
  const sortedPlan = sortData(plan);
  const sortedSaved = sortData(saved);

  // =========================
  // CURRENT DATA
  // =========================
  const currentData = selected ? sortedSaved : sortedPlan;

  // =========================
  // TOTAL MINUTES
  // =========================
  const totalMinutes = currentData.reduce(
    (total, item) => total + item.duration,
    0,
  );

  // =========================
  // TOTAL CALORIES
  // =========================
  const totalCalories = currentData.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );

  return (
    <div>
      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <h1 className="text-[30px] font-bold text-white">MY PLAN</h1>

      <p className="text-[14px] text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* =========================================
          STATS CARD
      ========================================= */}
      <div className="mt-10 rounded-xl border border-dotted border-[#232732] bg-[#14171E] px-6 py-7">
        <div className="flex items-center justify-between">
          {/* Exercises */}
          <div className="flex-1">
            <p className="text-sm text-gray-400">Exercises</p>

            <p className="text-4xl font-bold text-lime-400">
              {currentData.length}
            </p>
          </div>

          {/* Divider */}
          <div className="h-14 w-px bg-[#252932]" />

          {/* Minutes */}
          <div className="flex-1 pl-7">
            <p className="text-sm text-gray-400">Minutes</p>

            <p className="text-4xl font-bold text-white">{totalMinutes}</p>
          </div>

          {/* Divider */}
          <div className="h-14 w-px bg-[#252932]" />

          {/* Calories */}
          <div className="flex-1 pl-7">
            <p className="text-sm text-gray-400">Calories</p>

            <p className="text-4xl font-bold text-white">{totalCalories}</p>
          </div>
        </div>
      </div>

      {/* =========================================
          TABS + SORT
      ========================================= */}
      <div className="mt-10 flex items-center justify-between">
        {/* =====================================
            TODAY / SAVED TABS
        ===================================== */}
        <div className="rounded-[45px] border-4 border-[#292E3A] bg-[#151820] p-2 font-bold text-white">
          {/* Today's Plan */}
          <button
            type="button"
            onClick={() => setSelected(false)}
            className={
              !selected
                ? "rounded-[30px] border-4 border-[#2B303D] bg-[#20252E] px-8 py-4 text-lg transition-all duration-200"
                : "rounded-[30px] px-8 py-4 text-lg text-[#8A92A0] transition-all duration-200 hover:text-white"
            }
          >
            Today's Plan
          </button>

          {/* Saved */}
          <button
            type="button"
            onClick={() => setSelected(true)}
            className={
              selected
                ? "rounded-[30px] border-4 border-[#2B303D] bg-[#20252E] px-8 py-4 text-lg transition-all duration-200"
                : "rounded-[30px] px-8 py-4 text-lg text-[#8A92A0] transition-all duration-200 hover:text-white"
            }
          >
            Saved
          </button>
        </div>

        {/* =====================================
            SORT
        ===================================== */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#8A92A0]">Sort By</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="
                select
                select-success
                h-10
                min-w-[140px]
                border-[#303641]
                bg-[#151820]
                text-sm
                font-medium
                text-white
                outline-none
              "
            >
              <option value="duration">Duration</option>

              <option value="calories">Calories</option>

              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* =========================================
          PLAN / SAVED CARDS
      ========================================= */}
      <div className="mt-6">
        {currentData.length === 0 ? (
          <EmptyPlanState />
        ) : (
          currentData.map((planData) => (
            <PlanSavedDataCard
              key={planData.id}
              planData={planData}
              type={selected ? "saved" : "plan"}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
