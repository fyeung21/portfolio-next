"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export type project = {
  title: string;
  imgSrc: string;
  imgAltDesc: string;
  slug: string;
};

export type CarouselProps = {
  itemList: project[];
};

export default function Carousel({ itemList }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [ClassNames()]);

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
    <section className="embla relative">
      <article className="embla__viewport overflow-hidden py-4" ref={emblaRef}>
        <section className="embla__container flex touch-pan-y touch-pinch-zoom flex-row">
          {itemList.map((item, id) => (
            <article
              key={id}
              className="embla__slide mx-4 shrink-0 grow-0 basis-64 opacity-100 lg:basis-84"
            >
              <Link href={item.slug}>
                <section className="group">
                  <article className="relative h-40 overflow-hidden rounded-2xl duration-400 ease-in group-hover:border-amber-200 group-hover:shadow-card group-hover:ring-3 group-hover:transition-all group-hover:duration-400 group-hover:ease-out lg:h-55">
                  <Image
                      className="object-cover duration-400 ease-in group-hover:scale-105 group-hover:transition-all group-hover:duration-400 group-hover:ease-out"
                    src={item.imgSrc}
                    alt={item.imgAltDesc}
                    fill={true}
                    priority
                  />
                </article>
                <h3 className="m-2 text-2xl">{item.title}</h3>
                </section>
              </Link>
            </article>
          ))}
        </section>
      </article>
      <button
        className="embla__prev absolute top-18 left-4 rounded-2xl p-2 shadow-inset ring-2 duration-200 ease-in hover:scale-105 hover:text-amber-200 hover:shadow-inset-fill-less hover:ring-3 hover:transition-all hover:duration-200 hover:ease-out"
        onClick={goToPrev}
      >
        <ArrowLeftIcon className="size-10" />
      </button>
      <button
        className="embla__next absolute top-18 right-4 rounded-2xl p-2 shadow-inset ring-2 duration-200 ease-in hover:scale-105 hover:text-amber-200 hover:shadow-inset-fill-less hover:ring-3 hover:transition-all hover:duration-200 hover:ease-out"
        onClick={goToNext}
      >
        <ArrowRightIcon className="size-10" />
      </button>
    </section>
  );
}
