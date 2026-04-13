import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Dorothée, énergéticienne et naturopathe. Formulaire de contact, téléphone et adresses des cabinets à Martagny et Nanterre. Réponse rapide garantie.",
  alternates: {
    canonical: "https://lexpressiondelame.fr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
