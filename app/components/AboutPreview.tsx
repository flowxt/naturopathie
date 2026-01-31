import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  const values = [
    { label: "Bienveillance" },
    { label: "Naturel" },
    { label: "Écoute" },
    { label: "Harmonie" },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--blanc-creme)" }}
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background: "linear-gradient(135deg, var(--beige-clair) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/foret.png"
                alt="Dorothée - Énergéticienne et Naturopathe"
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
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: "var(--terracotta)" }}
            >
              À propos
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium mt-3 mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Dorothée, votre accompagnante
            </h2>
            <div className="section-divider mb-8" style={{ marginLeft: 0 }} />

            <div
              className="space-y-4 text-lg mb-8"
              style={{ color: "var(--texte-secondaire)" }}
            >
              <p>
                Je m&apos;appelle Dorothée, j&apos;ai 35 ans et je suis énergéticienne et naturopathe.
              </p>
              <p>
                Ma mission est de vous accompagner à travers une approche holistique, 
                prenant en compte le corps, l&apos;esprit, les émotions et l&apos;énergie, 
                dans une profonde bienveillance et écoute de l&apos;âme.
              </p>
              <p>
                Chaque accompagnement est personnalisé et respectueux de votre rythme, 
                avec pour intention de vous guider vers plus d&apos;équilibre, de vitalité 
                et d&apos;harmonie intérieure.
              </p>
            </div>

            <Link href="/a-propos" className="btn-secondary">
              En savoir plus sur mon parcours
            </Link>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "var(--beige-clair)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--terracotta)" }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span
                    className="font-medium"
                    style={{ color: "var(--texte-principal)" }}
                  >
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
