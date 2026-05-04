"use client";

import Carousel from "@/app/components/carousel";
import { projectsList } from "@/public/lib/projectsList";
import { useEffect } from "react";
import AOS from "aos";

export default function ProjectNav() {
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
      <Carousel projectsList={Object.values(projectsList)} />
    </section>
  );
}
