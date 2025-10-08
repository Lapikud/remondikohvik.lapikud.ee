import Link from "next/link";
import { Logo } from "../logo";

const links = {
  // name: link
  meist: "#meist",
  info: "#info",
  ajalugu: "#ajalugu",
  kontakt: "#footer",
};

export const Navbar = () => (
  <header className="w-full flex justify-between absolute border min-h-fit h-16 xs:h-20 top-0 items-center xl:w-4/5">
    <Logo
      className="px-2 xs:px-4 not-sm:hidden lg:px-8 w-full h-full items-center"
      imgClassName="not-sm:hidden size-12 xs:size-16"
      textClassName="hidden sm:inline-block text-secondary-foreground sm:text-xl lg:text-2xl"
    />
    <nav className="z-50 xl:mr-6 not-sm:justify-center justify-end flex w-full">
      <ul className="flex items-center h-full px-2 xs:px-4 sm:px-10">
        {Object.entries(links).map(([name, link]) => (
          <li
            key={name}
            className="inline-block mx-1 xs:mx-2 sm:mx-4 lg:mx-6 text-secondary-foreground hover:text-primary transition-colors"
          >
            <Link href={link} className="font-medium text-xs xs:text-sm sm:text-lg lg:text-xl">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
