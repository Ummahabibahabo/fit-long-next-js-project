const EmptyPlanState = () => {
  return (
    <div className="bg-[#0F1115] rounded-xl border border-dotted border-[#232732] min-h-[270px] flex flex-col items-center justify-center mt-10">
      <h2 className="text-white text-[20px] font-bold tracking-wide">
        NOTHING HERE YET
      </h2>

      <p className="text-[14px] text-[#8A92A0] mt-1">
        Browse the library and add a lift to get today moving.
      </p>

      <button
        className="mt-5 px-6 py-3 rounded-full bg-[#C8FF00] text-black text-sm font-semibold
        hover:bg-[#baf000] transition"
      >
        Go to workouts
      </button>
    </div>
  );
};

export default EmptyPlanState;
