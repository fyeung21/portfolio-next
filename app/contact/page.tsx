"use client";

import { useEffect } from "react";
import ContactForm from "../components/contactForm";
import AOS from "aos";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section
      className="mb-20"
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="1200"
    >
      <article className="m-auto mt-10 mb-4 max-w-110 p-4 sm:w-140 sm:max-w-none md:mb-8 md:w-160 lg:mb-20">
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
      </article>
      <article className="mx-4 my-4">
        <ContactForm />
      </article>
    </section>
  );
}
