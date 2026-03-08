import Link from "next/link";
import Image from "next/image";

export default function ServicesPreview() {
  const services = [
    {
      title: "Soins Énergétiques",
      description:
        "Le soin énergétique vise à instaurer un rééquilibrage énergétique complet, levant les verrous et facilitant la circulation de l'énergie.",
      image: "/energie.jpg",
      color: "terracotta",
    },
    {
      title: "Naturopathie",
      description:
        "Un ensemble de méthodes de soins visant à renforcer les défenses de l'organisme par des moyens naturels et biologiques, adaptés à votre rythme.",
      image: "/ustensile.jpg",
      color: "vert",
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative"
      style={{
        background: "linear-gradient(180deg, var(--blanc-creme) 0%, var(--beige-clair) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="text-sm tracking-widest uppercase"
            style={{ color: "var(--terracotta)" }}
          >
            Mes prestations
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Services & Accompagnements
          </h2>
          <div className="section-divider" />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Des approches complémentaires pour vous accompagner vers un mieux-être global et durable.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover rounded-3xl overflow-hidden relative group"
              style={{
                background: "#ffffff",
                boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: service.color === "terracotta"
                      ? "linear-gradient(180deg, transparent 40%, rgba(183, 116, 88, 0.6) 100%)"
                      : "linear-gradient(180deg, transparent 40%, rgba(90, 107, 79, 0.6) 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6">
                  <span
                    className="text-white text-lg font-medium"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}
                  >
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-2xl font-medium mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-6"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-primary text-lg">
            Voir tous les services
          </Link>
        </div>
      </div>
    </section>
  );
}
