/** @format */

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lato, Syncopate, Parkinsans } from "next/font/google";
import "./global.css";

export const metadata: Metadata = {
  title: "Remondikohvik",
  appleWebApp: {
    startupImage: "/apple-icon.png",
    title: "Remondikohvik",
  },
  manifest: "/manifest.json",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

// const parkinsans = Parkinsans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-parkinsans",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="remondikohvik, taltech, lapikud, tallinn, tehnikaülikool, robotiklubi, tthk, k-space, skeemipesa, elektroonika, tasuta, töötuba"/>
        <meta name="description" content="Remondikohvik on koht, kuhu saab tulla julgelt nõu küsima, ise käed külge lüüa parandamisel või lasta asjatundlikel abil vaadata parandust vajavad esemed. Teid ootavad sõbralikud ja heatujulised abilised, kellega saab ka niisama kohvitades juttu vesta."/>
        <meta name="author" content="MTÜ Lapikud"/>
      </head>
      <body
        className={cn(
          "antialiased scroll-smooth",
          `${lato.variable} ${syncopate.variable}`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
