import Image from "next/image";

export default function ProjectSingleDetails() {
  return (
    <>
      <article className="relative w-auto h-50 overflow-hidden">
        <Image
          className="object-cover"
          src={"/ph-shop.jpg"}
          alt={"imgAltDesc"}
          fill={true}
          priority
        />
      </article>
      <h2>{"project title"}</h2>
      <p>{"description"}</p>
      <h3>technologies</h3>
      <ul>
        <li>{"text"}</li>
        <li>{"text"}</li>
      </ul>
      <article>
        <a href="">live site</a>
        <a href="">github</a>
      </article>
      <article>
        <h2>key features</h2>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image
            className="object-cover"
            src={"/ph-shop.jpg"}
            alt={"imgAltDesc"}
            fill={true}
            priority
          />
        </article>
        <p>textskajnflsaf</p>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image
            className="object-cover"
            src={"/ph-shop.jpg"}
            alt={"imgAltDesc"}
            fill={true}
            priority
          />
        </article>
        <p>textskajnflsaf</p>
      </article>
      <article>
        <h2>screenshots</h2>
        <article className="relative w-auto h-50 overflow-hidden">
          <Image
            className="object-cover"
            src={"/ph-shop.jpg"}
            alt={"imgAltDesc"}
            fill={true}
            priority
          />
        </article>
        <p>{"caption here"}</p>
      </article>
      <article>
        <h2>reflection</h2>
        <p>textskajnflsaf</p>
      </article>
    </>
  );
}
