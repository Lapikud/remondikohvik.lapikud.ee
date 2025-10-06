/** @format */

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { InfoSection } from "@/components/layout/info";
import { HistorySection } from "@/components/layout/history";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full h-full ">
        <Hero />
        <InfoSection />
        <HistorySection />
      </main>
    </>
  );
}
