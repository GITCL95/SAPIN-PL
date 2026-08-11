import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
      <body className={playfair.variable}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
