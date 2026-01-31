import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Conseils Bien-être & Naturopathie",
  description: "Découvrez mes articles sur la naturopathie, les soins énergétiques et le bien-être naturel.",
};

export default function BlogPage() {
  // Pour le moment, le blog est vide - vous pourrez ajouter des articles plus tard
  const articles: { title: string; excerpt: string; date: string; slug: string }[] = [];

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
            Ressources & Conseils
          </span>
          <h1
            className="text-5xl md:text-6xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Blog
          </h1>
          <div className="section-divider" />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Découvrez mes articles sur la naturopathie, les soins énergétiques 
            et le bien-être au naturel.
          </p>
        </div>
      </section>

      {/* Empty State */}
      {articles.length === 0 ? (
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div
              className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--beige-clair) 0%, var(--creme) 100%)",
              }}
            >
              <svg
                className="w-16 h-16"
                style={{ color: "var(--terracotta)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h2
              className="text-3xl md:text-4xl font-medium mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Le blog arrive bientôt
            </h2>
            <p
              className="text-lg mb-10 max-w-2xl mx-auto"
              style={{ color: "var(--texte-secondaire)" }}
            >
              Je prépare du contenu de qualité pour vous accompagner dans votre 
              chemin vers le bien-être. Restez connectés, les premiers articles 
              arrivent prochainement.
            </p>

            {/* Thématiques à venir */}
            <div
              className="rounded-3xl p-10 max-w-3xl mx-auto mb-10"
              style={{
                background: "white",
                boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
              }}
            >
              <h3
                className="text-2xl font-medium mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                Thématiques à venir
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: "Nutrition & alimentation saine" },
                  { text: "Énergies & chakras" },
                  { text: "Gestion du stress" },
                  { text: "Plantes & phytothérapie" },
                  { text: "Équilibre émotionnel" },
                  { text: "Sommeil & récupération" },
                ].map((theme, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl text-left"
                    style={{ background: "var(--beige-clair)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--terracotta)" }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="font-medium"
                      style={{ color: "var(--texte-principal)" }}
                    >
                      {theme.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact placeholder */}
            <div
              className="rounded-3xl p-10 max-w-2xl mx-auto"
              style={{
                background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
              }}
            >
              <div className="text-white text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(255, 255, 255, 0.2)" }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-medium mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Restez informée
                </h3>
                <p className="text-white/90 mb-6">
                  En attendant, n&apos;hésitez pas à me contacter directement pour 
                  toute question sur la naturopathie ou les soins énergétiques.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
                  style={{
                    background: "white",
                    color: "var(--terracotta)",
                  }}
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Quand il y aura des articles, ils s'afficheront ici
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="blog-card"
                >
                  {/* Structure pour les futurs articles */}
                  <div className="p-6">
                    <span className="text-sm" style={{ color: "var(--terracotta)" }}>
                      {article.date}
                    </span>
                    <h3 className="text-xl font-medium mt-2 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {article.title}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--texte-secondaire)" }}>
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="inline-block mt-4 text-sm font-medium"
                      style={{ color: "var(--terracotta)" }}
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
