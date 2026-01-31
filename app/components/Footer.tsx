import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-16 relative"
      style={{
        background: "linear-gradient(180deg, var(--blanc-creme) 0%, var(--beige-clair) 100%)",
      }}
    >
      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--beige-dore), var(--terracotta-light), var(--beige-dore), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt="L'Expression de l'Âme"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-xl font-medium"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                L&apos;Expression de l&apos;Âme
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--texte-secondaire)" }}
            >
              Soins énergétiques et naturopathie pour retrouver 
              votre équilibre naturel et votre vitalité.
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--gris-doux)" }}
            >
              SIRET : 978 661 080 00025
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-lg font-medium mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/a-propos", label: "À propos" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/reservation", label: "Réservation" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-medium mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--texte-secondaire)" }}>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--terracotta)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>2B rue de la Mare<br />27150 MARTAGNY</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0611030695" className="hover:opacity-70 transition-opacity">
                  06 11 03 06 95
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--terracotta)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dorotheeduret78@gmail.com" className="hover:opacity-70 transition-opacity">
                  dorotheeduret78@gmail.com
                </a>
              </li>
            </ul>

            {/* Zones */}
            <div className="mt-4">
              <p className="text-xs" style={{ color: "var(--gris-doux)" }}>
                Secteurs : Gisors, Etrepagny, Gournay en Bray, 
                Forges les Eaux, Rouen, Beauvais
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: "var(--beige-dore)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--texte-secondaire)" }}
          >
            © {new Date().getFullYear()} L&apos;Expression de l&apos;Âme — Dorothée Duret. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
