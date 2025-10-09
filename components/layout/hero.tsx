/** @format */
import {Calendar, MapPin} from "lucide-react";
import {Dec} from "@/components/Dec";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Logo} from "../logo";

const orgs = {
  Lapikud: ["https://lapikud.ee", "assets/lapikud-logo.svg", "--primary"],
  "Tallinna Tööstushariduskeskus": [
    "https://tthk.ee",
    "assets/TTHK-logo.png",
    "--background",
  ],
  "Tallinna Tehnikaülikooli Robotiklubi": [
    "https://robotiklubi.ee",
    "assets/Robotiklubi-logo.png",
    "--robot-club-color",
  ],
  "K-space": [
    "https://k-space.ee",
    "assets/kspace-logo2.svg",
    "--kspace-color",
  ],
};

export const Hero = () => (
  <section className="w-full flex relative items-center justify-start md:pt-20">
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-1">
      <div className="hidden xl:block w-2/5 h-full min-h-screen absolute right-0">
        <Dec direction="inverse"/>
      </div>
      <div className="w-full h-full relative">
        <div className="z-2 w-full absolute top-0 left-0 h-full bg-secondary/67 backdrop-blur-[2px]"/>
        <Image
          src="assets/hero.png"
          alt="hero"
          fill={true}
          className="w-full h-full z-0 object-cover bg-center scale-105 bg-fixed"
        />
      </div>
    </div>

    {/* Main content */}
    <div
      className="w-full h-full z-10 flex justify-between flex-col gap-4 lg:gap-8 relative text-secondary-foreground lg:py-48">
      {/* Main section */}
      <div className="flex flex-col gap-4 lg:gap-8 px-8 lg:px-20 container py-32">
        <div className="flex flex-col sm:gap-4">
          <Logo
            className="lg:hidden flex items-center"
            imgClassName="sm:hidden size-10"
            textClassName="text-lg sm:hidden"
          />
          <h1 className="font-syncopate text-2xl md:text-4xl lg:text-6xl font-black">
            Kas midagi on katki?
            <br/>
            Parandame koos!
          </h1>
        </div>
        <p className="md:text-xl">
          Elektroonikaseadmeid ei ole vaja ära visata! Loome koos jätkusuutlikku tulevikku!
        </p>
        <div
          className="**:font-syncopate items-center px-4 max-w-full py-3 lg:px-10 lg:py-5 bg-primary w-max flex gap-4 lg:gap-8">
          <div className="flex items-center gap-1 lg:gap-2.5 ">
            <Calendar className="not-sm:size-3 -translate-y-0.25"/>
            <p className="font-bold text-white not-sm:text-[9px] md:text-xs lg:text-2xl">
              8. Nov 2025
            </p>
          </div>
          <div className="flex items-center gap-1 lg:gap-2.5 ">
            <MapPin className="not-sm:size-3 -translate-y-0.25"/>
            <a
              href="https://maps.app.goo.gl/B77ZdAA7KW3k3mze6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-secondary-foreground hover:underline not-sm:text-[9px] md:text-xs lg:text-2xl relative z-20"
            >
              Taltech peamaja kohvik
            </a>
          </div>
        </div>
      </div>

      {/* Orgs */}
      <div
        className={cn(
          "flex flex-row not-lg:flex-col w-full",
          // "h-auto *:h-16",
          // this is also an option...but we are experimenting
          // ' flex not-lg:flex-col h-16 lg:h-24 not-lg:bottom-0 not-lg:absolute w-full gap-x-5 *:rounded-2xl',
          "flex-wrap lg:justify-start lg:gap-4",
          "lg:px-20 lg:container",
          "xl:w-4/5"
        )}
      >
        {Object.entries(orgs).map(([org, [link, src, color, display]]) => (
          <div
            key={org}
            className={cn(
              `h-[9ch] px-8 py-2 lg:py-2 w-full lg:max-w-fit bg-black flex items-center justify-center lg:rounded-full ${display} hover:opacity-75 transition-all`
            )}
            style={color ? {backgroundColor: `var(${color})`} : undefined}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center relative z-20 filter"
            >
              <Image
                src={src}
                alt={org}
                // Let the anchor control layout; avoid w-full/h-full on Image to prevent oversized logos that exceed responsive breakpoints
                width={240}
                height={120}
                className={cn(
                  `max-w-full max-h-full object-contain ${
                    display
                      ? "lg:max-w-fit"
                      : "sm:max-w-[220px] lg:max-w-[320px]"
                  }`
                )}
                style={{objectFit: "contain"}}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
