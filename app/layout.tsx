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
  title: "L'Expression de l'Âme | Soins Énergétiques & Naturopathie",
  description: "Dorothée, énergéticienne et naturopathe à Martagny. Accompagnement holistique personnalisé pour retrouver équilibre, vitalité et harmonie intérieure.",
  keywords: "naturopathie, soins énergétiques, bien-être, Martagny, Gisors, Etrepagny, énergéticienne, accompagnement holistique",
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
