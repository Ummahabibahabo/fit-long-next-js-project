"use client";
import { WorksOutContext } from "@/context/WorksOutProvider";
import { useContext } from "react";
import { LuBookMarked } from "react-icons/lu";
import { LibraryTypes } from "../types";
import { toast } from "react-toastify";
import Link from "next/link";
interface SaveButtonProps {
  detailsData: LibraryTypes;
}
const SaveButton = ({ detailsData }: SaveButtonProps) => {
  const { saved, setSaved } = useContext(WorksOutContext);
  const handleSaveButton = () => {
    const isAlreadySaved = saved.some(
      (savedData) => savedData.id === detailsData.id,
    );
    if (isAlreadySaved) {
      toast.warning("This workout is already saved to your plan!");
      return;
    }
    setSaved((previousWorkOut) => {
      return [...previousWorkOut, detailsData];
    });
    toast.success(`Added to Save for later: ${detailsData.name}`);
  };
  return (
    <Link href={"/my-plan"}>
      <button
        onClick={handleSaveButton}
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
    </Link>
  );
};

export default SaveButton;
