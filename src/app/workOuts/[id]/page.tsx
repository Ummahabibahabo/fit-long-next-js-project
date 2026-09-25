import DetailsCard from "@/components/Cards/DetailsCard";

interface WordkOutDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getDetailsData = async (id: string) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const WorkOutDetailsPage = async ({ params }: WordkOutDetailsPageProps) => {
  const { id } = await params;
  const detailsData = await getDetailsData(id);
  if (!detailsData) {
    return <h1>WorkOutDetails Page not Found</h1>;
  }
  return (
    <div>
      <DetailsCard detailsData={detailsData}></DetailsCard>
    </div>
  );
};

export default WorkOutDetailsPage;
