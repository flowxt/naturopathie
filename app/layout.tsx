import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lexpressiondelame.fr"),
  title: {
    default: "L'Expression de l'Âme | Soins Énergétiques & Naturopathie",
    template: "%s | L'Expression de l'Âme",
  },
  description:
    "Dorothée, énergéticienne et naturopathe à Martagny et Nanterre. Accompagnement holistique personnalisé pour retrouver équilibre, vitalité et harmonie intérieure. Soins énergétiques, naturopathie, consultations enfants.",
  keywords:
    "naturopathie, soins énergétiques, bien-être, Martagny, Nanterre, Gisors, Etrepagny, énergéticienne, naturopathe, accompagnement holistique, rééquilibrage énergétique, soins naturels",
  authors: [{ name: "Dorothée — L'Expression de l'Âme" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lexpressiondelame.fr",
    siteName: "L'Expression de l'Âme",
    title: "L'Expression de l'Âme | Soins Énergétiques & Naturopathie",
    description:
      "Accompagnement holistique personnalisé par Dorothée, énergéticienne et naturopathe à Martagny et Nanterre. Retrouvez équilibre, vitalité et harmonie intérieure.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "L'Expression de l'Âme — Soins Énergétiques & Naturopathie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Expression de l'Âme | Soins Énergétiques & Naturopathie",
    description:
      "Accompagnement holistique personnalisé par Dorothée, énergéticienne et naturopathe.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "-DrUJVa7n_beGM6meSrym_5pYN1lsSekk1p8Es4ueUg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${lato.variable} antialiased`}
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
