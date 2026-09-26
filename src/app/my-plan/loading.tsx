const loading = () => {
  return (
    <div className="mt-10 space-y-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex animate-pulse items-center gap-5 rounded-xl border border-[#252932] bg-[#14171E] p-4"
        >
          {/* Image skeleton */}
          <div className="h-28 w-28 shrink-0 rounded-lg bg-[#252932]" />

          {/* Content skeleton */}
          <div className="flex-1 space-y-4">
            <div className="h-5 w-1/3 rounded bg-[#252932]" />
            <div className="h-3 w-1/4 rounded bg-[#252932]" />

            <div className="flex gap-4">
              <div className="h-3 w-20 rounded bg-[#252932]" />
              <div className="h-3 w-20 rounded bg-[#252932]" />
              <div className="h-3 w-16 rounded bg-[#252932]" />
            </div>
          </div>

          {/* Button skeleton */}
          <div className="h-9 w-28 rounded-full bg-[#252932]" />
        </div>
      ))}

      <p className="pt-4 text-center text-sm text-[#8A92A0]">
        Loading workouts…
      </p>
    </div>
  );
};

export default loading;
