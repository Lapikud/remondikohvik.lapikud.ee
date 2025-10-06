/** @format */

import { Calendar, MapPin } from "lucide-react";
import { Dec } from "../Dec";
import { ContentBox } from "../content";
import Link from "next/link";
import Image from "next/image";

export const InfoSection = () => (
  <section id="info" className="w-full max-h-fit flex relative bg-secondary">
    <div className="w-1/5 h-full absolute not-xl:hidden">
      {/* I cant decide if i want the lg or sm. the design says lg but im iffy */}
      <Dec size="sm" />
    </div>

    <div className="xl:w-3/5 lg:w-4/7 lg:self-center lg:px-10 lg:*:rounded-lg lg:gap-y-10 lg:mr-10 xl:mr-20 relative flex flex-col not-lg:hidden">
      <Image
        src={"assets/info-1.png"}
        alt="last year event pic"
        width={600}
        height={400}
        className="w-full object-contain"
      />
      <Image
        src={"assets/info-2.png"}
        alt="last year event pic"
        width={600}
        height={400}
        className="w-full object-contain"
      />
    </div>

    <div className="w-full flex lg:items-center not-lg:container lg:py-20 not-lg:mx-auto not-lg:px-8 not-lg:py-24">
      <div className="w-full h-fit flex flex-col gap-16 ">
        <Image
          src={"assets/info-1.png"}
          alt="last year event pic"
          width={600}
          height={400}
          className="w-full object-contain lg:hidden"
        />
        <ContentBox
          title="Kus?"
          icon={<MapPin className="inline mr-2 stroke-3 lg:size-12" />}
        >
          <span>Taltech Peamaja Kohvik</span>
          <span>Akadeemia tee 5, Tallinn</span>
        </ContentBox>
        <ContentBox
          title="Millal?"
          icon={<Calendar className="inline mr-2 stroke-3 lg:size-12" />}
        >
          <span>8. November, 2025</span>
          <span>11:00 - 15:00</span>
        </ContentBox>
        <Image
          src={"assets/info-2.png"}
          alt="last year event pic"
          width={600}
          height={400}
          className="w-full object-contain lg:hidden"
        />
        <ContentBox title="Muu info">
          <ul className="list-disc list-inside">
            <li>Tasuta tee, kohvik ja pirukad</li>
            <li>
              Too kaasa enda arvutid, riided, moblad, millel parandust vaja on -
              parandame koos kõik ära{" "}
              <span className="text-primary">(ja tasuta!)</span>
            </li>
            {/* TODO put the correct link to the event */}
            <li>
              Pane 'Going'{" "}
              <Link
                href="https://facebook.com/lapikud"
                className="text-primary"
              >
                Facebook'is
              </Link>{" "}
              ka!
            </li>
          </ul>
        </ContentBox>
      </div>
    </div>
  </section>
);
