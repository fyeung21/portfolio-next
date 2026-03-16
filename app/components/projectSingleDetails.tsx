"use client";

import Image from "next/image";
import ExternalLink from "./externalLink";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export type keyFeature = {
  id: number;
  imgSrc: string;
  imgAltDesc: string;
  title: string;
  description: string;
};
export type screenshot = {
  id: number;
  imgSrc: string;
  imgAltDesc: string;
  caption: string;
};
export type ProjectSingleProps = {
  //   id: number;
  title: string;
  imgSrc: string;
  imgAltDesc: string;
  //   cardBrief: string;
  //   cardTech: string[];
  slug: string;
  description: string;
  url: string;
  github: string;
  technologies: string[];
  keyFeatures: keyFeature[];
  screenshots: screenshot[];
  reflection: string;
};

export default function ProjectSingleDetails({
  title,
  imgSrc,
  imgAltDesc,
  slug,
  description,
  url,
  github,
  technologies,
  keyFeatures,
  screenshots,
  reflection,
}: ProjectSingleProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section
        className="m-auto max-w-100 sm:max-w-none md:w-180 lg:w-220"
        data-aos="fade-up"
        data-aos-easing="ease-in"
        data-aos-duration="1500"
      >
        <article className="relative h-60 overflow-hidden sm:h-70 md:h-80 lg:h-100">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={imgAltDesc}
            fill={true}
            priority
          />
        </article>
        <section className="m-4 mb-8 sm:flex sm:flex-row sm:justify-between md:m-auto md:max-w-185 md:px-4 md:py-8">
          <article>
            <h2 className="mb-4 text-3xl lg:text-4xl">{title}</h2>
            <p>{description}</p>
            <article className="mt-8 sm:mt-4">
              <h3 className="text-xl capitalize sm:hidden">technologies</h3>
              <ul className="list-inside list-none marker:content-['✦'] sm:flex sm:flex-row">
                {technologies.map((technology, id) => (
                  <li key={id}>
                    <span className="mx-2 leading-8 italic">{technology}</span>
                  </li>
                ))}
              </ul>
            </article>
          </article>
          <article className="my-2 sm:pr-1 sm:pl-8">
            {url ? <ExternalLink url={url} label={"live site"} /> : null}
            {github ? <ExternalLink url={github} label={"github"} /> : null}
          </article>
        </section>
        <section
          className="mx-4 my-12 md:mx-0"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="1500"
        >
          <article className="my-4 border-b-2 border-gold-300 shadow-underline">
            <h2 className="my-2 text-2xl lg:text-3xl">key features</h2>
          </article>
          <article className="sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-16">
            {keyFeatures.map((feature, id) => (
              <article key={id} className="py-4">
                <article className="relative h-60 w-auto overflow-hidden rounded-2xl sm:h-50 lg:h-60">
                  <Image
                    className="object-cover"
                    src={feature.imgSrc}
                    alt={feature.imgAltDesc}
                    fill={true}
                    priority
                  />
                </article>
                <article className="md:px-2">
                  <h3 className="my-4 font-bold capitalize">{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </article>
            ))}
          </article>
        </section>
        <section
          className="mx-4 md:mx-0"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <article className="my-4 border-b-2 border-gold-300 shadow-underline">
            <h2 className="my-2 text-2xl lg:text-3xl">screenshots</h2>
          </article>
          {screenshots.map((screen, id) => (
            <article key={id} className="py-4">
              <article className="relative h-60 w-auto overflow-hidden rounded-2xl sm:h-90 lg:h-120">
                <Image
                  className="object-cover"
                  src={screen.imgSrc}
                  alt={screen.imgAltDesc}
                  fill={true}
                  priority
                />
              </article>
              <p className="my-2 text-center">{screen.caption}</p>
            </article>
          ))}
        </section>
        <section
          className="mx-4 md:mx-0"
          data-aos="fade-up"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <article className="m-auto my-4 max-w-150 border-b-2 border-gold-300 shadow-underline">
            <h2 className="my-2 text-2xl lg:text-3xl">reflection</h2>
          </article>
          <article
            dangerouslySetInnerHTML={{ __html: reflection }}
            className="rich-text m-auto max-w-150"
          ></article>
        </section>
      </section>
    </>
  );
}
