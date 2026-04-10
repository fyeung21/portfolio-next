import { Project } from "@/public/lib/projectsList";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(project: Project) {
  return (
    <article className="py-2">
      <Link href={`/work/${project.slug}`}>
        <section className="relative h-50 w-auto overflow-hidden rounded-2xl hover:border-amber-200 hover:shadow-card hover:ring-3 lg:h-60">
          <Image
            className="object-cover"
            src={project.imgSrc}
            alt={project.imgAltDesc}
            fill={true}
            priority
          />
        </section>
      </Link>
      <section className="relative h-45 px-2 py-4">
        <h3 className="text-2xl">{project.title}</h3>
        <p className="my-2">{project.cardBrief}</p>
        <article className="absolute right-2 bottom-0">
          <ul className="flex flex-row justify-end">
            {project.cardTech.map((techItem, id) => (
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
