import { WorksOutContext } from "@/context/WorksOutProvider";
import { useContext } from "react";
import { IoCheckmark } from "react-icons/io5";
import { LibraryTypes } from "../types";
import { toast } from "react-toastify";
interface MarkAsButtonProps {
  planData: LibraryTypes;
}
const MarkAsButton = ({ planData }: MarkAsButtonProps) => {
  const { setPlan } = useContext(WorksOutContext);
  const handleMarkAsButton = () => {
    setPlan((previouData) =>
      previouData.map((data) =>
        data.id === planData.id
          ? {
              ...data,
              status: "done",
            }
          : data,
      ),
    );
    toast.success("WorkOut marked as done!");
  };
  return (
    <button
      onClick={handleMarkAsButton}
      type="button"
      className="flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-4 py-2 text-[12px] font-bold text-black transition hover:bg-[#b9eb00]"
    >
      <IoCheckmark className="h-5 w-5 text-2xl font-bold" />
      <span>{planData.status === "done" ? "Done" : "Mark as Done"}</span>
    </button>
  );
};

export default MarkAsButton;
