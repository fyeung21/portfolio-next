"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <section className="font-sans text-shadow-lg m-4 flex flex-row items-center justify-between">
      <article className="text-3xl">fiona.</article>
      <article>
        <nav>
          <ul className="flex flex-row">
            <Link href="/">
              <li
                className={`mx-2 [&.active]:border-b-2 [&.active]:border-gold-300 [&.active]:shadow-underline [&.active]:font-bold ${pathname === "/" ? "active" : ""}`}>
                work
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`ml-2 [&.active]:border-b-2 [&.active]:border-gold-300 [&.active]:shadow-underline [&.active]:font-bold ${pathname === "/about" ? "active" : ""}`}>
                about
              </li>
            </Link>
          </ul>
        </nav>
      </article>
    </section>
  );
}
