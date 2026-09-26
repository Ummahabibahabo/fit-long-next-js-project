import React from "react";

const WorkOutsSkeleton = () => {
  return (
    <div className="space-y-3 rounded-xl border border-gray-800 bg-[#20242E] shadow-2xl animate-pulse">
      {/* Image Skeleton */}
      <div className="h-[380px] w-full rounded-xl bg-[#2B303A]" />

      {/* Content */}
      <div className="space-y-3 p-4">
        {/* Muscle Groups */}
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-lg bg-[#343944]" />
          <div className="h-6 w-24 rounded-lg bg-[#343944]" />
        </div>

        {/* Workout Name */}
        <div className="h-5 w-3/4 rounded bg-[#343944]" />

        {/* Equipment */}
        <div className="h-4 w-1/2 rounded bg-[#343944]" />

        {/* Info */}
        <div className="flex justify-between">
          <div className="h-4 w-16 rounded bg-[#343944]" />
          <div className="h-4 w-20 rounded bg-[#343944]" />
          <div className="h-4 w-12 rounded bg-[#343944]" />
        </div>
      </div>
    </div>
  );
};

export default WorkOutsSkeleton;
