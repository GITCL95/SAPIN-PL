import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const fraunces = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-ext-full-normal.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-ext-full-italic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = localFont({
  src: "../../node_modules/@fontsource-variable/archivo/files/archivo-latin-ext-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Idealna Choinka \u2014 Luksus w uczciwej cenie",
  description:
    "Polskie choinki sztuczne premium \u2014 178 modeli, igliwie 100% PE, wysylka 24h. Stworzone na lata.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${fraunces.variable} ${archivo.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
