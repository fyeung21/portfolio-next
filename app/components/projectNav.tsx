"use client";

import Carousel from "@/app/components/carousel";
import { projectsList } from "@/public/lib/projectsList";
import { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

export default async function ProjectNav({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      className="m-auto my-16 max-w-200 sm:max-w-none md:w-180 lg:w-220"
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <h2 className="mx-4 my-2 text-2xl font-bold italic md:mx-0">
        my other work
      </h2>

      {/* remove slug from projectList before passing it to Carousel */}
      <Carousel projectsList={Object.values(projectsList)} />
    </section>
  );
}
