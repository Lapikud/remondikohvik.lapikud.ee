/** @format */
import { Calendar, MapPin } from "lucide-react";
import { Dec } from "@/components/Dec";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Logo } from "../logo";

const orgs = {
  // org-name: [link, src, color]
  Lapikud: ["https://lapikud.ee", "assets/lapikud-logo.svg", "--primary"],
  "Tallinna Tööstushariduskeskus": [
    "https://tthk.ee",
    "assets/TTHK-logo.png",
    "--background",
  ],
  "Tallinna Technikaülikool Robotiklubi": [
    "https://robotiklubi.ee",
    "assets/Robotiklubi-logo.png",
    "--robot-club-color",
  ],
  "Kspace": [
    "https://k-space.ee",
    "assets/kspace-logo1.svg",
    "--alpha-0",
    "hidden lg:block"
  ],
  "Kspace2": [
    "https://k-space.ee",
    "assets/kspace-logo2.svg",
    "--kspace-color",
    "hidden not-lg:block"
  ],
};

export const Hero = () => (
  <section className="w-full h-fit min-h-96 flex relative items-center justify-start md:pt-20">
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-1">
      <div className="hidden xl:block w-2/5 h-full min-h-screen absolute right-0">
        <Dec direction="inverse" />
      </div>
      <div className="w-full h-full relative">
        <div className="z-2 w-full absolute top-0 left-0 h-full bg-secondary/67 backdrop-blur-[2px]" />
        <Image
          src="assets/hero.png"
          alt="hero"
          fill={true}
          className="w-full h-full z-0 object-cover bg-center scale-105 bg-fixed"
        />
      </div>
    </div>

    {/* Main content */}
    <div className="w-full h-full z-10 flex justify-center flex-col gap-4 lg:gap-8 relative text-secondary-foreground min-h-screen">
      {/* Main section */}
      <div className="flex flex-col not-lg:min-h-96 gap-4 lg:gap-8 px-8 lg:px-20 container">
        <div className="flex flex-col sm:gap-4">
          <Logo
            className="lg:hidden"
            imgClassName="md:hidden"
            textClassName="md:text-2xl"
          />
          <h1 className="font-syncopate text-2xl md:text-4xl lg:text-6xl font-black">
            Tegid Katki?
            <br />
            Parandame koos!
          </h1>
        </div>
        <p className="md:text-xl">
          Elektroonikat ei pea ära viskama! Teeme erinevust koos!
        </p>
        <div className="**:font-syncopate items-center px-4 max-w-full py-3 lg:px-10 lg:py-5 bg-primary w-max flex gap-4 lg:gap-8">
          <div className="flex items-center gap-1 lg:gap-2.5 ">
            <Calendar className="not-sm:size-3 -translate-y-0.25" />
            <p className="font-bold text-white md:hover:underline not-sm:text-[9px] md:text-xs lg:text-2xl">
              8. Nov 2025
            </p>
          </div>
          <div className="flex items-center gap-1 lg:gap-2.5 ">
            <MapPin className="not-sm:size-3 -translate-y-0.25" />
            <a
              href="https://maps.app.goo.gl/B77ZdAA7KW3k3mze6"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white md:hover:underline not-sm:text-[9px] md:text-xs lg:text-2xl relative z-20"
            >
              Taltech peamaja kohvik
            </a>
          </div>
        </div>
      </div>

      {/* Orgs */}
      <div
        className={cn(
          " flex not-lg:flex-col h-16 lg:h-24 not-lg:bottom-0 not-lg:absolute w-full",
          "h-auto *:h-16",
          // this is also an option...but like we experimenting and shit
          // ' flex not-lg:flex-col h-16 lg:h-24 not-lg:bottom-0 not-lg:absolute w-full gap-x-5 *:rounded-2xl',
          "flex-wrap lg:justify-start lg:gap-4",
          "lg:px-20 lg:container"
        )}
      >
        {Object.entries(orgs).map(([org, [link, src, color, display]]) => (
          <div
            key={org}
            className={cn(`px-8 py-2 lg:py-2 w-full h-full lg:max-w-fit bg-black flex items-center justify-center lg:rounded-full ${display}`)}
            style={color ? { backgroundColor: `var(${color})` } : undefined}
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
                // Let the anchor control layout; avoid w-full/h-full on Image to prevent oversized logos that exceed responsive breakpoints
                width={240}
                height={120}
                className={cn(`max-w-full max-h-full object-contain ${display ? "lg:max-w-fit" : "sm:max-w-[220px] lg:max-w-[320px]"}`)}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
