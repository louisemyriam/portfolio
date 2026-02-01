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
    allWorks: "Tous les Travaux",
  },
  en: {
    internshipBanner: "Available for an internship starting end of March 2026",
    home: "HOME",
    works: "WORKS",
    about: "ABOUT",
    contact: "CONTACT",
    allWorks: "All Works",
  },
}

const allProjects = [
  {
    id: 1,
    title: { en: "Diorama 3D – La Boulangerie", fr: "Diorama 3D – La Boulangerie" },
    type: { en: "Web Design – UI/UX (Figma)", fr: "Web Design – UI/UX (Figma)" },
    year: "2025",
    category: "3d",
  },
  {
    id: 2,
    title: { en: "Kinetic Typography – Don't Stop Me Now", fr: "Kinetic Typography – Don't Stop Me Now"},
    type: { en: "Motion design — After Effects", fr: "Motion design — After Effects" },
    year: "2025",
    category: "After Effects",
  },
  {
    id: 3,
    title: { en: "Secrets de Ville – Madrid", fr: "City Secrets – Madrid" },
    type: { en: "Prototyping - FIGMA", fr: "Prototypage - FIGMA" },
    year: "2025",
    category: "Figma",
  },
  {
    id: 4,
    title: { en: "GAME DESIGN", fr: "GAME DESIGN" },
    type: { en: "Video game concept — Unity", fr: "Concept de jeu vidéo — Unity" },
    year: "2025",
    category: "game developping",
  },
  {
    id: 5,
    title: { en: "Website-Mimi's Popcorn", fr: "Site Web – Mimi's Popcorn" },
    type: { en: "No-code website - Cursor", fr: "No code site web - Cursor " },
    year: "2025",
    category: "website-ai",
  },
  {
    id: 6,
    title: { en: "Website creation ", fr: "Creation d'un site web" },
    type: { en: "Designing and creating a website", fr: "Concept de Jeu Vidéo" },
    year: "2025",
    category: "website",
  },
  {
    id: 7,
    title: { en: "VR Target Practice – Game Design Project", fr: "VR Target Practice – Projet de Game Design" },
    type: { en: "VR Game – Unity Prototype", fr: "Jeu VR – Prototype Unity" },
    year: "2025",
    category: "unity",
  }, 
   /*
  {
    id: 8,
    title: { en: "Organic Forms Study", fr: "Étude de Formes Organiques" },
    type: { en: "3D Modeling – Blender", fr: "Modélisation 3D – Blender" },
    year: "2023",
    category: "3d",
  },
  {
    id: 9,
    title: { en: "The Forgotten Realm", fr: "Le Royaume Oublié" },
    type: { en: "Video Game Concept", fr: "Concept de Jeu Vidéo" },
    year: "2023",
    category: "game",
  },
  {
    id: 10,
    title: { en: "Neon Dreams", fr: "Rêves Néons" },
    type: { en: "Video Game Concept", fr: "Concept de Jeu Vidéo" },
    year: "2023",
    category: "game",
  }, */
]

export default function Works() {
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
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-20">{t.allWorks}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allProjects.map((project) => (
              <Link key={project.id} href={`/works/${project.id}`} className="group">
                <div className="aspect-[4/3] bg-gray-900 mb-4 overflow-hidden">
                  <img
                    src={`/project-${project.id}-thumb.jpg`}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{project.type[lang]}</p>
                <h3 className="text-xl font-light mb-1 group-hover:opacity-70 transition-opacity">
                  {project.title[lang]}
                </h3>
                <p className="text-sm text-gray-500">{project.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
