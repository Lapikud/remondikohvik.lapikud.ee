/** @format */

import { Hero } from "@/components/layout/hero";
import { HistorySection } from "@/components/layout/history";
import { InfoSection } from "@/components/layout/info";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
// import { Kontakt } from "@/components/layout/kontakt";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full h-full ">
        <Hero />
        <InfoSection />
        <HistorySection />
        {/* <Kontakt /> */}
      </main>
      <Footer />
    </>
  );
}
