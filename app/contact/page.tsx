"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    type: "soin-energetique",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pour le moment, on affiche juste les données dans la console
    // Plus tard, vous pourrez intégrer un système d'envoi d'email
    console.log("Formulaire soumis:", formData);
    alert("Merci pour votre message ! Je vous répondrai dans les plus brefs délais.");
    
    // Reset form
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      type: "soin-energetique",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Prenons contact
          </span>
          <h1
            className="text-5xl md:text-6xl font-medium mt-3 mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--texte-principal)",
            }}
          >
            Contactez-moi
          </h1>
          <div className="section-divider" />
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--texte-secondaire)" }}
          >
            Prête à commencer votre voyage vers le bien-être ? 
            Je serais ravie d&apos;échanger avec vous.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 colonnes */}
            <div className="lg:col-span-2">
              <div
                className="rounded-3xl p-8 h-full sticky top-24"
                style={{
                  background: "linear-gradient(145deg, var(--terracotta) 0%, var(--terracotta-dark) 100%)",
                }}
              >
                <h2
                  className="text-3xl font-medium text-white mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Informations
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255, 255, 255, 0.2)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Adresse</h3>
                      <p className="text-white/80">
                        2B rue de la Mare<br />
                        27150 MARTAGNY
                      </p>
                      <p className="text-white/60 text-sm mt-2">
                        Secteurs : Gisors, Etrepagny, Gournay en Bray, 
                        Forges les Eaux, Rouen, Beauvais
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255, 255, 255, 0.2)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Téléphone</h3>
                      <a
                        href="tel:0611030695"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        06 11 03 06 95
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255, 255, 255, 0.2)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <a
                        href="mailto:dorotheeduret78@gmail.com"
                        className="text-white/80 hover:text-white transition-colors break-all"
                      >
                        dorotheeduret78@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255, 255, 255, 0.2)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Horaires</h3>
                      <p className="text-white/80">
                        Du lundi au samedi<br />
                        Sur rendez-vous uniquement
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendly placeholder */}
                <div
                  className="p-6 rounded-2xl text-center"
                  style={{ background: "rgba(255, 255, 255, 0.15)" }}
                >
                  <div className="flex items-center justify-center gap-2 text-white/90 text-sm mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Réservation en ligne
                  </div>
                  <p className="text-white/70 text-xs">
                    Système de réservation bientôt disponible
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form - 3 colonnes */}
            <div className="lg:col-span-3">
              <div
                className="rounded-3xl p-10"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 10px 40px rgba(183, 116, 88, 0.1)",
                }}
              >
                <h2
                  className="text-3xl font-medium mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "var(--texte-principal)",
                  }}
                >
                  Envoyez-moi un message
                </h2>
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--texte-secondaire)" }}
                >
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--texte-principal)" }}
                      htmlFor="nom"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors focus:border-opacity-50"
                      style={{
                        borderColor: "var(--beige-clair)",
                        background: "var(--creme)",
                      }}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--texte-principal)" }}
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors focus:border-opacity-50"
                        style={{
                          borderColor: "var(--beige-clair)",
                          background: "var(--creme)",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--texte-principal)" }}
                        htmlFor="telephone"
                      >
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors focus:border-opacity-50"
                        style={{
                          borderColor: "var(--beige-clair)",
                          background: "var(--creme)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--texte-principal)" }}
                      htmlFor="type"
                    >
                      Type de séance souhaitée *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors focus:border-opacity-50"
                      style={{
                        borderColor: "var(--beige-clair)",
                        background: "var(--creme)",
                        color: "var(--texte-principal)",
                      }}
                    >
                      <option value="soin-energetique">Soin Énergétique</option>
                      <option value="naturopathie">Naturopathie</option>
                      <option value="enfant">Soin Enfant</option>
                      <option value="forfait-adulte">Forfait 5 Soins Adultes</option>
                      <option value="forfait-enfant">Forfait 5 Soins Enfants</option>
                      <option value="question">Simple question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--texte-principal)" }}
                      htmlFor="message"
                    >
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement votre demande ou vos attentes..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors resize-none focus:border-opacity-50"
                      style={{
                        borderColor: "var(--beige-clair)",
                        background: "var(--creme)",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Envoyer le message
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--texte-secondaire)" }}
                  >
                    * Champs obligatoires — Vos données sont confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
