import ProjectSingleDetails from "@/app/components/projectSingleDetails";
import { projectsList } from "@/public/lib/projectsList";
import ProjectNav from "@/app/components/projectNav";

export default async function ProjectSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectsList[slug as keyof typeof projectsList];

  return (
    <section>
      <ProjectSingleDetails
        title={project.title}
        imgSrc={project.imgSrc}
        imgAltDesc={project.imgAltDesc}
        cardBrief={project.cardBrief}
        cardTech={project.cardTech}
        slug={project.slug}
        description={project.description}
        url={project.url}
        github={project.github}
        technologies={project.technologies}
        keyFeatures={project.keyFeatures}
        screenshots={project.screenshots}
        reflection={project.reflection}
      />
      <ProjectNav />
    </section>
  );
}
