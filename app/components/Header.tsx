"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
      style={{
        background: isScrolled
          ? "rgba(253, 252, 250, 0.95)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 2px 20px rgba(183, 116, 88, 0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.jpg"
                alt="L'Expression de l'Âme"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="text-xl font-medium block"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--texte-principal)",
                }}
              >
                L&apos;Expression de l&apos;Âme
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--terracotta)" }}
              >
                Soins Énergétiques & Naturopathie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-opacity ${
                  pathname === link.href
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                }`}
                style={{ color: "var(--texte-principal)" }}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ background: "var(--terracotta)" }}
                  />
                )}
              </Link>
            ))}
            <Link href="/reservation" className="btn-primary text-sm py-2 px-5">
              Réserver
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ background: "var(--terracotta)" }}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
                style={{ background: "var(--terracotta)" }}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ background: "var(--terracotta)" }}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="rounded-2xl p-6 shadow-lg"
            style={{ background: "var(--blanc-creme)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-center font-medium ${
                  pathname === link.href ? "opacity-100" : "opacity-70"
                }`}
                style={{ color: "var(--texte-principal)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservation"
              className="btn-primary block text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
