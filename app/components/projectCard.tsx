import Image from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
  id: number;
  title: string;
  imgSrc: string;
  imgAltDesc: string;
  cardBrief: string;
  cardTech: string[];
  slug: string;
  // description: string;
  // url: string;
  // github: string;
  // platform: string;
  // technologies: string[];
  // keyFeatures: keyFeature[];
  // screenshots: screenshot[];
  // reflection: string;
};

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
        <article className="relative w-auto h-50 overflow-hidden rounded-2xl">
          <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
        </article>
      </Link>
      <article>
        <h3>{title}</h3>
        <p>{cardBrief}</p>
        <ul>
          {cardTech.map((techItem, id) => (
            <li key={id}>{techItem}</li>
          ))}
        </ul>
      </article>
    </>
  );
}
