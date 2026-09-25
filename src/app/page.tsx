import WorkOutsPage from "./workOuts/page";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="mt-20 mb-20">
        <Banner />
      </div>

      {/* Workouts */}
      <div>
        <WorkOutsPage />
      </div>
    </div>
  );
}
