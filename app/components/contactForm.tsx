const list = [
  { label: "your name", type: "text", name: "name" },
  { label: "your email", type: "email", name: "email" },
  { label: "subject", type: "text", name: "subject" },
];

export default function ContactForm() {
  return (
    <section className="m-auto rounded-xl px-8 py-4 text-sm shadow-inset ring-2 sm:w-140">
      <form name="contact" method="POST" data-netlify="true">
        {list.map((item, id) => (
          <p key={id} className="my-4 flex flex-col sm:w-80">
            <label className="mb-2 font-semibold">{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              className="rounded-xl p-2 ring-2 focus:shadow-inset focus-visible:ring-4 focus-visible:ring-amber-200 lg:text-lg"
            />
          </p>
        ))}
        <p className="my-2 flex flex-col">
          <label className="my-2 font-semibold">message</label>
          <textarea
            name="message"
            className="h-40 rounded-xl p-2 ring-2 focus:shadow-inset focus-visible:ring-4 focus-visible:ring-amber-200 lg:text-lg"
          ></textarea>
        </p>
        <p className="flex justify-center">
          <button
            className="m-auto mt-10 mb-8 w-40 rounded-xl py-2 text-center text-lg font-semibold shadow-inset ring-2 hover:shadow-inset-fill hover:ring-3 hover:text-shadow-indigo-950 hover:text-shadow-md"
            type="submit"
          >
            send
          </button>
        </p>
      </form>
    </section>
  );
}
