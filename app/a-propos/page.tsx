import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Dorothée Duret - Énergéticienne & Naturopathe",
  description: "Découvrez mon parcours et ma mission : vous accompagner avec bienveillance vers plus d'équilibre, de vitalité et d'harmonie intérieure.",
};

export default function AboutPage() {
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
            Mon histoire
          </span>
          <h1
            className="text-5xl md:text-6xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Dorothée Duret
          </h1>
          <div className="section-divider" />
          <p
            className="mt-6 text-xl"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Énergéticienne & Naturopathe
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/foret.png"
                  alt="Dorothée Duret - Énergéticienne et Naturopathe"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full -z-10"
                style={{ background: "var(--vert-clair)", opacity: 0.4 }}
              />
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full -z-10"
                style={{ background: "var(--terracotta-light)", opacity: 0.3 }}
              />

              {/* Info badge */}
              <div
                className="absolute -bottom-4 right-8 px-6 py-4 rounded-2xl shadow-xl"
                style={{
                  background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                }}
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    35 ans
                  </div>
                  <div className="text-xs opacity-80">Passionnée de bien-être</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-medium mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                Ma mission
              </h2>
              <div className="section-divider mb-8" style={{ marginLeft: 0 }} />

              <div
                className="space-y-6 text-lg"
                style={{ color: "var(--texte-secondaire)" }}
              >
                <p>
                  Je m&apos;appelle Dorothée, j&apos;ai 35 ans et je suis énergéticienne et naturopathe.
                </p>
                <p>
                  Ma mission est d&apos;accompagner mes consultants à travers une approche holistique, 
                  prenant en compte le corps, l&apos;esprit, les émotions et l&apos;énergie, dans une 
                  profonde bienveillance et écoute de l&apos;âme.
                </p>
                <p>
                  Chaque accompagnement est personnalisé et respectueux de votre rythme, avec pour 
                  intention de vous guider vers plus d&apos;équilibre, de vitalité et d&apos;harmonie intérieure.
                </p>
                <p>
                  Je crois profondément que chacun possède en lui les ressources nécessaires pour 
                  retrouver son équilibre naturel. Mon rôle est de vous accompagner dans cette 
                  reconnexion à vous-même, en utilisant des méthodes douces et naturelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Mes valeurs
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bienveillance",
                description: "Un accompagnement doux et respectueux de votre rythme",
              },
              {
                title: "Naturel",
                description: "Des méthodes douces qui respectent le corps et l'esprit",
              },
              {
                title: "Écoute",
                description: "Une attention profonde à vos besoins et votre histoire",
              },
              {
                title: "Harmonie",
                description: "Un équilibre global du corps, de l'esprit et de l'énergie",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="card-hover rounded-2xl p-8 text-center"
                style={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(183, 116, 88, 0.08)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-medium mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definitions Section */}
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
              Mes pratiques
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Naturopathie */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "linear-gradient(145deg, white 0%, var(--beige-clair) 100%)",
                boxShadow: "0 10px 40px rgba(90, 107, 79, 0.1)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, var(--vert-sauge) 0%, var(--vert-olive) 100%)",
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-medium mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                La Naturopathie
              </h3>
              <p
                className="text-lg"
                style={{ color: "var(--texte-secondaire)" }}
              >
                La naturopathie est un ensemble de méthodes de soins visant à renforcer 
                les défenses de l&apos;organisme par des moyens considérés comme naturels et biologiques.
              </p>
            </div>

            {/* Soins énergétiques */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "linear-gradient(145deg, white 0%, var(--beige-clair) 100%)",
                boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3
                className="text-2xl font-medium mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                Le Soin Énergétique
              </h3>
              <p
                className="text-lg"
                style={{ color: "var(--texte-secondaire)" }}
              >
                Le soin énergétique est une pratique holistique qui vise à instaurer un 
                rééquilibrage énergétique complet dans tout le corps. Il permet de lever tous 
                les verrous (dénouer les nœuds, blocages et stress au niveau physique, psychique 
                et émotionnel) pour faciliter la circulation de l&apos;énergie d&apos;elle-même.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
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
              Où me trouver ?
            </h2>
            <div className="section-divider" />
          </div>

          <div
            className="rounded-3xl p-10 text-center"
            style={{
              background: "white",
              boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
            }}
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
              }}
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3
              className="text-2xl font-medium mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Cabinet à Martagny
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: "var(--texte-secondaire)" }}
            >
              2B rue de la Mare<br />
              27150 MARTAGNY
            </p>

            <div
              className="inline-block px-6 py-3 rounded-full text-sm mb-8"
              style={{
                background: "var(--beige-clair)",
                color: "var(--texte-principal)",
              }}
            >
              <strong>Secteurs desservis :</strong> Gisors, Etrepagny, Gournay en Bray, 
              Forges les Eaux, Rouen, Beauvais
            </div>

            <div className="space-y-4">
              <p
                className="text-lg"
                style={{ color: "var(--texte-secondaire)" }}
              >
                Les séances peuvent également se dérouler <strong>à distance</strong> 
                (visioconférence pour la naturopathie, distance pour les soins énergétiques).
              </p>
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
            Envie de commencer votre chemin vers le bien-être ?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Réservez votre première séance et découvrons ensemble comment je peux vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation" className="btn-primary text-lg">
              Prendre rendez-vous
            </Link>
            <Link href="/services" className="btn-secondary text-lg">
              Découvrir mes services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
