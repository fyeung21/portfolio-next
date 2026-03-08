"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

export type project = {
  title: string;
  imgSrc: string;
  imgAltDesc: string;
};

export type CarouselProps = {
  itemList: project[];
};

export function Carousel({ itemList }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const logSelectedSnap = (emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.previousScrollSnap());
  };
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", logSelectedSnap);
  }, [emblaApi]);

  return (
    <section className="embla">
      <article className="embla__viewport overflow-hidden py-4" ref={emblaRef}>
        <section className="embla__container flex flex-row touch-pan-y touch-pinch-zoom">
          {itemList.map((item, id) => (
            <article key={id} className="embla__slide basis-64 grow-0 shrink-0 mx-4">
              <article className="relative h-40 rounded-2xl overflow-hidden ">
                <Image
                  className="object-cover"
                  src={item.imgSrc}
                  alt={item.imgAltDesc}
                  fill={true}
                  priority
                />
              </article>
              <h3 className="text-2xl m-2">{item.title}</h3>
            </article>
          ))}
        </section>
      </article>
      <article>
        <button className="embla__prev border-2" onClick={goToPrev}>
          Scroll to prev
        </button>
        <button className="embla__next border-2" onClick={goToNext}>
          Scroll to next
        </button>
      </article>
    </section>
  );
}
