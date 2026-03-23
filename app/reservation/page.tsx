"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const CALENDLY_BASE = "https://calendly.com/lexpressiondelame";

export default function ReservationPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const prestations = [
    {
      id: "soin-energetique",
      calendlySlug: "/soin-energetique",
      title: "Soin Énergétique",
      subtitle: "En présentiel ou à distance",
      price: 70,
      duration: "1h30",
      description: "Rééquilibrage énergétique complet",
    },
    {
      id: "naturopathie",
      calendlySlug: "/naturopathie",
      title: "Naturopathie",
      subtitle: "En visioconférence ou en présentiel",
      price: 70,
      duration: "1h30",
      description: "Bilan et conseils personnalisés",
    },
    {
      id: "soin-enfant",
      calendlySlug: "/soin-enfant",
      title: "Soin Enfant",
      subtitle: "Moins de 12 ans",
      price: 50,
      duration: "1h",
      description: "Accompagnement adapté aux enfants",
    },
    {
      id: "forfait-5-adulte",
      calendlySlug: "/forfait-5-soins-adulte",
      title: "Forfait 5 Soins",
      subtitle: "Adultes",
      price: 300,
      duration: "5 × 1h30",
      description: "Économisez 50€ sur 5 séances",
      isPackage: true,
    },
    {
      id: "forfait-5-enfant",
      calendlySlug: "/forfait-5-soins-enfant",
      title: "Forfait 5 Soins",
      subtitle: "Enfants",
      price: 200,
      duration: "5 × 1h",
      description: "Économisez 50€ sur 5 séances",
      isPackage: true,
    },
  ];

  const handleSelect = (id: string) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const selectedPrestation = prestations.find((p) => p.id === selectedId);

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
            Règlement sur place le jour de votre séance.
          </p>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12 border-b" style={{ borderColor: "var(--beige-clair)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {[
              { step: "1", label: "Choisissez votre prestation" },
              { step: "2", label: "Sélectionnez un créneau" },
              { step: "3", label: "Confirmez votre réservation" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                  }}
                >
                  {item.step}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--texte-principal)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations Selection */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2
            className="text-3xl font-medium text-center mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Sélectionnez une prestation
          </h2>
          <p
            className="text-center text-sm mb-12"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Cliquez sur la prestation souhaitée, puis réservez votre créneau
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {prestations.map((prestation) => {
              const isSelected = selectedId === prestation.id;
              return (
                <button
                  key={prestation.id}
                  onClick={() => handleSelect(prestation.id)}
                  className="rounded-2xl p-6 border-2 text-left transition-all hover:shadow-lg"
                  style={{
                    background: isSelected ? "white" : "white",
                    borderColor: isSelected ? "var(--terracotta)" : "var(--beige-clair)",
                    boxShadow: isSelected
                      ? "0 8px 30px rgba(183, 116, 88, 0.2)"
                      : "none",
                    transform: isSelected ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      {prestation.isPackage && (
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
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
                        className="text-xs mt-1"
                        style={{ color: "var(--terracotta)" }}
                      >
                        {prestation.subtitle}
                      </p>
                    </div>
                    {/* Selection indicator */}
                    <div
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1"
                      style={{
                        borderColor: isSelected ? "var(--terracotta)" : "var(--beige-dore)",
                        background: isSelected ? "var(--terracotta)" : "transparent",
                      }}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    {prestation.description}
                  </p>
                  
                  <div className="flex items-end justify-between pt-3 border-t" style={{ borderColor: "var(--beige-clair)" }}>
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
                </button>
              );
            })}
          </div>

          {/* Calendly CTA */}
          <div
            className="rounded-3xl overflow-hidden transition-all duration-500"
            style={{
              boxShadow: selectedId
                ? "0 10px 40px rgba(183, 116, 88, 0.15)"
                : "0 10px 40px rgba(183, 116, 88, 0.08)",
            }}
          >
            {selectedId && selectedPrestation ? (
              <div>
                {/* Selected prestation recap */}
                <div
                  className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                  style={{
                    background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                  }}
                >
                  <div className="text-white text-center sm:text-left">
                    <p className="text-sm text-white/70">Votre sélection</p>
                    <p
                      className="text-2xl font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {selectedPrestation.title} — {selectedPrestation.price}€
                    </p>
                    <p className="text-sm text-white/80">
                      {selectedPrestation.subtitle} · {selectedPrestation.duration}
                    </p>
                  </div>
                  <a
                    href={`${CALENDLY_BASE}${selectedPrestation.calendlySlug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 inline-flex items-center gap-2 shrink-0"
                    style={{
                      background: "white",
                      color: "var(--terracotta)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Choisir un créneau
                  </a>
                </div>

                {/* Payment info */}
                <div
                  className="px-6 py-4 flex items-center justify-center gap-2 text-sm"
                  style={{
                    background: "var(--beige-clair)",
                    color: "var(--texte-secondaire)",
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Règlement sur place le jour de votre séance
                </div>
              </div>
            ) : (
              <div
                className="p-12 text-center"
                style={{
                  background: "linear-gradient(145deg, white 0%, var(--beige-clair) 100%)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--beige-clair) 0%, var(--creme) 100%)",
                    border: "2px solid var(--beige-dore)",
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "var(--terracotta)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3
                  className="text-2xl font-medium mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  Sélectionnez une prestation ci-dessus
                </h3>
                <p
                  className="text-base max-w-md mx-auto"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  Choisissez le soin qui vous convient pour accéder aux créneaux disponibles.
                </p>
              </div>
            )}
          </div>

          {/* Direct Calendly link */}
          <div className="mt-8 text-center">
            <p
              className="text-sm mb-3"
              style={{ color: "var(--texte-secondaire)" }}
            >
              Vous pouvez aussi accéder directement à toutes les disponibilités
            </p>
            <a
              href={CALENDLY_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir tous les créneaux sur Calendly
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
                title: "Paiement sur place",
                description: "Le règlement s'effectue le jour de votre séance, directement au cabinet",
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
