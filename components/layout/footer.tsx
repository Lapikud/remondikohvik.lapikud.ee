import React from 'react';
import {Logo} from "@/components/logo";
import Image from "next/image";
import { SiInstagram, SiFacebook } from "react-icons/si";

const orgs = {
  Lapikud: [
    "https://lapikud.ee",
    "assets/lapikud-logo.svg",
    "--primary"
  ],
  "Tallinna Tööstushariduskeskus": [
    "https://tthk.ee",
    "assets/TTHK-logo.png",
    "--background",
  ],
  "Tallinna Tehnikaülikool Robotiklubi": [
    "https://robotiklubi.ee",
    "assets/Robotiklubi-logo.png",
    "",
  ],
};

export const Footer = () => (

  <div
    className="bg-secondary flex flex-col justify-center sm:justify-between px-6 py-8 md:px-12 md:py-16 gap-4 md:gap-8">
    <div
      id="logos"
      className="flex md:items-center gap-8 md:gap-0 justify-between "
    >
      <div className="flex flex-col items-start md:items-center">
        <Logo
          className="not-sm:hidden w-full h-full items-center"
          imgClassName="not-sm:hidden md:size-12 lg:size-12 mr-2"
          textClassName="hidden lg:inline-block text-secondary-foreground lg:text-l"
        />
      </div>
      <div className="flex flex-row">
        {Object.entries(orgs).map(([org, [link, src, color]]) => (
          <div
            key={org}
            className="px-8 py-2 lg:py-2 w-full h-full lg:max-w-fit bg-black flex items-center justify-center"
            style={color ? {backgroundColor: `var(${color})`} : undefined}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center relative z-20"
            >
              <Image
                src={src}
                alt={org}
                width={240}
                height={120}
                className="max-w-full max-h-full object-contain sm:max-w-[220px] lg:max-w-[320px]"
                style={{objectFit: "contain"}}
              />
            </a>
          </div>
        ))}
      </div>
    </div>

    <div
      id="contact"
      className="flex flex-wrap text-accent"
    >
      <div className="pr-12 ">
        <h4 className="text-l font-syncopate font-bold">
          MTÜ Lapikud
        </h4>

        <ul>
          <li>Aadress: Akadeemia tee 5, 12616 Tallinn, Eesti</li>
          <li>E-post: lapikud@lapikud.ee</li>
          <li>Telefon: +372 58 160 799</li>
          <li>Messenger: m.me/Lapikud</li>
          <li>Reg. kood: 801 67 145</li>
          <li>Swedbank: EE812200221019551756</li>
        </ul>
      </div>

      <div className="pl-5 pr-5 ">
        <h4 className="text-l font-syncopate font-bold">
          Meie sotsiaalid
        </h4>
        
        <div className= "flex">
          <a
            href="https://www.instagram.com/lapikud"
            target="_blank"
            className="mx-4"
            rel="noopener noreferrer"
          >
            <SiInstagram
              title="Instagram"
              size={"2em"}
              className="hover:text-primary transition"
            />
          </a>
          
          <a
            href="https://www.facebook.com/Lapikud/"
            target="_blank"
            className="mx-4"
            rel="noopener noreferrer"
          >
            <SiFacebook
              title="Facebook"
              size={"2em"}
              className="hover:text-primary transition" 
            />
          </a>
          
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center text-primary font-bold font-syncopate">
      © 2025 MTÜ Lapikud
    </div>

  </div>
);