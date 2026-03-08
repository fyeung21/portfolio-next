import { Carousel } from "@/app/components/carousel";
import { projectsList } from "@/public/lib/projectsList";

export default function ProjectNav() {
  return (
    <section className="max-w-100 m-auto sm:max-w-none md:w-180 lg:w-220">
      <Carousel itemList={projectsList} />
    </section>
  );
}
