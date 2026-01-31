"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SalonGallery() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: "/soin-salon.png",
      alt: "Espace de soins énergétiques - Vue principale",
    },
    {
      src: "/salon-2.png",
      alt: "Espace de soins énergétiques - Vue sur la table de massage",
    },
    {
      src: "/salon-3.png",
      alt: "Espace de soins énergétiques - Ambiance chaleureuse",
    },
  ];

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "var(--blanc-creme)" }}
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full opacity-20"
        style={{
          background: "linear-gradient(135deg, var(--terracotta-light) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: "var(--terracotta)" }}
            >
              Un espace dédié à votre bien-être
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium mt-3 mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "var(--texte-principal)",
              }}
            >
              Le Salon de Soins
            </h2>
            <div className="section-divider mb-8" style={{ marginLeft: 0 }} />

            <div
              className="space-y-4 text-lg mb-8"
              style={{ color: "var(--texte-secondaire)" }}
            >
              <p>
                Bienvenue dans mon espace de soins, un cocon chaleureux pensé pour 
                vous offrir un moment de détente absolue.
              </p>
              <p>
                Dès votre arrivée, vous serez enveloppée par une atmosphère apaisante 
                aux teintes douces de terracotta et de rose poudré, propice au 
                lâcher-prise et à la reconnexion avec vous-même.
              </p>
              <p>
                Chaque détail a été soigneusement choisi pour créer un environnement 
                où vous vous sentirez en confiance, loin du stress quotidien, 
                prête à accueillir les bienfaits de votre séance.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Ambiance apaisante" },
                { label: "Matériaux naturels" },
                { label: "Lumière douce" },
                { label: "Confort optimal" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: "var(--beige-clair)" }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--terracotta)" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--texte-principal)" }}
                  >
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/reservation" className="btn-primary">
              Réserver ma séance
            </Link>
          </div>

          {/* Gallery */}
          <div className="order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-4">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
              
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: "linear-gradient(180deg, transparent 70%, var(--terracotta) 100%)",
                }}
              />

              {/* Navigation arrows */}
              <button
                onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255, 255, 255, 0.9)" }}
                aria-label="Image précédente"
              >
                <svg className="w-5 h-5" style={{ color: "var(--terracotta)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255, 255, 255, 0.9)" }}
                aria-label="Image suivante"
              >
                <svg className="w-5 h-5" style={{ color: "var(--terracotta)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-1 aspect-[4/3] rounded-xl overflow-hidden transition-all ${
                    activeImage === index
                      ? "scale-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  style={{
                    boxShadow: activeImage === index 
                      ? "0 0 0 3px var(--terracotta), 0 0 0 5px var(--blanc-creme)" 
                      : "none",
                  }}
                  aria-label={`Voir ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full -z-10"
              style={{ background: "var(--beige-dore)", opacity: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
