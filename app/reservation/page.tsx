import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réservation | L'Expression de l'Âme",
  description: "Réservez votre séance de soins énergétiques ou de naturopathie en ligne. Paiement sécurisé.",
};

export default function ReservationPage() {
  const prestations = [
    {
      id: "soin-energetique",
      title: "Soin Énergétique",
      subtitle: "En présentiel ou à distance",
      price: 70,
      duration: "1h30",
      description: "Rééquilibrage énergétique complet",
    },
    {
      id: "naturopathie",
      title: "Naturopathie",
      subtitle: "En visioconférence ou présentiel",
      price: 70,
      duration: "1h30",
      description: "Bilan et conseils personnalisés",
    },
    {
      id: "soin-enfant",
      title: "Soin Enfant",
      subtitle: "Moins de 12 ans",
      price: 50,
      duration: "1h",
      description: "Accompagnement adapté aux enfants",
    },
    {
      id: "forfait-5-adulte",
      title: "Forfait 5 Soins",
      subtitle: "Adultes",
      price: 300,
      duration: "5 × 1h30",
      description: "Économisez 50€ sur 5 séances",
      isPackage: true,
    },
    {
      id: "forfait-5-enfant",
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
            Paiement sécurisé par carte bancaire.
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
              { step: "3", label: "Confirmez et payez" },
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
            className="text-3xl font-medium text-center mb-12"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Sélectionnez une prestation
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {prestations.map((prestation) => (
              <div
                key={prestation.id}
                className="rounded-2xl p-6 border-2 cursor-pointer transition-all hover:shadow-lg group"
                style={{
                  background: "white",
                  borderColor: "var(--beige-clair)",
                }}
              >
                {prestation.isPackage && (
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                    style={{ background: "var(--vert-olive)" }}
                  >
                    Forfait avantageux
                  </div>
                )}
                
                <h3
                  className="text-xl font-medium mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  {prestation.title}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: "var(--terracotta)" }}
                >
                  {prestation.subtitle}
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  {prestation.description}
                </p>
                
                <div className="flex items-end justify-between">
                  <div>
                    <span
                      className="text-3xl font-medium"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--terracotta)",
                      }}
                    >
                      {prestation.price}€
                    </span>
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    {prestation.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Calendly Placeholder */}
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              background: "linear-gradient(145deg, white 0%, var(--beige-clair) 100%)",
              boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
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
              Réservation en ligne bientôt disponible
            </h3>
            <p
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "var(--texte-secondaire)" }}
            >
              Le système de réservation et de paiement en ligne sera prochainement activé. 
              En attendant, vous pouvez me contacter directement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0611030695"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 11 03 06 95
              </a>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un message
              </Link>
            </div>
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
                title: "Paiement sécurisé",
                description: "Vos paiements sont 100% sécurisés par Stripe",
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
