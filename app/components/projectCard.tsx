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
        <section className="relative h-50 w-auto overflow-hidden rounded-2xl duration-400 ease-in hover:border-amber-200 hover:shadow-card hover:ring-3 hover:transition-all hover:duration-400 hover:ease-out lg:h-60">
          <Image
            className="object-cover duration-500 ease-in hover:scale-105 hover:transition-all hover:duration-400 hover:ease-out"
            src={imgSrc}
            alt={imgAltDesc}
            fill={true}
            priority
          />
        </section>
      </Link>
      <section className="relative h-45 px-2 py-4">
        <h3 className="text-2xl">{title}</h3>
        <p className="my-2">{cardBrief}</p>
        <article className="absolute right-2 bottom-0">
          <ul className="flex flex-row justify-end">
            {cardTech.map((techItem, id) => (
              <li key={id} className="mr-2 italic last:mr-0">
                {techItem}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </article>
  );
}
