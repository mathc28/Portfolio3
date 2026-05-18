import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mathieu Cocu — Développeur Front-end",
  description:
    "Dev front-end indépendant basé à Lyon, France. Je transforme vos idées en site rapides, accessibles, soignées pour indépendants et PME en France & Suisse. ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${instrumentSerif.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
