export type FooterProps = {
  copyrightYear: string;
};

export default function Footer({ copyrightYear }: FooterProps) {
  return (
    <footer className="font-sans m-4 md:py-4 flex flex-row items-center justify-between md:w-180 md:m-auto lg:w-220 lg:text-lg">
      <p className="text-sm lg:text-md">&copy; {copyrightYear} Fiona Yeung</p>
      <ul className="flex flex-row">
        <a href="https://ca.linkedin.com/">
          <li className="px-2 hover:border-b-2 hover:border-gold-300">linkedin</li>
        </a>
        <a href="https://github.com/fyeung21">
          <li className="pl-2 hover:border-b-2 hover:border-gold-300">github</li>
        </a>
      </ul>
    </footer>
  );
}
