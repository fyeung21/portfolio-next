const list = [
  { label: "your name", type: "text", name: "name" },
  { label: "your email", type: "email", name: "email" },
  { label: "subject", type: "text", name: "subject" },
];

export default function ContactForm() {
  return (
    <section>
      <form name="contact" method="POST" data-netlify="true">
        {list.map((item, id) => (
          <p key={id}>
            <label>{item.label}</label>
            <input type={item.type} name={item.name} />
          </p>
        ))}
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
