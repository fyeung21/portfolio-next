import Image from "next/image";
import Link from "next/link";

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
export type ProjectCardProps = {
  id: number;
  title: string;
  imgSrc: string;
  imgAltDesc: string;
  cardBrief: string;
  cardTech: string[];
  slug: string;
  //   description: string;
  //   url: string;
  //   github: string;
  //   platform: string;
  //   technologies: string[];
  //   keyFeatures: keyFeature[];
  //   screenshots: screenshot[];
  //   reflection: string;
};

//   description,
//   url,
//   github,
//   platform,
//   technologies,
//   keyFeatures,
//   screenshots,
//   reflection,

export default function ProjectCard({
  id,
  title,
  imgSrc,
  imgAltDesc,
  cardBrief,
  cardTech,
  slug,
}: ProjectCardProps) {
  return (
    <>
      <Link href={`/work/${slug}`}>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
        </article>
      </Link>
      <article>
        <h3>{title}</h3>
        <p>{cardBrief}</p>
        <p>{cardTech}</p>
      </article>
    </>
  );
}
