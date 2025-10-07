import React from 'react';
import {Logo} from "@/components/logo";
import Image from "next/image";
import {SiInstagram, SiFacebook} from "react-icons/si";
import {cn} from "@/lib/utils";

const orgs = {
  Lapikud: [
    "https://lapikud.ee",
    "assets/lapikud-logo.svg",
    "--primary"
  ],
  "Tallinna Tehnikaülikooli Robotiklubi": [
    "https://robotiklubi.ee",
    "assets/Robotiklubi-logo.png",
    "",
  ],
  "Tallinna Tööstushariduskeskus": [
    "https://tthk.ee",
    "assets/TTHK-logo.png",
    "--background",
  ],
  "Kspace": [
    "https://k-space.ee",
    "assets/kspace-logo1.svg",
    "--alpha-0",
  ],
};

export const Footer = () => (

  <div
    className="bg-secondary flex flex-col justify-center sm:justify-between px-6 py-8 md:px-12 md:py-16 gap-4 md:gap-8"
  >
    <div
      id="logos"
      className="flex md:items-center gap-8 md:gap-0 justify-between flex-col md:flex-row"
    >
      <div className="flex flex-col items-start md:items-center">
        <Logo
          className="not-sm:hidden w-full h-full items-center"
          imgClassName="not-sm:hidden md:size-12 lg:size-12 mr-2"
          textClassName="hidden lg:inline-block text-secondary-foreground lg:text-l"/>
      </div>

      <div className="flex-wrap">
        <div
          className={cn(
            "flex flex-wrap lg:h-24 not-lg:bottom-0 w-full",
            "h-auto *:h-12",
            "lg:justify-start gap-4",
            "lg:px-25 lg:container"
          )}>
          {...Object.entries(orgs).map(([org, [link, src, color, display]]) => (
            <div
              key={org}
              className={cn(`px-2 py-2 h-full lg:max-w-fit flex items-center justify-center rounded-full ${display}`)}
              style={color ? {backgroundColor: `var(${color})`} : undefined}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center relative z-20 px-4"
              >
                <Image
                  src={src}
                  alt={org}
                  width={240}
                  height={120}
                  className={cn(`max-w-full max-h-full object-contain max-w-fit`)}
                  style={{objectFit: "contain"}}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
      id="contact"
      className="flex flex-wrap text-accent"
    >
      <div className="pr-12 mb-4">
        <h4 className="text-l font-syncopate font-bold mb-4">
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
        <h4 className="text-l font-syncopate font-bold mb-4">
          Sotsiaalmeedia
        </h4>

        <div className="flex">
          <a
            href="https://www.instagram.com/lapikud"
            target="_blank"
            className="mx-4"
            rel="noopener noreferrer"
          >
            <SiInstagram
              title="Instagram"
              size={"2em"}
              className="hover:text-primary transition"/>
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
              className="hover:text-primary transition"/>
          </a>

        </div>
      </div>
    </div>
    <div className="flex items-center justify-center text-primary font-bold font-syncopate">
      © 2025 MTÜ Lapikud
    </div>
  </div>

);
