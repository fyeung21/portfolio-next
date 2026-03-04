import Image from "next/image";
import ExternalLink from "./externalLink";

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
  return (
    <>
      <article className="relative h-60 overflow-hidden sm:h-70 md:h-80">
        <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
      </article>
      <section className="m-4 mb-10">
        <section>
          <h2 className="text-3xl my-4">{title}</h2>
          <p>{description}</p>
          <article className="my-8">
            <h3 className="text-xl capitalize">technologies</h3>
            <ul className="list-inside list-none marker:content-['✦'] sm:flex sm:flex-row">
              {technologies.map((technology, id) => (
                <li key={id}>
                  <span className="mx-2 leading-8">{technology}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="py-2 sm:flex sm:flex-row sm:justify-evenly">
            {url ? <ExternalLink url={url} label={"live site"} /> : null}
            {github ? <ExternalLink url={github} label={"github"} /> : null}
          </article>
        </section>
        <section className="my-12">
          <article className="border-b-2 border-gold-300 shadow-underline my-4">
            <h2 className="text-2xl my-2">key features</h2>
          </article>
          <article className="sm:grid sm:grid-cols-2 sm:gap-8">
            {keyFeatures.map((feature, id) => (
              <article key={id} className="py-4">
                <article className="relative w-auto h-60 sm:h-50 rounded-2xl overflow-hidden">
                  <Image
                    className="object-cover"
                    src={feature.imgSrc}
                    alt={feature.imgAltDesc}
                    fill={true}
                    priority
                  />
                </article>
                <h3 className="font-bold capitalize my-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </article>
        </section>
        <section>
          <article className="border-b-2 border-gold-300 shadow-underline my-4">
            <h2 className="text-2xl my-2">screenshots</h2>
          </article>
          {screenshots.map((screen, id) => (
            <article key={id} className="py-4">
              <article className="relative w-auto h-60 sm:h-90 rounded-2xl overflow-hidden">
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
        <article className="border-b-2 border-gold-300 shadow-underline my-4">
          <h2 className="text-2xl my-2">reflection</h2>
        </article>
        <p>{reflection}</p>
      </section>
    </>
  );
}
