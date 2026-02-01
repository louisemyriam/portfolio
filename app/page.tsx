"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, Globe } from "lucide-react"

const translations = {
  fr: {
    internshipBanner: "Disponible pour un stage à partir de fin mars 2026",
    home: "ACCUEIL",
    works: "TRAVAUX",
    about: "À PROPOS",
    contact: "CONTACT",
    heroName: "Louise Myriam HAMDI DAGHMOUNI",
    heroSubtitle: "Designer numérique / Étudiant",
    heroCategories: "Web · 3D · Motion · Jeux vidéo",
    selectedWorks: "TRAVAUX SÉLECTIONNÉS",
    viewAll: "Voir tous les projets",
    infoTitle: "À PROPOS",
    infoParagraph1:
      "Étudiante en design numérique, je suis passionnée par la création d’interfaces, l’interaction utilisateur, l’image, les expériences immersives ainsi que la conception de jeux vidéo.",
    infoParagraph2: "Mon travail explore le lien entre design, technologie et narration visuelle.",
    getInTouch: "ENTRER EN CONTACT",
    getInTouchText: "Je suis actuellement à la recherche d’un stage de 12 semaines à partir de fin mars 2026. Une idée, une opportunité ou une question ? N’hésitez pas à me contacter pour en discuter.",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },
  en: {
    internshipBanner: "Available for an internship starting end of March, 2026",
    home: "HOME",
    works: "WORKS",
    about: "ABOUT",
    contact: "CONTACT",
    heroName: "Louise Myriam HAMDI DAGHMOUNI",
    heroSubtitle: "Digital designer / Student",
    heroCategories: "Web · 3D · Motion · Video games",
    selectedWorks: "SELECTED WORKS",
    viewAll: "View all projects",
    infoTitle: "ABOUT",
    infoParagraph1:
      "I’m a digital design student passionate about interface creation, user interaction, visual design, immersive experiences, and game design.",
    infoParagraph2: "My work explores the connection between design, technology, and visual storytelling.",
    getInTouch: "GET IN TOUCH",
    getInTouchText:
      "I’m currently looking for a 12-week internship starting in late March 2026. Have an idea, an opportunity, or a question? Feel free to get in touch to talk about it.",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },  
}

const heroImages = [
  "/figma-ui-design-colorful-interface.jpg",
  "/3d-blender-render-abstract-sculpture.jpg",
  "/video-game-concept-art-futuristic.jpg",
  "/motion-design-animation-colorful.jpg",
]

const selectedProjects = [
  {
    id: 1,
    title: "DIORAMA 3D",
    titleEn: "DIORAMA 3D",
    category: "3D Modeling — Blender",
    image: "/project-1-thumb.jpg",
  },
  {
    id: 2,
    title: "MOTION DESIGN",
    titleEn: "MOTION DESIGN",
    category: "Motion design — After Effects ",
    categoryEn: "Motion design — After Effects",
    image: "/project-2-thumb.jpg",
  },
  {
    id: 3,
    title: "WEBDESIGN ",
    titleEn: " WEBDESIGN ",
    category: "PROTOTYPAGE - FIGMA",
    categoryEn: "PROTOTYPING FIGMA",
    image: "/photo1.jpg",
  },
  {
    id: 4,
    title: "GAME DESIGN",
    titleEn: "GAME DESIGN",
    category: "Concept de jeu vidéo — Unity",
    categoryEn: "Video game concept — Unity",
    image: "/project-4-thumb.jpg",
  },
]

function BackgroundFollowImageWords({ words }: { words: { word: string; image: string }[] }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visibleImage, setVisibleImage] = useState<string | null>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div className="relative inline-block">
      {/* Background Image */}
      {visibleImage && (
        <div
          className="pointer-events-none absolute z-0 opacity-30 transition-all duration-300 ease-out"
          style={{
            top: pos.y - 100,
            left: pos.x - 100,
            width: 200,
            height: 200,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={visibleImage}
            alt=""
            className="w-full h-full object-cover rounded-xl blur-sm"
          />
        </div>
      )}

      {/* Foreground Text */}
      <h1 className="relative z-10 text-7xl md:text-9xl lg:text-[160px] font-light tracking-tighter leading-none flex flex-wrap justify-center gap-x-4">
        {words.map(({ word, image }, idx) => (
          <span
            key={idx}
            onMouseEnter={() => setVisibleImage(image)}
            onMouseLeave={() => setVisibleImage(null)}
            className="relative inline-block cursor-pointer"
          >
            {word}
          </span>
        ))}
      </h1>
    </div>
  )
}





