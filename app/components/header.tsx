import Link from "next/link";

export default function Header() {
  return (
    <section>
      <article>fiona.</article>
      <article>
        <nav>
          <ul>
            <Link href="/">
              <li>work</li>
            </Link>
            <Link href="/about">
              <li>about</li>
            </Link>
          </ul>
        </nav>
      </article>
    </section>
  );
}
