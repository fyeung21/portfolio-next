export type externalLinkProps = {
  url: string;
  label: string;
};

export default function ExternalLink({ url, label }: externalLinkProps) {
  return (
    <article className="w-40 m-auto my-8 sm:my-0 sm:mb-8">
      <a href={url} className="w-40 m-auto">
        <p className="ring-2 rounded-2xl p-4 font-semibold text-lg text-center shadow-inset hover:ring-3 hover:shadow-inset-fill hover:text-shadow-md hover:text-shadow-indigo-950">
          {label}
        </p>
      </a>
    </article>
  );
}
