import type { Metadata } from "next";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idealna Choinka — Luksus w uczciwej cenie",
  description:
    "Polskie choinki sztuczne premium — 178 modeli, igliwie 100% PE, wysylka 24h. Stworzone na lata.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
