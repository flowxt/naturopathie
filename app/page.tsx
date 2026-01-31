import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import SalonGallery from "./components/SalonGallery";
import AboutPreview from "./components/AboutPreview";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

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
