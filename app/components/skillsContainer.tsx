export type SkillCategory = {
  id: number;
  title: string;
  skills: string[];
};

export type SkillsContainerProps = {
  skillsList: SkillCategory[];
};

export default function SkillsContainer({ skillsList }: SkillsContainerProps) {
  return (
    <section className="tracking-wide">
      <article className="border-b-2 border-gold-300 shadow-underline">
        <h2 className="text-3xl mb-2">skills</h2>
      </article>
      <ul>
        {skillsList.map((skillCategory, id) => (
          <li key={id} className="my-6 mb-8">
            <h3 className="text-xl">{skillCategory.title}</h3>
            <ul className="list-inside list-none marker:content-['✦']">
              {skillCategory.skills.map((skill, id) => (
                <li key={id}>
                  <span className="mx-2 leading-8">{skill}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
