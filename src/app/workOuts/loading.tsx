import WorkOutsSkeleton from "@/skeletons/WorkOutsSkeleton";

const Loading = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(12)].map((_, index) => (
        <WorkOutsSkeleton key={index}></WorkOutsSkeleton>
      ))}
    </div>
  );
};

export default Loading;
