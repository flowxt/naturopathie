import { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import SalonGallery from "./components/SalonGallery";
import AboutPreview from "./components/AboutPreview";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "L'Expression de l'Âme | Soins Énergétiques & Naturopathie à Martagny et Nanterre",
  description:
    "Dorothée, énergéticienne et naturopathe, vous accompagne vers l'équilibre et l'harmonie intérieure. Soins énergétiques, naturopathie, consultations enfants à Martagny et Nanterre.",
  alternates: {
    canonical: "https://lexpressiondelame.fr",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--blanc-creme)" }}>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <SalonGallery />
        <AboutPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
