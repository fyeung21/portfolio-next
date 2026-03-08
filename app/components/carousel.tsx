"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";

export function Carousel() {
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
      <article className="embla__viewport overflow-hidden" ref={emblaRef}>
        <section className="embla__container flex flex-row touch-pan-y touch-pinch-zoom">
          <article className="embla__slide bg-amber-500 basis-full min-w-0 grow-0 shrink-0">
            Slide 1
          </article>
          <article className="embla__slide basis-full min-w-0 grow-0 shrink-0">Slide 2</article>
          <article className="embla__slide basis-full min-w-0 grow-0 shrink-0">Slide 3</article>
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
