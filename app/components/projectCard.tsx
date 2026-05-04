import { Project } from "@/public/lib/projectsList";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard(project: Project) {
  return (
    <article className="py-2">
      <Link href={`/work/${project.slug}`}>
        <section className="group">
          <section className="relative h-50 w-auto overflow-hidden rounded-2xl duration-400 ease-in group-hover:border-amber-200 group-hover:shadow-card group-hover:ring-3 group-hover:transition-all group-hover:duration-400 group-hover:ease-out lg:h-60">
            <Image
              className="object-cover duration-500 ease-in group-hover:scale-105 group-hover:transition-all group-hover:duration-400 group-hover:ease-out"
              src={project.imgSrc}
              alt={project.imgAltDesc}
              fill={true}
              priority
            />
          </section>

          <section className="relative h-45 px-2 py-4">
            <h3 className="text-2xl">
              <span className="duration-400 ease-in group-hover:transition-all group-hover:duration-400 group-hover:ease-out">
                {project.title}
              </span>
            </h3>
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
        </section>
      </Link>
    </article>
  );
}
