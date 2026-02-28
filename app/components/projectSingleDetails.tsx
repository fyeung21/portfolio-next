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
      <section>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
        </article>
      </section>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>platforms</h3>
        <p>{platform}</p>
        <h3>technologies</h3>
        <ul>
          {technologies.map((technology, id) => (
            <li key={id}>{technology}</li>
          ))}
        </ul>
        <article>
          <a href={url}>live site</a>
          <a href={github}>github</a>
        </article>
      </section>
      <section>
        <h2>key features</h2>
        {keyFeatures.map((feature, id) => (
          <article key={id}>
            <article className="relative w-auto h-50 overflow-hidden">
              <Image
                className="object-cover"
                src={feature.imgSrc}
                alt={feature.imgAltDesc}
                fill={true}
                priority
              />
            </article>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
      <section>
        <h2>screenshots</h2>
        {screenshots.map((screen, id) => (
          <article key={id}>
            <article className="relative w-auto h-50 overflow-hidden">
              <Image
                className="object-cover"
                src={screen.imgSrc}
                alt={screen.imgAltDesc}
                fill={true}
                priority
              />
            </article>
            <p>{screen.caption}</p>
          </article>
        ))}
      </section>
      <h2>reflection</h2>
      <p>{reflection}</p>
    </>
  );
}
