"use client";

import Link from "next/link";
import { BiCalendarPlus } from "react-icons/bi";
import { LibraryTypes } from "../types";
import { useContext } from "react";
import { WorksOutContext } from "@/context/WorksOutProvider";
import { toast } from "react-toastify";

interface AddPlanButtonProps {
  detailsData: LibraryTypes;
}

const AddPlanButton = ({ detailsData }: AddPlanButtonProps) => {
  const { plan, setPlan } = useContext(WorksOutContext);

  const handleAddPlanButton = () => {
    // Check if workout already exists
    const isAlreadyAdded = plan.some(
      (planData) => planData.id === detailsData.id,
    );

    // If already added, show warning
    if (isAlreadyAdded) {
      toast.warning("This workout is already added to your plan!");
      return;
    }

    // Add workout if not already added
    setPlan((previousWorkOut) => {
      return [...previousWorkOut, detailsData];
    });

    toast.success(`Added to today's plan: ${detailsData.name}`);
  };

  return (
    <Link href={"/my-plan"}>
      <button
        onClick={handleAddPlanButton}
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
    </Link>
  );
};

export default AddPlanButton;
