import { skillsList } from "@/public/lib/skillsList";

export default function Home() {
  return (
    <section className="m-4">
      <section className="my-10 p-4 sm:w-120 sm:m-auto sm:p-6">
        <p>
          "Hi there! My name is Fiona and I am a front-end web developer who takes great interest in
          learning how to write clear and efficient modular code. Please hover over and click on the
          thumbnails below to check out my projects!"
        </p>
      </section>
      <section>{"map list of projects here"}</section>
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
    </section>
  );
}
