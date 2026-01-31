"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const translations = {
  en: {
    services: "Services",
    subtitle: "What I can do for you",
    contact: "Contact",
    info: "Information",
    getInTouch: "Let's work together",
    services1Title: "Brand Strategy & Identity",
    services1Desc:
      "Creating cohesive brand identities that tell your story and connect with your audience. From strategy to visual systems, I help establish brands that stand out.",
    services2Title: "Art Direction",
    services2Desc:
      "Leading creative vision for campaigns, photoshoots, and visual content. I ensure every touchpoint reflects your brand's essence and values.",
    services3Title: "Web Design & Development",
    services3Desc:
      "Designing and building responsive websites that are both beautiful and functional. I specialize in creating digital experiences that engage and convert.",
    services4Title: "UI/UX Design",
    services4Desc:
      "Crafting intuitive interfaces and delightful user experiences for web and mobile applications. User-centered design is at the heart of everything I do.",
    services5Title: "Packaging Design",
    services5Desc:
      "Creating packaging that stands out on shelves and in hands. I design systems that are sustainable, functional, and visually compelling.",
    services6Title: "Creative Consulting",
    services6Desc:
      "Providing strategic creative guidance for startups and established brands. From workshops to ongoing consulting, I help teams unlock their creative potential.",
  },
  fr: {
    services: "Services",
    subtitle: "Ce que je peux faire pour vous",
    contact: "Contact",
    info: "Information",
    getInTouch: "Travaillons ensemble",
    services1Title: "Stratégie et Identité de Marque",
    services1Desc:
      "Créer des identités de marque cohérentes qui racontent votre histoire et se connectent avec votre audience. De la stratégie aux systèmes visuels, j'aide à établir des marques qui se démarquent.",
    services2Title: "Direction Artistique",
    services2Desc:
      "Diriger la vision créative pour les campagnes, les séances photo et le contenu visuel. Je m'assure que chaque point de contact reflète l'essence et les valeurs de votre marque.",
    services3Title: "Design Web et Développement",
    services3Desc:
      "Concevoir et construire des sites web réactifs qui sont à la fois beaux et fonctionnels. Je me spécialise dans la création d'expériences numériques qui engagent et convertissent.",
    services4Title: "Design UI/UX",
    services4Desc:
      "Créer des interfaces intuitives et des expériences utilisateur agréables pour les applications web et mobiles. La conception centrée sur l'utilisateur est au cœur de tout ce que je fais.",
    services5Title: "Design d'Emballage",
    services5Desc:
      "Créer des emballages qui se démarquent sur les étagères et entre les mains. Je conçois des systèmes durables, fonctionnels et visuellement convaincants.",
    services6Title: "Conseil Créatif",
    services6Desc:
      "Fournir des conseils créatifs stratégiques pour les startups et les marques établies. Des ateliers aux conseils continus, j'aide les équipes à libérer leur potentiel créatif.",
  },
}

export default function Services() {
  const [lang, setLang] = useState<"en" | "fr">("en")
  const t = translations[lang]

  const services = [
    { title: t.services1Title, desc: t.services1Desc },
    { title: t.services2Title, desc: t.services2Desc },
    { title: t.services3Title, desc: t.services3Desc },
    { title: t.services4Title, desc: t.services4Desc },
    { title: t.services5Title, desc: t.services5Desc },
    { title: t.services6Title, desc: t.services6Desc },
  ]

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
          <h1 className="text-5xl md:text-6xl font-medium mb-6">{t.services}</h1>
          <p className="text-xl text-muted-foreground mb-20 max-w-[600px]">{t.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-32">
            {services.map((service, index) => (
              <div key={index} className="border-t border-border pt-8">
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                {t.getInTouch}
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2025 — All rights reserved</p>
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
