import Image from "next/image";

export default function ProjectCard() {
  return (
    <>
      <article className="relative w-auto h-50 overflow-hidden">
        <Image
          className="object-cover"
          src={"/ph-shop.jpg"}
          alt={"heroImgAlt"}
          fill={true}
          priority
        />
      </article>
      <article>
        <h3>{"project.title"}</h3>
        <p>{"project.brief"}</p>
        <p>{"project.tags"}</p>
      </article>
    </>
  );
}
