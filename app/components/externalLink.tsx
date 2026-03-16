export type externalLinkProps = {
  url: string;
  label: string;
};

export default function ExternalLink({ url, label }: externalLinkProps) {
  return (
    <article className="m-auto my-8 w-40 sm:my-0 sm:mb-8">
      <a href={url} className="m-auto w-40" target="_blank">
        <p className="rounded-2xl p-4 text-center text-lg font-semibold shadow-inset ring-2 hover:shadow-inset-fill hover:ring-3 hover:text-shadow-indigo-950 hover:text-shadow-md">
          {label}
        </p>
      </a>
    </article>
  );
}
