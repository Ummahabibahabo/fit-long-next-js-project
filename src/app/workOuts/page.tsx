import WorksOutCard from "@/components/Cards/WorksOutCard";
import { LibraryTypes } from "@/components/types";

const getSingleData = async (): Promise<LibraryTypes[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch fitlog data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching fitlog data:", error);
    return [];
  }
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

      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {WorksOutData.map((library) => {
          return <WorksOutCard key={library.id} library={library} />;
        })}
      </div>
    </div>
  );
};

export default WorkOutsPage;
