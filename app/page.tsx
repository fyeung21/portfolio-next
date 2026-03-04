import { skillsList } from "@/public/lib/skillsList";
import SkillsContainer from "./components/skillsContainer";
import { projectsList } from "@/public/lib/projectsList";
import ProjectCard from "./components/projectCard";

export default function Home() {
  return (
    <section className="m-4 sm:w-120 sm:m-auto md:w-180 lg:w-220">
      <section className="my-10 py-8 px-4 max-w-100 m-auto sm:max-w-none sm:w-160">
        <p>
          "Hi there! My name is Fiona and I am a front-end web developer who takes great interest in
          learning how to write clear and efficient modular code. Please hover over and click on the
          thumbnails below to check out my projects!"
        </p>
      </section>
      <section className="my-12 max-w-100 m-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
        {projectsList.length !== 0 ? (
          <>
            {projectsList.map((project, id) => (
              <ProjectCard
                key={id}
                id={project.id}
                title={project.title}
                imgSrc={project.imgSrc}
                imgAltDesc={project.imgAltDesc}
                cardBrief={project.cardBrief}
                cardTech={project.cardTech}
                slug={project.slug}
              />
            ))}
          </>
        ) : null}
      </section>
      <SkillsContainer skillsList={skillsList} />
    </section>
  );
}
