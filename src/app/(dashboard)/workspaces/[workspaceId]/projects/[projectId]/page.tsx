import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

interface ProjectIdPageProps {
  params: { projectId: string };
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
  const user = await getCurrent;
  if (!user) redirect("/sign-in");

  return (
    <div>
      <h1>Project Id: {params.projectId}</h1>
    </div>
  );
};

export default ProjectIdPage;
