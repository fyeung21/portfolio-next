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
      <Link href={`/work/${slug}`}>
        <section className="relative w-auto h-50 overflow-hidden rounded-2xl lg:h-60 hover:ring-3 hover:border-amber-200 hover:shadow-card">
          <Image className="object-cover" src={imgSrc} alt={imgAltDesc} fill={true} priority />
        </section>
      </Link>
      <section className="px-2 py-4 relative h-45">
        <h3 className="text-2xl">{title}</h3>
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
