import ProjectSingleDetails from "@/app/components/projectSingleDetails";
import { projectsList } from "@/public/lib/projectsList";
import ProjectNav from "@/app/components/projectNav";

export default function ProjectSingle() {
  return (
    <section>
      <ProjectSingleDetails
        title={projectsList[0].title}
        imgSrc={projectsList[0].imgSrc}
        imgAltDesc={projectsList[0].imgAltDesc}
        slug={projectsList[0].slug}
        description={projectsList[0].description}
        url={projectsList[0].url}
        github={projectsList[0].github}
        technologies={projectsList[0].techonologies}
        keyFeatures={projectsList[0].keyFeatures}
        screenshots={projectsList[0].screenshots}
        reflection={projectsList[0].reflection}
      />
      <ProjectNav />
    </section>
  );
}
