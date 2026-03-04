export type externalLinkProps = {
  url: string;
  label: string;
};

export default function ExternalLink({ url, label }: externalLinkProps) {
  return (
    <article className="w-40 m-auto my-8 md:my-0 md:mb-8">
      <a href={url} className="w-40 m-auto">
        <p className="ring-2 rounded-2xl p-4 text-lg text-center shadow-inset hover:font-semibold hover:shadow-inset-fill">
          {label}
        </p>
      </a>
    </article>
  );
}
