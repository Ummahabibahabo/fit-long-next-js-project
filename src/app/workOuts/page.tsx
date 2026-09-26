import WorksOutCard from "@/components/Cards/WorksOutCard";
import { LibraryTypes } from "@/components/types";
import { setTimeout } from "timers/promises";

const getSingleData = async (): Promise<LibraryTypes[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  await setTimeout(4000);
  const data = await res.json();

  return data;
};

const WorkOutsPage = async () => {
  const WorksOutData = await getSingleData();
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-bold text-white">THE LIBRARY</h1>
        <p className="text-[14px] text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {WorksOutData.map((library) => {
          return (
            <WorksOutCard key={library.id} library={library}></WorksOutCard>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOutsPage;
