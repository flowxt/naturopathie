import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--beige-clair) 0%, var(--creme) 40%, var(--blanc-creme) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-15 animate-float"
          style={{ background: "var(--beige-dore)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{ background: "var(--vert-clair)", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-10 animate-float"
          style={{ background: "var(--terracotta-light)", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 animate-fade-in-up"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                color: "var(--terracotta)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--vert-olive)" }} />
              Accompagnement Holistique
            </div>

            {/* Main heading */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 animate-fade-in-up delay-100"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
                lineHeight: "1.1",
              }}
            >
              Réveillez l&apos;
              <span className="gradient-text">harmonie</span>
              <br />
              qui sommeille en vous
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200"
              style={{ color: "var(--texte-secondaire)" }}
            >
              Je vous accompagne à travers une approche holistique prenant en compte le corps, 
              l&apos;esprit, les émotions et l&apos;énergie, dans une profonde bienveillance et écoute de l&apos;âme.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Link href="/reservation" className="btn-primary text-lg">
                Réserver une séance
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                Découvrir mes services
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="mt-12 pt-8 border-t flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in-up delay-400"
              style={{ borderColor: "rgba(183, 116, 88, 0.2)" }}
            >
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl md:text-4xl font-medium"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--terracotta)",
                  }}
                >
                  En présentiel
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  ou à distance
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl md:text-4xl font-medium"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--terracotta)",
                  }}
                >
                  100%
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  personnalisé
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div
                  className="text-3xl md:text-4xl font-medium"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--vert-olive)",
                  }}
                >
                  Naturel
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  approche douce
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/naturopathie.jpg"
                alt="Naturopathie et soins énergétiques"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 60%, rgba(183, 116, 88, 0.2) 100%)",
                }}
              />
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl max-w-xs"
              style={{
                background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
              }}
            >
              <p className="text-white font-medium mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
                Dorothée Duret
              </p>
              <p className="text-white/90 text-sm">
                Énergéticienne & Naturopathe certifiée
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: "var(--terracotta-light)" }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{ background: "var(--terracotta)" }}
          />
        </div>
      </div>
    </section>
  );
}
