import Image from "next/image";

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
  platform: string;
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
  platform,
  technologies,
  keyFeatures,
  screenshots,
  reflection,
}: ProjectSingleProps) {
  return (
    <>
      <article className="relative w-auto h-50 overflow-hidden">
        <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
      </article>
      <section className="m-4 mb-10">
        <section>
          <h2 className="text-2xl my-4">{title}</h2>
          <p>{description}</p>
          <article className="my-4">
            <article className="my-4">
              <h3 className="text-xl capitalize">platforms</h3>
              <p>{platform}</p>
            </article>
            <article className="my-4">
              <h3 className="text-xl capitalize">technologies</h3>
              <ul className="list-inside list-none marker:content-['✦']">
                {technologies.map((technology, id) => (
                  <li key={id}>
                    <span className="mx-2 leading-8">{technology}</span>
                  </li>
                ))}
              </ul>
            </article>
          </article>
          <article>
            <a href={url}>
              <p className="ring-2 rounded-2xl p-4 text-lg text-center w-50 m-auto my-8">
                live site
              </p>
            </a>
            <a href={github}>
              <p className="ring-2 rounded-2xl p-4 text-lg text-center w-50 m-auto my-8">github</p>
            </a>
          </article>
        </section>
        <section>
          <article className="border-b-2 border-gold-300 shadow-underline my-4">
            <h2 className="text-2xl my-2">key features</h2>
          </article>
          {keyFeatures.map((feature, id) => (
            <article key={id} className="py-4">
              <article className="relative w-auto h-50 rounded-2xl overflow-hidden">
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
        </section>
        <section>
          <article className="border-b-2 border-gold-300 shadow-underline my-4">
            <h2 className="text-2xl my-2">screenshots</h2>
          </article>
          {screenshots.map((screen, id) => (
            <article key={id} className="py-4">
              <article className="relative w-auto h-50 rounded-2xl overflow-hidden">
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
