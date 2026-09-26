import Link from "next/link";

const EmptyPlanState = () => {
  return (
    <div className="mt-10 flex min-h-[270px] flex-col items-center justify-center rounded-xl border border-dotted border-[#232732] bg-[#0F1115]">
      <h2 className="text-[20px] font-bold tracking-wide text-white">
        NOTHING HERE YET
      </h2>

      <p className="mt-1 text-[14px] text-[#8A92A0]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-5 rounded-full bg-[#C8FF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#baf000]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyPlanState;
