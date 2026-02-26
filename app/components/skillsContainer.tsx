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
    <section>
      <h2>skills</h2>
      <article>
        <ul>
          {skillsList.map((skillCategory, id) => (
            <li key={id}>
              <h3>{skillCategory.title}</h3>
              <ul>
                {skillCategory.skills.map((skill, id) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
