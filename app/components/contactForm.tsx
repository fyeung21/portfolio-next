import { SubmitEvent, useState } from "react";

const list = [
  { label: "your name", type: "text", name: "name" },
  { label: "your email", type: "email", name: "email" },
  { label: "subject", type: "text", name: "subject" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const handleFormSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData.toString()).toString(),
      });

      if (res.status === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <section className="m-auto max-w-110 rounded-xl px-4 py-4 text-sm md:w-140 md:max-w-none md:px-8 md:shadow-inset md:ring-2">
      <form name="contact" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="feedback" />
        {list.map((item, id) => (
          <p
            key={id}
            className="mt-4 mb-6 flex max-w-80 flex-col sm:w-80 sm:max-w-none md:my-6"
          >
            <label className="mb-2 font-semibold">{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              className="rounded-xl p-2 text-gold-300 ring-2 duration-300 ease-in hover:shadow-card hover:ring-3 hover:transition-all hover:duration-300 hover:ease-out focus-visible:shadow-card focus-visible:ring-3 lg:text-lg"
            />
          </p>
        ))}
        <p className="my-2 flex flex-col">
          <label className="my-2 font-semibold">message</label>
          <textarea
            name="message"
            className="h-40 rounded-xl p-2 text-gold-300 ring-2 duration-300 ease-in hover:shadow-card hover:ring-3 hover:transition-all hover:duration-300 hover:ease-out focus-visible:ring-3 lg:text-lg"
          ></textarea>
        </p>
        <p className="flex justify-center">
          <button
            className="m-auto mt-10 mb-8 w-40 rounded-xl py-2 text-center text-lg font-semibold shadow-inset ring-2 duration-200 ease-out hover:scale-105 hover:shadow-inset-fill hover:ring-3 hover:transition-all hover:duration-200 hover:ease-in hover:text-shadow-indigo-950 hover:text-shadow-md"
            type="submit"
            disabled={status === "pending"}
          >
            send
          </button>
        </p>
        {status === "ok" && <p>Submitted!</p>}
        {status === "error" && <p>{error}</p>}
      </form>
    </section>
  );
}
