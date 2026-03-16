export default function Contact() {
  return (
    <section className="mx-4 my-20 px-4 sm:mx-auto sm:w-120 md:w-180 lg:w-220">
      <h2 className="my-4 text-2xl lg:text-3xl">contact me</h2>
      <p>
        Filling this form will send an email to me. You may also reach me
        through{" "}
        <a
          href="https://ca.linkedin.com/"
          className="font-bold hover:underline"
          target="_blank"
        >
          <span>linkedin</span>
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/fyeung21"
          className="font-bold hover:underline"
          target="_blank"
        >
          <span>github</span>
        </a>
        !
      </p>
      <article className="my-4">
        <p>contact form here</p>
      </article>
    </section>
  );
}
