import Image from "next/image";
import { ContentBox } from "../content";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Kontakt = () => (
  <section id="kontakt" className="min-h-screen relative">
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-1">
      <div className="z-2 w-full absolute top-0 left-0 h-full bg-secondary/67 backdrop-blur-[2px]" />
      <Image
        src="assets/hero.png"
        alt="hero"
        fill={true}
        className="w-full h-full z-0 scale-105 object-cover bg-center bg-fixed"
      />
    </div>
    <div className="w-full h-full z-10 relative text-secondary-foreground container mx-auto py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row justify-around items-start xl:items-center gap-8 lg:gap-10">
      <ContentBox title="Kontakt">
        <h3 className="text-xl lg:text-3xl uppercase mt-6 font-syncopate font-bold">
          Peakorraldajad
        </h3>
        <div>
          <strong className="font-syncopate">MTÜ Lapikud</strong>
          <ul className="list-none space-y-2 mt-2">
            <li className="flex items-center gap-2 hover:underline">
              <MapPin className="flex-shrink-0" />
              <span>Ehitajate Tee 5, Tallinn</span>
            </li>
            <li className="flex items-center gap-2 hover:underline">
              <Mail className="flex-shrink-0" />
              <span>
                <Link href="mailto:lapikud@lapikud.ee">lapikud@lapikud.ee</Link>
              </span>
            </li>
            <li className="flex items-center gap-2 hover:underline">
              <Globe className="flex-shrink-0" />
              <span>
                <Link href="https://lapikud.ee" target="_blank">
                  lapikud.ee
                </Link>
              </span>
            </li>
            <li className="flex items-center gap-2 hover:underline">
              <Phone className="flex-shrink-0" />
              <span>
                <Link href="tel:+37258160799">(+372) 5816 0799</Link>
              </span>
            </li>
          </ul>
        </div>
      </ContentBox>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031.3408316189345!2d24.668195277300608!3d59.394025905840245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692950715508cdb%3A0x16e365bdbaea4469!2sEhitajate%20tee%205%2C%2019086%20Tallinn!5e0!3m2!1sen!2see!4v1759826002724!5m2!1sen!2see"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full xl:w-1/2 h-64 sm:h-80 md:h-96 xl:h-[500px] rounded-sm border-primary border-2"
      />
    </div>
  </section>
);
