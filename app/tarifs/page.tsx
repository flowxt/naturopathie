import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Soins Énergétiques & Naturopathie",
  description: "Découvrez mes tarifs pour les soins énergétiques, la naturopathie et les forfaits. Séances adultes 70€, enfants 50€. Forfaits avantageux disponibles.",
};

export default function TarifsPage() {
  const tarifs = [
    {
      title: "Soin Énergétique",
      subtitle: "En présentiel ou à distance",
      price: "70",
      duration: "Environ 1h30",
      description: "Rééquilibrage énergétique complet pour lever les blocages et faciliter la circulation de l'énergie vitale.",
      features: [
        "Bilan énergétique",
        "Rééquilibrage des chakras",
        "Libération émotionnelle",
        "Suivi par email inclus",
        "Fiche de synthèse",
      ],
      color: "terracotta",
    },
    {
      title: "Naturopathie",
      subtitle: "En visioconférence ou présentiel",
      price: "70",
      duration: "Environ 1h30",
      description: "Accompagnement personnalisé pour renforcer votre vitalité par des moyens naturels.",
      features: [
        "Bilan de vitalité complet",
        "Conseils nutritionnels",
        "Recommandations personnalisées",
        "Suivi par email inclus",
        "Programme adapté",
      ],
      color: "vert",
    },
    {
      title: "Soin Enfant",
      subtitle: "Moins de 12 ans",
      price: "50",
      duration: "Environ 1h",
      description: "Accompagnement doux et adapté pour les enfants, dans le respect de leur sensibilité.",
      features: [
        "Approche ludique",
        "Gestion des émotions",
        "Conseils pour les parents",
        "Suivi par email inclus",
        "Techniques adaptées",
      ],
      color: "beige",
    },
  ];

  const forfaits = [
    {
      title: "Forfait 5 Soins Adultes",
      subtitle: "Hors séances enfants",
      price: "300",
      normalPrice: "350",
      economy: "50",
      features: [
        "5 séances au choix",
        "Naturopathie ou soins énergétiques",
        "Valable 6 mois",
        "Suivi personnalisé",
        "Économie de 50€",
      ],
      color: "terracotta",
    },
    {
      title: "Forfait 5 Soins Enfants",
      subtitle: "Moins de 12 ans",
      price: "200",
      normalPrice: "250",
      economy: "50",
      features: [
        "5 séances enfant",
        "Approche douce et ludique",
        "Valable 6 mois",
        "Suivi personnalisé",
        "Économie de 50€",
      ],
      color: "vert",
    },
  ];

  return (
    <div style={{ background: "var(--blanc-creme)" }}>
      <Header />
      
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--beige-clair) 0%, var(--creme) 100%)",
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-20 right-10 w-48 h-48 rounded-full opacity-15"
          style={{ background: "var(--terracotta)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10"
          style={{ background: "var(--vert-clair)" }}
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span
            className="text-sm tracking-widest uppercase"
            style={{ color: "var(--terracotta)" }}
          >
            Investir en vous
          </span>
          <h1
            className="text-5xl md:text-6xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Tarifs des Séances
          </h1>
          <div className="section-divider" />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Des séances complètes pour prendre le temps de vous accompagner en profondeur.
          </p>
        </div>
      </section>

      {/* Tarifs individuels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-medium mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Séances Individuelles
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tarifs.map((tarif, index) => (
              <div
                key={index}
                className="card-hover rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  style={{
                    background: tarif.color === "terracotta"
                      ? "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)"
                      : tarif.color === "vert"
                      ? "linear-gradient(135deg, var(--vert-sauge) 0%, var(--vert-olive) 100%)"
                      : "linear-gradient(135deg, var(--beige-dore) 0%, var(--terracotta-light) 100%)",
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {tarif.color === "terracotta" ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    ) : tarif.color === "vert" ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-medium mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  {tarif.title}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--terracotta)" }}
                >
                  {tarif.subtitle}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-5xl font-medium"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: tarif.color === "terracotta"
                        ? "var(--terracotta)"
                        : tarif.color === "vert"
                        ? "var(--vert-olive)"
                        : "var(--beige-dore)",
                    }}
                  >
                    {tarif.price}
                  </span>
                  <span
                    className="text-xl"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    €
                  </span>
                </div>
                <p
                  className="text-sm mb-6 pb-6 border-b"
                  style={{
                    color: "var(--texte-secondaire)",
                    borderColor: "var(--beige-clair)",
                  }}
                >
                  {tarif.duration}
                </p>

                {/* Description */}
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  {tarif.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tarif.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3"
                      style={{ color: "var(--texte-principal)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                        style={{
                          background: tarif.color === "terracotta"
                            ? "var(--terracotta)"
                            : tarif.color === "vert"
                            ? "var(--vert-olive)"
                            : "var(--beige-dore)",
                        }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/reservation" className="btn-primary w-full">
                  Réserver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, var(--blanc-creme) 0%, var(--beige-clair) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-medium mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Forfaits Avantageux
            </h2>
            <div className="section-divider" />
            <p
              className="mt-6 text-lg"
              style={{ color: "var(--texte-secondaire)" }}
            >
              Pour un accompagnement sur le long terme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {forfaits.map((forfait, index) => (
              <div
                key={index}
                className="card-hover rounded-3xl p-10 relative overflow-hidden"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
                }}
              >
                {/* Decorative */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10"
                  style={{
                    background: forfait.color === "terracotta"
                      ? "var(--terracotta)"
                      : "var(--vert-clair)",
                  }}
                />

                {/* Badge économie */}
                <div
                  className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm text-white font-medium"
                  style={{
                    background: forfait.color === "terracotta"
                      ? "var(--terracotta)"
                      : "var(--vert-olive)",
                  }}
                >
                  -50€
                </div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{
                      background: forfait.color === "terracotta"
                        ? "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)"
                        : "linear-gradient(135deg, var(--vert-sauge) 0%, var(--vert-olive) 100%)",
                    }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {forfait.color === "terracotta" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>

                  <h3
                    className="text-2xl font-medium mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--texte-principal)",
                    }}
                  >
                    {forfait.title}
                  </h3>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    {forfait.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <span
                      className="text-6xl font-medium"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: forfait.color === "terracotta"
                          ? "var(--terracotta)"
                          : "var(--vert-olive)",
                      }}
                    >
                      {forfait.price}€
                    </span>
                  </div>
                  <p
                    className="text-sm line-through mb-1"
                    style={{ color: "var(--gris-doux)" }}
                  >
                    Au lieu de {forfait.normalPrice}€
                  </p>
                  <p
                    className="text-sm font-medium mb-8"
                    style={{
                      color: forfait.color === "terracotta"
                        ? "var(--terracotta)"
                        : "var(--vert-olive)",
                    }}
                  >
                    Économisez {forfait.economy}€
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {forfait.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-3"
                      style={{ color: "var(--texte-principal)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                        style={{
                          background: forfait.color === "terracotta"
                            ? "var(--terracotta)"
                            : "var(--vert-olive)",
                        }}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/reservation" className="btn-primary w-full">
                  Réserver ce forfait
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-3xl p-10"
            style={{
              background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
            }}
          >
            <div className="text-center text-white">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "rgba(255, 255, 255, 0.2)" }}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3
                className="text-3xl font-medium mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Bon à savoir
              </h3>
              <div className="space-y-3 text-lg text-white/90 max-w-2xl mx-auto">
                <p>
                  Les séances de naturopathie peuvent se faire en <strong>visioconférence</strong> 
                  ou en présentiel.
                </p>
                <p>
                  Les soins énergétiques sont disponibles en <strong>présentiel</strong> à 
                  mon cabinet ou à <strong>distance</strong>.
                </p>
                <p>
                  La première séance permet d&apos;établir un bilan complet. 
                  Les séances de suivi peuvent être adaptées selon vos besoins.
                </p>
                <p>
                  Les forfaits sont valables 6 mois à partir de la date d&apos;achat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, var(--blanc-creme) 0%, var(--beige-clair) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Prête à vous accompagner
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Contactez-moi pour réserver votre séance ou pour toute question sur mes prestations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation" className="btn-primary text-lg">
              Prendre rendez-vous
            </Link>
            <Link href="/services" className="btn-secondary text-lg">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
