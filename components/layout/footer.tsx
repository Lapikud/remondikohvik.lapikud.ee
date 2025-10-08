import React from 'react';
import { Logo } from "@/components/logo";
// import Image from "next/image";
import { SiInstagram, SiFacebook } from "react-icons/si";
// import {cn} from "@/lib/utils";

// const orgs = {
//   Lapikud: [
//     "https://lapikud.ee",
//     "assets/lapikud-logo.svg",
//     "--primary"
//   ],
//   "Tallinna Tehnikaülikooli Robotiklubi": [
//     "https://robotiklubi.ee",
//     "assets/Robotiklubi-logo.png",
//     "",
//   ],
//   "Tallinna Tööstushariduskeskus": [
//     "https://tthk.ee",
//     "assets/TTHK-logo.png",
//     "--background",
//   ],
//   "Kspace": [
//     "https://k-space.ee",
//     "assets/kspace-logo1.svg",
//     "--alpha-0",
//   ],
// };

export const Footer = () => (

  <footer id="footer"
    className="bg-secondary flex flex-col justify-center sm:justify-between px-4 xs:px-6 py-6 xs:py-8 md:px-12 md:py-16 gap-3 xs:gap-4 md:gap-8"
  >
    <div
      id="logos"
      className="flex md:items-center gap-6 xs:gap-8 md:gap-0 justify-between flex-col md:flex-row"
    >
      <div className="flex flex-col items-start md:items-center">
        <Logo
          className="not-sm:hidden w-full h-full items-center"
          imgClassName="not-sm:hidden md:size-12 lg:size-12 mr-2"
          textClassName="hidden lg:inline-block text-secondary-foreground lg:text-l" />
      </div>

      {/*<div className="flex-wrap">*/}
      {/*  <div*/}
      {/*    className={cn(*/}
      {/*      "flex flex-wrap lg:h-24 not-lg:bottom-0 w-full",*/}
      {/*      "h-auto *:h-12",*/}
      {/*      "lg:justify-start gap-4",*/}
      {/*      "lg:px-25 lg:container"*/}
      {/*    )}>*/}
      {/*    {...Object.entries(orgs).map(([org, [link, src, color, display]]) => (*/}
      {/*      <div*/}
      {/*        key={org}*/}
      {/*        className={cn(`px-2 py-2 h-full lg:max-w-fit flex items-center justify-center rounded-full ${display}`)}*/}
      {/*        style={color ? {backgroundColor: `var(${color})`} : undefined}*/}
      {/*      >*/}
      {/*        <a*/}
      {/*          href={link}*/}
      {/*          target="_blank"*/}
      {/*          rel="noopener noreferrer"*/}
      {/*          className="w-full h-full flex items-center justify-center relative z-20 px-4"*/}
      {/*        >*/}
      {/*          <Image*/}
      {/*            src={src}*/}
      {/*            alt={org}*/}
      {/*            width={240}*/}
      {/*            height={120}*/}
      {/*            className={cn(`max-w-full max-h-full object-contain max-w-fit`)}*/}
      {/*            style={{objectFit: "contain"}}/>*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>

    <div
      id="contact"
      className="flex flex-wrap text-accent mb-4 xs:mb-6"
    >
      <div className="pr-8 xs:pr-12 mb-4 xs:mb-6">
        <h4 className="text-base xs:text-lg font-syncopate font-bold mb-3 xs:mb-4">
          MTÜ Lapikud
        </h4>

        <ul className="text-xs xs:text-sm space-y-1">
          <li>Aadress: Akadeemia tee 5, 12616 Tallinn, Eesti</li>
          <li>E-post: lapikud@lapikud.ee</li>
          <li>Telefon: +372 58 160 799</li>
          <li>Messenger: m.me/Lapikud</li>
          <li>Reg. kood: 801 67 145</li>
          <li>Swedbank: EE812200221019551756</li>
        </ul>
      </div>

      <div className="">
        <h4 className="text-base xs:text-lg font-syncopate font-bold mb-3 xs:mb-4">
          Sotsiaalmeedia
        </h4>

        <div className="flex">
          <a
            href="https://www.instagram.com/lapikud"
            target="_blank"
            className="mr-4 xs:mr-6"
            rel="noopener noreferrer"
          >
            <SiInstagram
              title="Instagram"
              size={"1.75em"}
              className="hover:text-primary transition" />
          </a>

          <a
            href="https://www.facebook.com/Lapikud/"
            target="_blank"
            className="mr-4 xs:mr-6"
            rel="noopener noreferrer"
          >
            <SiFacebook
              title="Facebook"
              size={"1.75em"}
              className="hover:text-primary transition" />
          </a>

        </div>
      </div>
    </div>
    <div className="flex items-center justify-center text-primary font-bold font-syncopate text-xs xs:text-sm">
      © 2025 MTÜ Lapikud
    </div>
  </footer>

);
