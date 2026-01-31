"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ background: "white" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
          style={{ background: "white" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2
          className="text-4xl md:text-5xl font-medium text-white mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Prête à commencer votre voyage vers le bien-être ?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Réservez votre première séance et entamez ensemble ce chemin vers 
          l&apos;équilibre et l&apos;harmonie intérieure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reservation"
            className="px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            style={{
              background: "white",
              color: "var(--terracotta)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Prendre rendez-vous
          </Link>
          <Link
            href="/tarifs"
            className="px-8 py-4 rounded-full font-medium text-lg text-white border-2 border-white transition-all hover:bg-white inline-flex items-center justify-center gap-2"
            style={{ color: "white" }}
          >
            Voir les tarifs
          </Link>
        </div>

        {/* Contact info */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Martagny (27150)</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>06 11 03 06 95</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>dorotheeduret78@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
