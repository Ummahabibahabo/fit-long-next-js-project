import { WorksOutContext } from "@/context/WorksOutProvider";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { LibraryTypes } from "../types";
interface RemoveCardProps {
  planData: LibraryTypes;
}
const RemoveCard = ({ planData }: RemoveCardProps) => {
  const { setPlan } = useContext(WorksOutContext);
  const handleRemoveButton = () => {
    setPlan((previousData) => {
      return previousData.filter((data) => data.id !== planData.id);
    });
  };
  return (
    <button
      onClick={handleRemoveButton}
      type="button"
      className="ml-1 flex h-6 w-6 items-center justify-center text-[#667080] transition hover:text-white"
    >
      <RxCross2 className="h-5 w-5" />
    </button>
  );
};

export default RemoveCard;
