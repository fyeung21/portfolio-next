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
    <article className="py-2">
      <section className="relative w-auto h-50 overflow-hidden rounded-2xl">
        <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
      </section>
      <section className="my-4">
        <Link href={`/work/${slug}`}>
          <h3 className="text-2xl hover:underline">{title}</h3>
        </Link>
        <p className=" my-2">{cardBrief}</p>
        <ul className="flex flex-row justify-end">
          {cardTech.map((techItem, id) => (
            <li key={id} className="italic mr-2 last:mr-0">
              {techItem}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
