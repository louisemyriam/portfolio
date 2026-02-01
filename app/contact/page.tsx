"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Globe } from "lucide-react"

const translations = {
  fr: {
    internshipBanner: "Disponible pour un stage à partir de fin mars 2026",
    home: "ACCUEIL",
    works: "TRAVAUX",
    about: "À PROPOS",
    contact: "CONTACT",
    contactTitle: "Contact",
    subtitle: "Actuellement en recherche de stage, je reste à votre disposition pour échanger ou discuter de toute opportunité.",
    email: "Email",
    social: "Réseaux sociaux",
  },
  en: {
    internshipBanner: "Available for an internship starting end of March 2026",
    home: "HOME",
    works: "WORKS",
    about: "ABOUT",
    contact: "CONTACT",
    contactTitle: "Contact",
    subtitle: "I'm currently open to internship opportunities — feel free to reach out if you'd like to connect.",
    email: "Email",
    social: "Social",
  },
}

export default function Contact() {
  const [lang, setLang] = useState<"fr" | "en">("fr")
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Internship Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white text-black">
        <div className="px-6 py-3 text-center">
          <p className="text-sm font-medium">{t.internshipBanner}</p>
        </div>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-16 left-6 z-40 p-2 hover:opacity-70 transition-opacity"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Language Toggle */}
      <button
        onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        className="fixed top-16 right-6 z-40 p-2 hover:opacity-70 transition-opacity flex items-center gap-2"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm uppercase">{lang === "fr" ? "EN" : "FR"}</span>
      </button>

      {/* Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="flex flex-col gap-8 text-center">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-5xl md:text-7xl font-light hover:opacity-70 transition-opacity"
            >
              {t.home}
            </Link>
            <Link
              href="/works"
              onClick={() => setMenuOpen(false)}
              className="text-5xl md:text-7xl font-light hover:opacity-70 transition-opacity"
            >
              {t.works}
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-5xl md:text-7xl font-light hover:opacity-70 transition-opacity"
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-5xl md:text-7xl font-light hover:opacity-70 transition-opacity"
            >
              {t.contact}
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-12">{t.contactTitle}</h1>

          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-20">{t.subtitle}</p>

          {/* Email */}
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t.email}</h2>
            <a
              href="mailto:louisemyriam.hamdidaghmouni@ygmail.com"
              className="text-3xl md:text-4xl font-light hover:opacity-70 transition-opacity"
            >
              louisemyriam.hamdidaghmouni@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">{t.social}</h2>
            <div className="space-y-4">
              <div>
                <a
                  href="https://www.linkedin.com/in/louise-myriam-hamdi-daghmouni-641693298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:opacity-70 transition-opacity block"
                >
                  LinkedIn
                </a>
              </div>
             { /*<div>
                <a
                  href="https://behance.net/yourname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:opacity-70 transition-opacity block"
                >
                  Behance
                </a>
              </div>*/}
              <div>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:opacity-70 transition-opacity block"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:opacity-70 transition-opacity block"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
