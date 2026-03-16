"use client";

import { skillsList } from "@/public/lib/skillsList";
import SkillsContainer from "./components/skillsContainer";
import { projectsList } from "@/public/lib/projectsList";
import ProjectCard from "./components/projectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section
      className="m-4 sm:m-auto sm:w-120 md:w-180 lg:w-220"
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="1500"
    >
      <section className="m-auto my-10 max-w-100 px-4 py-8 sm:w-160 sm:max-w-none">
        <p>
          "Hi there! My name is Fiona and I am a front-end web developer who
          takes great interest in learning how to write clear and efficient
          modular code. Please hover over and click on the thumbnails below to
          check out my projects!"
        </p>
      </section>
      <section className="m-auto my-12 max-w-100 md:grid md:max-w-none md:grid-cols-2 md:gap-8 lg:gap-16 lg:gap-x-24">
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
