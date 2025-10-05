/** @format */

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lato, Syncopate } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", `${lato.variable} ${syncopate.variable}`)}
      >
        {children}
      </body>
    </html>
  );
}
