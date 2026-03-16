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
      <article className="embla__viewport overflow-hidden py-4 " ref={emblaRef}>
        <section className="embla__container flex flex-row touch-pan-y touch-pinch-zoom">
          {itemList.map((item, id) => (
            <article
              key={id}
              className="embla__slide basis-64 lg:basis-84 grow-0 shrink-0 mx-4 opacity-100">
              <Link href={item.slug}>
                <article className="relative h-40 lg:h-55 rounded-2xl overflow-hidden hover:ring-3 hover:border-amber-200 hover:shadow-card">
                  <Image
                    className="object-cover"
                    src={item.imgSrc}
                    alt={item.imgAltDesc}
                    fill={true}
                    priority
                  />
                </article>
                <h3 className="text-2xl m-2">{item.title}</h3>
              </Link>
            </article>
          ))}
        </section>
      </article>
      <button
        className="embla__prev ring-2 rounded-2xl shadow-inset p-2 absolute left-4 top-18 hover:ring-3 hover:shadow-inset-fill-less hover:text-amber-200"
        onClick={goToPrev}>
        <ArrowLeftIcon className="size-10" />
      </button>
      <button
        className="embla__next ring-2 rounded-2xl shadow-inset p-2 absolute right-4 top-18 hover:ring-3 hover:shadow-inset-fill-less hover:text-amber-200"
        onClick={goToNext}>
        <ArrowRightIcon className="size-10" />
      </button>
    </section>
  );
}
