export type FooterProps = {
  copyrightYear: string;
};

export default function Footer({ copyrightYear }: FooterProps) {
  return (
    <footer className="m-4 flex flex-row items-center justify-between font-sans md:m-auto md:w-180 md:py-4 lg:w-220 lg:text-lg">
      <p className="lg:text-md text-sm">&copy; {copyrightYear} Fiona Yeung</p>
      <ul className="flex flex-row">
        <a href="https://ca.linkedin.com/" target="_blank">
          <li className="px-2">
            <span className="hover:border-b-2 hover:border-gold-300">
              linkedin
            </span>
          </li>
        </a>
        <a href="https://github.com/fyeung21" target="_blank">
          <li className="pl-2">
            <span className="hover:border-b-2 hover:border-gold-300">
              github
            </span>
          </li>
        </a>
      </ul>
    </footer>
  );
}
