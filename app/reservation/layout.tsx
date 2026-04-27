import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation en ligne",
  description:
    "Réservez votre séance de soin énergétique ou de naturopathie en ligne. Choisissez votre prestation et sélectionnez un créneau disponible. Paiement en ligne sécurisé ou règlement sur place.",
  alternates: {
    canonical: "https://lexpressiondelame.fr/reservation",
  },
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
