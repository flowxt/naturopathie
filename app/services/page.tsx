import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Soins Énergétiques & Naturopathie",
  description: "Découvrez mes services : soins énergétiques, naturopathie et accompagnement holistique. En présentiel à Martagny ou à distance.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Soins Énergétiques",
      subtitle: "En présentiel ou à distance",
      image: "/energie.jpg",
      description:
        "Le soin énergétique est une pratique holistique qui vise à instaurer un rééquilibrage énergétique complet dans tout le corps. Il permet de lever tous les verrous (dénouer les nœuds, blocages et stress au niveau physique, psychique et émotionnel) pour faciliter la circulation de l'énergie d'elle-même.",
      benefits: [
        "Rééquilibrage des chakras",
        "Libération des blocages émotionnels",
        "Harmonisation énergétique",
        "Réduction du stress et des tensions",
        "Meilleure circulation de l'énergie vitale",
        "Apaisement mental et émotionnel",
      ],
      duration: "Environ 1h30",
      price: "70€",
      color: "terracotta",
    },
    {
      title: "Naturopathie",
      subtitle: "En visioconférence ou présentiel",
      image: "/naturopathie.jpg",
      description:
        "La naturopathie est un ensemble de méthodes de soins visant à renforcer les défenses de l'organisme par des moyens considérés comme naturels et biologiques. Un accompagnement personnalisé et respectueux de votre rythme.",
      benefits: [
        "Bilan de vitalité complet",
        "Conseils nutritionnels personnalisés",
        "Phytothérapie et aromathérapie",
        "Accompagnement du système digestif",
        "Gestion du stress naturelle",
        "Renforcement du système immunitaire",
      ],
      duration: "Environ 1h30",
      price: "70€",
      color: "vert",
    },
    {
      title: "Soins pour Enfants",
      subtitle: "Moins de 12 ans",
      image: "/ustensile.jpg",
      description:
        "Un accompagnement doux et adapté pour les enfants, dans le respect de leur rythme et de leur sensibilité. Les soins énergétiques et la naturopathie peuvent aider les enfants à mieux gérer leurs émotions, leur stress et à renforcer leur vitalité.",
      benefits: [
        "Approche ludique et bienveillante",
        "Gestion des émotions",
        "Accompagnement des troubles du sommeil",
        "Renforcement de la vitalité",
        "Conseils pour les parents",
        "Suivi personnalisé",
      ],
      duration: "Environ 1h",
      price: "50€",
      color: "beige",
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span
            className="text-sm tracking-widest uppercase"
            style={{ color: "var(--terracotta)" }}
          >
            Mes prestations
          </span>
          <h1
            className="text-5xl md:text-6xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Services & Accompagnements
          </h1>
          <div className="section-divider" />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Un accompagnement personnalisé pour retrouver équilibre, vitalité et harmonie intérieure.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: service.color === "terracotta"
                          ? "linear-gradient(180deg, transparent 50%, rgba(183, 116, 88, 0.3) 100%)"
                          : service.color === "vert"
                          ? "linear-gradient(180deg, transparent 50%, rgba(90, 107, 79, 0.3) 100%)"
                          : "linear-gradient(180deg, transparent 50%, rgba(212, 184, 150, 0.3) 100%)",
                      }}
                    />
                  </div>

                  {/* Price tag */}
                  <div
                    className="absolute -top-4 -right-4 px-6 py-4 rounded-2xl shadow-xl"
                    style={{
                      background: service.color === "terracotta"
                        ? "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)"
                        : service.color === "vert"
                        ? "linear-gradient(135deg, var(--vert-sauge) 0%, var(--vert-olive) 100%)"
                        : "linear-gradient(135deg, var(--beige-dore) 0%, var(--terracotta-light) 100%)",
                    }}
                  >
                    <div className="text-white text-center">
                      <div className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {service.price}
                      </div>
                      <div className="text-xs opacity-80">{service.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-4">
                    <h2
                      className="text-3xl md:text-4xl font-medium"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--texte-principal)",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-sm mt-1" style={{ color: "var(--terracotta)" }}>
                      {service.subtitle}
                    </p>
                  </div>

                  <p
                    className="text-lg mb-6"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <h3
                    className="text-xl font-medium mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--texte-principal)",
                    }}
                  >
                    Bienfaits
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.benefits.map((benefit, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-start gap-2"
                        style={{ color: "var(--texte-principal)" }}
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0"
                          style={{
                            background: service.color === "terracotta"
                              ? "var(--terracotta)"
                              : service.color === "vert"
                              ? "var(--vert-olive)"
                              : "var(--beige-dore)",
                          }}
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/reservation" className="btn-primary">
                    Réserver cette séance
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forfaits Section */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, var(--blanc-creme) 0%, var(--beige-clair) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
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

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-3xl p-8 text-center"
              style={{
                background: "white",
                boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-medium mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                Forfait 5 Soins Adultes
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--texte-secondaire)" }}>
                Hors séances enfants
              </p>
              <div className="mb-6">
                <span
                  className="text-5xl font-medium"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--terracotta)",
                  }}
                >
                  300€
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: "var(--texte-secondaire)" }}>
                Au lieu de 350€ — Économisez 50€
              </p>
              <Link href="/reservation" className="btn-primary w-full">
                Réserver ce forfait
              </Link>
            </div>

            <div
              className="rounded-3xl p-8 text-center"
              style={{
                background: "white",
                boxShadow: "0 10px 40px rgba(90, 107, 79, 0.1)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--vert-sauge) 0%, var(--vert-olive) 100%)",
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-medium mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                Forfait 5 Soins Enfants
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--texte-secondaire)" }}>
                Moins de 12 ans
              </p>
              <div className="mb-6">
                <span
                  className="text-5xl font-medium"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--vert-olive)",
                  }}
                >
                  200€
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: "var(--texte-secondaire)" }}>
                Au lieu de 250€ — Économisez 50€
              </p>
              <Link href="/reservation" className="btn-primary w-full">
                Réserver ce forfait
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Une question sur mes services ?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--texte-secondaire)" }}
          >
            N&apos;hésitez pas à me contacter pour échanger sur vos besoins et trouver 
            l&apos;accompagnement qui vous correspond.
          </p>
          <Link href="/contact" className="btn-secondary text-lg">
            Me contacter
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
