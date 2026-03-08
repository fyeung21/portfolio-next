"use client";

import ProjectSingleDetails from "@/app/components/projectSingleDetails";
import { projectsList } from "@/public/lib/projectsList";
import ProjectNav from "@/app/components/projectNav";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export default function ProjectSingle() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  // }, []);

  return (
    <section
      className="max-w-100 m-auto sm:max-w-none md:w-180 lg:w-220"
      // data-aos="fade-up"
      // data-aos-easing="ease-in"
      // data-aos-duration="1500"
    >
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
