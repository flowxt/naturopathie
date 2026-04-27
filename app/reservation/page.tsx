"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

const CAL_BASE = "https://cal.com/dorothee-sakgbk";

export default function ReservationPage() {
  const prestations: {
    id: string;
    slug: string;
    slugNoPayment?: string;
    title: string;
    subtitle: string;
    price: number;
    duration: string;
    description: string;
    isPackage?: boolean;
  }[] = [
    {
      id: "soin-energetique",
      slug: "/soin-energetique",
      slugNoPayment: "/soin-energetique-sans-paiement",
      title: "Soin Énergétique",
      subtitle: "En présentiel ou à distance",
      price: 70,
      duration: "1h30",
      description: "Rééquilibrage énergétique complet",
    },
    {
      id: "naturopathie",
      slug: "/naturopathie",
      slugNoPayment: "/naturopathie-copie",
      title: "Naturopathie",
      subtitle: "En visioconférence ou en présentiel",
      price: 70,
      duration: "1h30",
      description: "Bilan et conseils personnalisés",
    },
    {
      id: "soin-enfant",
      slug: "/soin-enfant-de-12-ans",
      slugNoPayment: "/soin-enfant-de-12-ans-copie",
      title: "Soin Enfant",
      subtitle: "Moins de 12 ans",
      price: 50,
      duration: "1h",
      description: "Accompagnement adapté aux enfants",
    },
    {
      id: "forfait-5-adulte",
      slug: "/15min",
      title: "Forfait 5 Soins",
      subtitle: "Adultes",
      price: 300,
      duration: "5 × 1h30",
      description: "Économisez 50€ sur 5 séances",
      isPackage: true,
    },
    {
      id: "forfait-5-enfant",
      slug: "/15min",
      title: "Forfait 5 Soins",
      subtitle: "Enfants",
      price: 200,
      duration: "5 × 1h",
      description: "Économisez 50€ sur 5 séances",
      isPackage: true,
    },
  ];

  return (
    <div style={{ background: "var(--blanc-creme)" }}>
      <Header />
      
      {/* Hero Section */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--beige-clair) 0%, var(--creme) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span
            className="text-sm tracking-widest uppercase"
            style={{ color: "var(--terracotta)" }}
          >
            Prendre rendez-vous
          </span>
          <h1
            className="text-5xl md:text-6xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Réservation
          </h1>
          <div className="section-divider" />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Choisissez votre prestation et réservez votre créneau en ligne. 
            Paiement en ligne sécurisé ou règlement sur place, au choix.
          </p>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-medium text-center mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Choisissez votre prestation
          </h2>
          <p
            className="text-center text-sm mb-12"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Cliquez sur « Réserver » pour accéder aux créneaux disponibles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((prestation) => (
              <div
                key={prestation.id}
                className="rounded-2xl border-2 overflow-hidden transition-all hover:shadow-lg group flex flex-col"
                style={{
                  background: "white",
                  borderColor: "var(--beige-clair)",
                }}
              >
                {/* Card content */}
                <div className="p-6 flex-1 flex flex-col">
                  {prestation.isPackage && (
                    <span
                      className="inline-block self-start px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                      style={{ background: "var(--vert-olive)" }}
                    >
                      Forfait avantageux
                    </span>
                  )}

                  <h3
                    className="text-xl font-medium"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--texte-principal)",
                    }}
                  >
                    {prestation.title}
                  </h3>
                  <p
                    className="text-xs mt-1 mb-3"
                    style={{ color: "var(--terracotta)" }}
                  >
                    {prestation.subtitle}
                  </p>

                  <p
                    className="text-sm mb-5 flex-1"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    {prestation.description}
                  </p>
                  
                  <div className="flex items-end justify-between pb-5 mb-5 border-b" style={{ borderColor: "var(--beige-clair)" }}>
                    <span
                      className="text-3xl font-medium"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--terracotta)",
                      }}
                    >
                      {prestation.price}€
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--texte-secondaire)" }}
                    >
                      {prestation.duration}
                    </span>
                  </div>

                  <a
                    href={`${CAL_BASE}${prestation.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full font-medium text-center transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                      color: "white",
                      boxShadow: "0 4px 15px rgba(183, 116, 88, 0.3)",
                    }}
                  >
                    {prestation.isPackage ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Réserver un appel de 15 min
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h.01M11 15h2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Réserver — paiement en ligne
                      </>
                    )}
                  </a>

                  {prestation.slugNoPayment && (
                    <a
                      href={`${CAL_BASE}${prestation.slugNoPayment}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 mt-3 rounded-full font-medium text-center transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2 border-2"
                      style={{
                        background: "white",
                        color: "var(--terracotta)",
                        borderColor: "var(--terracotta)",
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Réserver — paiement sur place
                    </a>
                  )}

                  {prestation.isPackage && (
                    <p
                      className="text-xs text-center mt-3"
                      style={{ color: "var(--texte-secondaire)" }}
                    >
                      Cet appel permet de planifier ensemble vos 5 séances. Aucun paiement en ligne, règlement directement avec Dorothée.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Payment info */}
          <div
            className="mt-10 rounded-2xl px-6 py-4 flex items-center justify-center gap-2 text-sm text-center"
            style={{
              background: "var(--beige-clair)",
              color: "var(--texte-secondaire)",
            }}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Paiement en ligne sécurisé par Stripe ou règlement sur place le jour de la séance
          </div>

          {/* Direct Cal.com link */}
          <div className="mt-6 text-center">
            <a
              href={CAL_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{ color: "var(--terracotta)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir toutes les disponibilités sur Cal.com
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section
        className="py-16"
        style={{ background: "var(--beige-clair)" }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Paiement au choix",
                description: "Réglez en ligne en toute sécurité via Stripe, ou directement sur place le jour de la séance",
              },
              {
                title: "Annulation flexible",
                description: "Annulation gratuite jusqu'à 24h avant le rendez-vous",
              },
              {
                title: "Confirmation immédiate",
                description: "Recevez votre confirmation par email instantanément",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl"
                style={{ background: "white" }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                  }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
