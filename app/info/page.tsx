"use client"
{/* <!-- Triggering Vercel deploy --> */}

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const translations = {
  en: {
    info: "Information",
    whatIDo: "What I Do",
    whatIDoDesc:
      "I'm a brand designer and creative developer specializing in creating meaningful visual identities and digital experiences. I work at the intersection of design and technology, believing that beautiful work should also be thoughtfully built.",
    myBackground: "My Background",
    myBackgroundDesc:
      "With 5+ years of experience working with startups, studios, and established brands, I've helped shape the visual identity of companies across lifestyle, hospitality, and technology sectors. I studied design at [Your University] and have worked with clients from Paris to Tokyo.",
    myApproach: "My Approach",
    myApproachDesc:
      "I believe in collaborative, iterative design processes. Every project starts with deep research into your brand, audience, and goals. I focus on creating flexible design systems that can grow with your brand while maintaining strong visual consistency.",
    career: "Career",
    services: "Services",
    contact: "Contact",
  },
  fr: {
    info: "Information",
    whatIDo: "Ce Que Je Fais",
    whatIDoDesc:
      "Je suis designer de marque et développeur créatif spécialisé dans la création d'identités visuelles significatives et d'expériences numériques. Je travaille à l'intersection du design et de la technologie, croyant que le beau travail doit aussi être construit de manière réfléchie.",
    myBackground: "Mon Parcours",
    myBackgroundDesc:
      "Avec plus de 5 ans d'expérience auprès de startups, de studios et de marques établies, j'ai contribué à façonner l'identité visuelle d'entreprises dans les secteurs du lifestyle, de l'hospitalité et de la technologie. J'ai étudié le design à [Votre Université] et travaillé avec des clients de Paris à Tokyo.",
    myApproach: "Mon Approche",
    myApproachDesc:
      "Je crois en des processus de design collaboratifs et itératifs. Chaque projet commence par une recherche approfondie de votre marque, de votre audience et de vos objectifs. Je me concentre sur la création de systèmes de design flexibles qui peuvent évoluer avec votre marque tout en maintenant une forte cohérence visuelle.",
    career: "Parcours",
    services: "Services",
    contact: "Contact",
  },
}

const careerData = [
  {
    period: { en: "2023 — Present", fr: "2023 — Présent" },
    role: { en: "Senior Brand Designer", fr: "Designer de Marque Senior" },
    company: "Independent",
    location: { en: "Paris, France", fr: "Paris, France" },
  },
  {
    period: { en: "2021 — 2023", fr: "2021 — 2023" },
    role: { en: "Brand Designer", fr: "Designer de Marque" },
    company: "Creative Studio Co.",
    location: { en: "Lyon, France", fr: "Lyon, France" },
  },
  {
    period: { en: "2019 — 2021", fr: "2019 — 2021" },
    role: { en: "Junior Designer", fr: "Designer Junior" },
    company: "Design Agency",
    location: { en: "Paris, France", fr: "Paris, France" },
  },
]

export default function Info() {
  const [lang, setLang] = useState<"en" | "fr">("en")
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium hover:opacity-70 transition-opacity">
            Your Name
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/works" className="text-sm hover:opacity-70 transition-opacity">
              Work
            </Link>
            <Link href="/services" className="text-sm hover:opacity-70 transition-opacity">
              {t.services}
            </Link>
            <Link href="/info" className="text-sm hover:opacity-70 transition-opacity">
              {t.info}
            </Link>
            <Link href="/contact" className="text-sm hover:opacity-70 transition-opacity">
              {t.contact}
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setLang(lang === "en" ? "fr" : "en")} className="gap-2">
              <Globe className="w-4 h-4" />
              {lang === "en" ? "FR" : "EN"}
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-medium mb-20">{t.info}</h1>

          {/* Image Placeholder */}
          <div className="mb-20 aspect-[16/9] md:aspect-[21/9] bg-muted rounded-lg" />

          {/* What I Do */}
          <div className="mb-20 pb-20 border-b border-border">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">{t.whatIDo}</h2>
            <p className="text-2xl leading-relaxed max-w-[900px]">{t.whatIDoDesc}</p>
          </div>

          {/* My Background */}
          <div className="mb-20 pb-20 border-b border-border">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">{t.myBackground}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[800px]">{t.myBackgroundDesc}</p>
          </div>

          {/* My Approach */}
          <div className="mb-20 pb-20 border-b border-border">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">{t.myApproach}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[800px]">{t.myApproachDesc}</p>
          </div>

          {/* Career Timeline */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">{t.career}</h2>
            <div className="space-y-12">
              {careerData.map((item, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-6">
                  <div className="text-sm text-muted-foreground">{item.period[lang]}</div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-medium mb-1">{item.role[lang]}</h3>
                    <p className="text-muted-foreground">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.location[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2026 — All rights reserved</p>
            <div className="flex gap-6">
              <a href="https://linkedin.com" className="hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
              <a href="https://behance.com" className="hover:opacity-70 transition-opacity">
                Behance
              </a>
              <a href="https://instagram.com" className="hover:opacity-70 transition-opacity">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
