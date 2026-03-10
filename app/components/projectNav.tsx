"use client";

import Carousel from "@/app/components/carousel";
import { projectsList } from "@/public/lib/projectsList";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectNav() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      className="max-w-100 my-16 m-auto sm:max-w-none md:w-180 lg:w-220"
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-duration="1000">
      <h2 className="text-2xl my-2 mx-4 font-bold italic sm:mx-0">my other work</h2>
      <Carousel itemList={projectsList} />
    </section>
  );
}
