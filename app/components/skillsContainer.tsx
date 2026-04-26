import type { SkillCategory } from "@/public/lib/skillsList";

export type SkillsContainerProps = {
  skillsList: SkillCategory[];
};

export default function SkillsContainer({ skillsList }: SkillsContainerProps) {
  return (
    <section
      className="m-auto my-12 max-w-100 tracking-wide sm:max-w-none"
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="1500"
    >
      <article className="border-b-2 border-gold-300 shadow-underline">
        <h2 className="mb-2 text-3xl lg:text-4xl">skills</h2>
      </article>
      {skillsList.length > 0 ? (
        <ul className="sm:flex sm:flex-row sm:justify-between">
          {skillsList.map((skillCategory, id) => (
            <li key={id} className="my-6 mb-8">
              <h3 className="text-xl">{skillCategory.title}</h3>
              <ul className="list-inside list-none marker:content-['✦']">
                {skillCategory.items.map((skill, id) => (
                  <li key={id}>
                    <span className="mx-2 leading-8">{skill}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
