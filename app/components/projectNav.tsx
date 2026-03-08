import { Carousel } from "@/app/components/carousel";
import { projectsList } from "@/public/lib/projectsList";

export default function ProjectNav() {
  return (
    <section className="max-w-100 my-16 m-auto sm:max-w-none md:w-180 lg:w-220">
      <h2 className="text-2xl my-2 mx-4 font-bold italic sm:mx-0">my other work</h2>
      <Carousel itemList={projectsList} />
    </section>
  );
}