export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr")
  const [menuOpen, setMenuOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeImage, setActiveImage] = useState(0)
  const [hasMouseMoved, setHasMouseMoved] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const t = translations[lang]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".animate-on-scroll")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setHasMouseMoved(true)
          setMousePos({ x: e.clientX, y: e.clientY })
          const section = Math.floor((e.clientX / window.innerWidth) * heroImages.length)
          setActiveImage(Math.min(section, heroImages.length - 1))
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

      {/* Hero Section with Mouse-Tracking Images */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-12">
       {/* {heroImages.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
            style={{
              opacity: hasMouseMoved && activeImage === idx ? 0.2 : 0,
              transform: `translate(${(mousePos.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.03}px, ${(mousePos.y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * 0.03}px) scale(${hasMouseMoved && activeImage === idx ? 1 : 0.95})`,
              filter: hasMouseMoved && activeImage === idx ? "blur(0px)" : "blur(30px)",
              transition: "opacity 500ms, filter 500ms, transform 500ms",
            }}
          >
            <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </div>
        ))} */}

        <div className="relative z-10 text-center px-6">
        <BackgroundFollowImageWords
  words={[
    { word: "Louise", image: "/project-3-hero.jpg" },
    { word: "Myriam", image: "/project-1-2.jpg" },
    { word: "HAMDI", image: "project-4-hero.jpg" },
    { word: "DAGHMOUNI", image: "/project-2-hero.jpg" },

  ]}
/>

          <p className="text-lg md:text-xl font-light text-gray-400 mb-2">{t.heroSubtitle}</p>
          <p className="text-base md:text-lg font-light text-gray-500">{t.heroCategories}</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 animate-on-scroll opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-16 tracking-tight">{t.selectedWorks}</h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {selectedProjects.map((project) => (
              <Link key={project.id} href={`/works/${project.id}`} className="group block">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-zinc-900">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={lang === "fr" ? project.title : project.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-2 tracking-tight">
                  {lang === "fr" ? project.title : project.titleEn}
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  {lang === "fr" ? project.category : project.categoryEn || project.category}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/works"
              className="inline-block text-sm uppercase tracking-widest border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              {t.viewAll}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 animate-on-scroll opacity-0">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
      {/* Image on the left */}
      <div className="w-full max-w-sm mx-auto md:mx-0">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/3d-blender-render-abstract-sculpture.jpg"
            alt="3D Render"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text on the right */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">{t.infoTitle}</h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">{t.infoParagraph1}</p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">{t.infoParagraph2}</p>
        </div>
      </div>
    </div>
  </div>
</section>

            {/*
      <section className="py-24 animate-on-scroll opacity-0">
        <div className="w-full h-[80vh] relative overflow-hidden">
          <img src="/3d-blender-render-abstract-sculpture.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </section> */}

      <section className="py-24 px-6 md:px-12 lg:px-24 animate-on-scroll opacity-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight">{t.getInTouch}</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">{t.getInTouchText}</p>
            </div>
            <div className="flex flex-col gap-6">
              <a
                href="mailto:louisemyriam.hamdidaghmouni@gmail.com"
                className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity border-b border-gray-800 pb-4"
              >
                {t.email}
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity border-b border-gray-800 pb-4"
              >
                {t.instagram}
              </a>
              <a
                href="https://www.linkedin.com/in/louise-myriam-hamdi-daghmouni-641693298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity border-b border-gray-800 pb-4"
              >
                {t.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>© 2026 {t.heroName}</p>
        </div>
      </footer>
    </div>
  )
}
