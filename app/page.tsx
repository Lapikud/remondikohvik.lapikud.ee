/** @format */

import { Hero } from "@/components/layout/hero";
import { AboutUs } from "@/components/layout/aboutUs";
import { HistorySection } from "@/components/layout/history";
import { InfoSection } from "@/components/layout/info";
import { Navbar } from "@/components/layout/navbar";
import { MapSection } from "@/components/layout/map";
import { Footer } from "@/components/layout/footer";

// import { Kontakt } from "@/components/layout/kontakt";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-full ">
        <Hero />
        <AboutUs />
        <InfoSection />
        <HistorySection />
        <MapSection />
        {/* <Kontakt /> */}
      </main>
      <Footer />
    </>
  );
}
