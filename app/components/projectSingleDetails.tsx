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
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>platforms</h3>
      <p>{platform}</p>
      <h3>technologies</h3>
      <ul>
        <li>{technologies[0]}</li>
        <li>{"text"}</li>
      </ul>
      <article>
        <a href={url}>live site</a>
        <a href={github}>github</a>
      </article>
      <article>
        <h2>key features</h2>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image
            className="object-cover"
            src={keyFeatures[0].imgSrc}
            alt={keyFeatures[0].imgAltDesc}
            fill={true}
            priority
          />
        </article>
        <p>{keyFeatures[0].description}</p>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image
            className="object-cover"
            src={"/ph-shop.jpg"}
            alt={"imgAltDesc"}
            fill={true}
            priority
          />
        </article>
        <p>textskajnflsaf</p>
      </article>
      <article>
        <h2>screenshots</h2>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image
            className="object-cover"
            src={screenshots[0].imgSrc}
            alt={screenshots[0].imgAltDesc}
            fill={true}
            priority
          />
        </article>
        <p>{screenshots[0].caption}</p>
      </article>
      <article>
        <h2>reflection</h2>
        <p>{reflection}</p>
      </article>
    </>
  );
}
