export type SkillCategory = {
  id: number;
  title: string;
  items: string[];
};

export const skillsList = [
  {
    id: 0,
    title: "Front-end",
    items: [
      "HTML",
      "CSS",
      "Sass",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "NextJS",
    ],
  },
  {
    id: 1,
    title: "Back-end",
    items: ["PHP", "Postgres", "GraphQL"],
  },
  {
    id: 2,
    title: "Tools and Systems",
    items: ["Wordpress", "Github", "Figma"],
  },
];
