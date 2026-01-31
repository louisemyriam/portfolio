"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Globe } from "lucide-react"

const translations = {
  fr: {
    internshipBanner: "Disponible pour un stage à partir de fin mars 2025",
    home: "ACCUEIL",
    works: "TRAVAUX",
    about: "À PROPOS",
    contact: "CONTACT",
    aboutTitle: "À Propos",
    intro:
      "Je suis un designer numérique et créatif multidisciplinaire passionné par l'exploration des intersections entre design, technologie et narration.",
    background: "Parcours",
    backgroundText:
      "Actuellement étudiant en design numérique, je travaille sur des projets qui couvrent le web design (UI/UX), la modélisation 3D, le motion design, le développement web et le concept art pour jeux vidéo. Mon approche combine pensée créative et compétences techniques pour donner vie aux idées.",
    skills: "Compétences",
    approach: "Approche",
    approachText:
      "Je crois en la création d'expériences qui racontent des histoires et connectent avec les gens. Que ce soit à travers une interface utilisateur, un rendu 3D ou un concept de jeu, je m'efforce de créer un travail qui soit à la fois visuellement convaincant et fonctionnellement solide.",
  },
  en: {
    internshipBanner: "Available for an internship starting end of March 2025",
    home: "HOME",
    works: "WORKS",
    about: "ABOUT",
    contact: "CONTACT",
    aboutTitle: "About",
    intro:
      "I'm a digital designer and multidisciplinary creative passionate about exploring the intersections of design, technology, and storytelling.",
    background: "Background",
    backgroundText:
      "Currently studying digital design, I work on projects spanning web design (UI/UX), 3D modeling, motion design, web development, and video game concept art. My approach combines creative thinking with technical skills to bring ideas to life.",
    skills: "Skills",
    approach: "Approach",
    approachText:
      "I believe in creating experiences that tell stories and connect with people. Whether through a user interface, a 3D render, or a game concept, I strive to create work that is both visually compelling and functionally sound.",
  },
}

const skills = [
  "Web Design (Figma)",
  "UI/UX Design",
  "3D Modeling (Blender)",
  "Motion Design",
  "HTML / CSS / JavaScript",
  "AI-Assisted Design",
  "Concept Art",
  "Game Design",
  "Prototyping",
  "Design Systems",
]

export default function About() {
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
          <h1 className="text-5xl md:text-7xl font-light mb-12">{t.aboutTitle}</h1>

          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-20">{t.intro}</p>

          {/* Background */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">{t.background}</h2>
            <p className="text-xl leading-relaxed text-gray-300">{t.backgroundText}</p>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">{t.skills}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="px-4 py-3 bg-gray-900 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">{t.approach}</h2>
            <p className="text-xl leading-relaxed text-gray-300">{t.approachText}</p>
          </div>

          {/* Profile Image */}
<div className="aspect-square max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
  <img
    src="/placeholder-user.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

        </div>

        
      </main>
    </div>
  )
}
