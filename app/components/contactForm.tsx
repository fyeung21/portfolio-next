export default function ContactForm() {
  return (
    <section>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>{"name"}</label>
          <input type={"text"} name={"name"} />
        </p>
        <p>
          <label>{"email"}</label>
          <input type={"email"} name="email" />
        </p>
        <p>
          <label>{"subject"}</label>
          <input type={"text"} name={"subject"} />
        </p>
        <p>
          <label>{"message"}</label>
          <textarea name={"message"}></textarea>
        </p>
        <p>
          <button type="submit">{"send"}</button>
        </p>
      </form>
    </section>
  );
}
