"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <header
      className="m-4 flex flex-row items-center justify-between font-sans md:m-auto md:my-4 md:w-180 lg:w-220 lg:text-lg"
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <Link href={"/"}>
        <article className="text-3xl lg:text-4xl">fiona.</article>
      </Link>
      <article>
        <nav>
          <ul className="flex flex-row">
            <Link href="/">
              <li
                className={`mx-2 [&.active]:border-b-2 [&.active]:border-gold-300 [&.active]:font-bold [&.active]:shadow-underline ${pathname === "/" || pathname.includes("work") ? "active" : ""} duration-200 ease-in-out hover:border-b-2 hover:border-gold-300 hover:transition-all hover:duration-200 hover:ease-in-out`}
              >
                <span>work</span>
              </li>
            </Link>
            <Link href="/contact">
              <li
                className={`ml-2 [&.active]:border-b-2 [&.active]:border-gold-300 [&.active]:font-bold [&.active]:shadow-underline ${pathname === "/contact" ? "active" : ""} duration-200 ease-in-out hover:border-b-2 hover:border-gold-300 hover:transition-all hover:duration-200 hover:ease-in-out`}
              >
                <span>contact</span>
              </li>
            </Link>
          </ul>
        </nav>
      </article>
    </header>
  );
}
