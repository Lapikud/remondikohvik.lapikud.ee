/** @format */

import { Hero } from "@/components/layout/hero";
import { AboutUs } from "@/components/layout/aboutUs";
import { HistorySection } from "@/components/layout/history";
import { InfoSection } from "@/components/layout/info";

export default function Home() {
  return (
    <main className="relative w-full h-full ">
      <Hero />
      <AboutUs />
      <InfoSection />
      <HistorySection />
    </main>
  );
}
