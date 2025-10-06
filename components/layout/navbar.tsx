import Link from "next/link";
import { Logo } from "../logo";

const links = {
  // name: link
  meist: "#meist",
  info: "#info",
  ajalugu: "#ajalugu",
  kontakt: "#kontakt",
};

export const Navbar = () => (
  <header className="w-full flex justify-between absolute border min-h-fit h-20 top-0 items-center xl:w-4/5">
    <Logo
      className="px-4 not-sm:hidden lg:px-8 w-full h-full items-center"
      imgClassName="not-sm:hidden size-16"
      textClassName="hidden sm:inline-block text-secondary-foreground sm:text-xl lg:text-2xl"
    />
    <nav className="z-50 xl:mr-6 not-sm:justify-center justify-end flex w-full">
      <ul className="flex items-center h-full sm:px-10">
        {Object.entries(links).map(([name, link]) => (
          <li
            key={name}
            className="inline-block not-sm:mx-4 mx-2 lg:mx-6 text-secondary-foreground hover:text-primary transition-colors"
          >
            <Link href={link} className="font-medium text-lg lg:text-xl">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
