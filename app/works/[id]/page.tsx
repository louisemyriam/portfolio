"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Globe, ArrowLeft } from "lucide-react"
import { use } from "react"

const translations = {
  fr: {
    internshipBanner: "Disponible pour un stage à partir de fin mars 2026",
    home: "ACCUEIL",
    works: "TRAVAUX",
    about: "À PROPOS",
    contact: "CONTACT",
    backToWorks: "← Retour aux travaux",
    context: "Contexte",
    objective: "Objectif",
    tools: "Outils utilisés",
    process: "Processus",
    result: "Résultat",
  },
  en: {
    internshipBanner: "Available for an internship starting end of March 2026",
    home: "HOME",
    works: "WORKS",
    about: "ABOUT",
    contact: "CONTACT",
    backToWorks: "← Back to works",
    context: "Context",
    objective: "Objective",
    tools: "Tools used",
    process: "Process",
    result: "Result",
  },
}

const projectData: Record<string, any> = {
  "1": {
    title: { en: "3D Diorama – The Bakery", fr: "Diorama 3D – La Boulangerie" },
    type: { en: "3D Modeling – Environment Design", fr: "Modélisation 3D – Design d’Environnement" },
    context: {
      en: "A 3D diorama project where I created a cozy bakery scene to practice environment modeling and storytelling through design.",
      fr: "Un projet de diorama 3D dans lequel j’ai conçu une scène de boulangerie chaleureuse afin de m’exercer à la modélisation d’environnement et au storytelling visuel.",
    },
  objective: {
      en: "Design and model a detailed environment that captures the warm atmosphere of a bakery, while practicing object creation, layout, and lighting in Blender.",
      fr: "Créer et modéliser un environnement détaillé capturant l’ambiance chaleureuse d’une boulangerie, tout en pratiquant la création d’objets, la mise en scène et l’éclairage dans Blender.",
    },
  tools: ["Blender"],
  process: {
      en: "Started by gathering references and sketching a rough layout. Modeled individual assets such as croissants, bread, oven, and shelves. Composed the scene, applied basic materials, adjusted lighting, and rendered the final images.",
      fr: "J’ai commencé par rassembler des références et dessiner une première ébauche de la scène. J’ai ensuite modélisé les éléments comme les croissants, le pain, le four et les étagères. Après avoir composé la scène, j’ai appliqué des matériaux simples, ajusté l’éclairage et réalisé les rendus finaux.",
    },
  result: {
      en: "A stylized and inviting bakery diorama that demonstrates strong fundamentals in 3D environment creation. The project improved my workflow in Blender and my ability to tell stories visually through space and detail.",
      fr: "Un diorama de boulangerie stylisé et accueillant, démontrant de solides bases en création d’environnements 3D. Ce projet a renforcé mon workflow sur Blender et ma capacité à raconter une histoire visuellement à travers l’espace et les détails.",
    }

  },
  "2": {
    title: { en: "Kinetic Typography – Don't Stop Me Now", fr: "Kinetic Typography – Don't Stop Me Now" },
    type: { en: "Motion Design – After Effects", fr: "Motion Design – After Effects" },
    context: {
      en: "As part of a motion design assignment, we were asked to choose a song and create an animation using its lyrics as the central visual element. The goal was to visually interpret the rhythm, energy, and emotion of the music through animated typography. I chose “Don’t Stop Me Now” by Queen for its upbeat tempo and vibrant energy.",
      fr: "Dans le cadre d’un exercice de motion design, nous devions choisir une chanson et créer une animation en utilisant ses paroles comme élément visuel principal. L’objectif était d’interpréter visuellement le rythme, l’énergie et l’émotion de la musique à travers la typographie animée. J’ai choisi “Don’t Stop Me Now” de Queen pour son tempo entraînant et son énergie communicative.",
    },
    objective: {
      en: "The aim of the project was to explore synchronization between sound and image using kinetic typography. The challenge was to enhance the emotional impact of the music and lyrics through smooth, expressive, and rhythmic animation, while developing my motion design skills.",
      fr: "L’objectif du projet était d’explorer la synchronisation entre le son et l’image en utilisant la typographie cinétique. Le défi était d’accentuer l’impact émotionnel de la musique et des paroles à travers une animation fluide, expressive et rythmée, tout en développant mes compétences en motion design.",
    },
    tools: ["Adobe After Effects"],
    process: {
      en: "I began by selecting the song and identifying the most impactful lyric segments. I created a storyboard and animatic to plan the rhythm and transitions. The animation was developed in After Effects with careful timing to match the beat and mood of the music. Final refinements included adding visual effects, transitions, and polishing the overall pacing.",
      fr: "J’ai commencé par sélectionner la chanson et repérer les segments de paroles les plus percutants. Ensuite, j’ai réalisé un storyboard et un animatic pour planifier le rythme et les transitions. L’animation a été réalisée sur After Effects avec une attention particulière portée au timing et à la synchronisation avec la musique. Les finitions ont consisté à ajouter des effets visuels, des transitions et à peaufiner le rythme global.",
    },
    result: {
      en: "A fast-paced and vibrant video that brings the song to life through dynamic and expressive typography. This project helped me understand the importance of rhythm in motion design and sharpened my technical skills in After Effects.",
      fr: "Une vidéo dynamique et rythmée qui donne vie à la chanson à travers une typographie expressive et animée. Ce projet m’a permis de mieux comprendre l’importance du rythme en motion design et d’améliorer mes compétences techniques sur After Effects.",
     },
  },
  /*ADDED 3, 4, 5, TO CHECK WHERE THE IMAGES ARE PUT SO I CAN ADD THEM THERE AS WELL*/
  "3": {
    title: { en: "City Secrets – Madrid", fr: "Secrets de Ville – Madrid" },
    type: { en: "UI/UX Design – Figma Prototype", fr: "UI/UX Design – Prototype Figma" },
    context: {
     en: "As part of a UI/UX prototyping project, we were asked to design a digital experience around the theme 'City Secrets'. I chose to focus on the city of Madrid and designed a minimalist website that highlights hidden spots and unique experiences.",
    fr: "Dans le cadre d’un projet de prototypage UI/UX, nous devions concevoir une expérience numérique autour du thème 'Secrets de ville'. J’ai choisi la ville de Madrid et conçu un site web minimaliste mettant en avant des lieux cachés et des expériences uniques.",
    },
    objective: {
      en: "Design a clean and user-friendly web interface that helps users discover lesser-known places in Madrid. The prototype includes thematic categories, an interactive map, and a community section for users to share their own city secrets.",
      fr: "Concevoir une interface web épurée et facile à utiliser permettant aux utilisateurs de découvrir des lieux méconnus à Madrid. Le prototype comprend des catégories thématiques, une carte interactive et une section communautaire pour partager ses propres secrets de ville.",
    },
    tools: ["Figma", "Photoshop"],
    process: {
      en: "Started with research on hidden places and local culture in Madrid. Defined user personas and user flows. Designed wireframes and iterated on the layout. Developed a high-fidelity interactive prototype including animations and transitions between pages.",
      fr: "Recherche sur les lieux cachés et la culture locale de Madrid. Définition des personas et des parcours utilisateurs. Création de wireframes, puis itérations sur la mise en page. Réalisation d’un prototype interactif haute fidélité avec animations et transitions entre les pages.",
    },
    result: {
      en: "A sleek and intuitive prototype that showcases the charm of Madrid’s hidden gems. The project helped me strengthen my skills in user flow design, interactive prototyping, and minimalist UI design in Figma.",
      fr: "Un prototype élégant et intuitif qui met en valeur le charme des trésors cachés de Madrid. Ce projet m’a permis de renforcer mes compétences en conception de parcours utilisateur, prototypage interactif et design UI minimaliste sur Figma.",
    }

  },

  "4": {
  title: { en: "Faerys – Fantasy Escape Game", fr: "Faerys – Jeu d'Évasion Fantasy" },
  type: { en: "Game Design – Unity 3D", fr: "Game Design – Unity 3D" },
  context: {
    en: "As part of a group project, we were asked to create a game prototype based on the theme of fantasy. We chose to build a first-person narrative adventure set in a magical world of fairies. The story begins after the kidnapping of a fairy named Hemera, and the gameplay starts with her trying to escape.",
    fr: "Dans le cadre d’un projet de groupe, nous devions créer un prototype de jeu autour du thème de la fantasy. Nous avons choisi de développer une aventure narrative à la première personne dans un univers féerique. L’histoire commence après l’enlèvement d’une fée nommée Hemera, et le gameplay débute avec son évasion.",
  },
  objective: {
    en: "Develop a narrative-driven exploration game that combines light survival mechanics, interactive storytelling, and puzzle-solving. Each phase introduces new gameplay elements to ensure a progressive learning curve and immersive experience.",
    fr: "Développer un jeu d’exploration narratif combinant des mécaniques de survie légères, du storytelling interactif et des énigmes. Chaque phase introduit de nouvelles mécaniques afin de garantir une montée en complexité et une immersion progressive.",
  },
  tools: ["Unity", "C#", "Blender", "Trello","Figjam"],
  process: {
    en: [
      "Story writing and world-building based on the fantasy theme.",
      "Divided development into phases: escape, exploration, and objective-based progression.",
      "Implemented a first-person controller and basic combat mechanics.",
      "Designed environments with interactive objects (locked doors, narrative items, keys).",
      "Created survival elements: hunger/thirst effects, visual/audio feedback.",
      "Included a side quest (collecting pages for bonus content)."
    ],
    fr: [
      "Écriture de l’histoire et construction d’un univers basé sur la fantasy.",
      "Découpage du développement en phases : évasion, exploration, progression par objectifs.",
      "Implémentation d’un contrôleur à la première personne et de mécaniques de combat simples.",
      "Conception des environnements avec objets interactifs (portes verrouillées, objets narratifs, clés).",
      "Création de mécaniques de survie : gestion de la faim/soif avec effets visuels et sonores.",
      "Ajout d’une quête secondaire (collecte de pages pour débloquer un bonus)."
    ],
  },
  result: {
    en: "A rich and atmospheric game prototype combining storytelling and gameplay. The project helped us develop skills in narrative design, level design, Unity programming, and collaborative game development. ",
    fr: "Un prototype de jeu riche et immersif mêlant narration et gameplay. Ce projet nous a permis de développer des compétences en game design narratif, level design, programmation sur Unity et travail en équipe. ",
  }
},
"5": {
  title: { en: "Mimi's Popcorn – Website Project", fr: "Mimi's Popcorn – Projet de Site Web" },
  type: { en: "Web Development with a no-code solution", fr: "Développement Web avec une solution no code " },
  context: {
    en: "Creation of a fun and modern website for a fictional popcorn brand called Mimi’s Popcorn. I used modern development tools to structure and design the site, including the help of a coding assistant to accelerate the initial setup, before customizing it to match the brand’s tone and style.",
    fr: "Création d’un site web moderne et ludique pour une marque fictive de pop-corn appelée Mimi’s Popcorn. J’ai utilisé des outils de développement récents pour structurer et concevoir le site, avec l’aide d’un assistant de code pour accélérer la mise en place initiale, avant de le personnaliser selon l’identité de la marque.",
  },
  objective: {
    en: "Build a responsive and visually engaging website that reflects the playful identity of the brand, while ensuring a smooth and accessible user experience.",
    fr: "Développer un site web responsive et visuellement attrayant reflétant l’identité ludique de la marque, tout en garantissant une expérience utilisateur fluide et accessible.",
  },
  tools: ["Cursor", "HTML", "CSS", "JavaScript","V0","Blender"],
  process: {
    en: [
      "Set up initial project structure using modern development tools.",
      "Established brand identity with colors, fonts, and tone of voice.",
      "Used a coding assistant to generate boilerplate code, then manually customized layout and interactions.",
      "Implemented responsive design and smooth animations.",
      "Tested usability and refined the user interface."
    ],
    fr: [
      "Mise en place de la structure du projet avec des outils de développement modernes.",
      "Définition de l’identité visuelle : couleurs, typographie, ton.",
      "Utilisation d’un assistant de code pour générer une base, puis personnalisation manuelle du layout et des interactions.",
      "Intégration d’un design responsive et d’animations fluides.",
      "Tests d’utilisabilité et affinement de l’interface."
    ],
  },
  result: {
    en: "A vibrant and responsive website that delivers a playful brand experience. This project allowed me to improve my frontend skills and experiment with new development workflows.",
    fr: "Un site web dynamique et responsive offrant une expérience fidèle à l’univers de la marque. Ce projet m’a permis d’améliorer mes compétences en frontend et d’expérimenter de nouveaux flux de travail en développement.",
  }
},

  /* 3D MODELING EXAMPLE
  
  "2": {
    title: { en: "Abstract Sculpture Series", fr: "Série de Sculptures Abstraites" },
    type: { en: "3D Modeling – Blender", fr: "Modélisation 3D – Blender" },
    context: {
      en: "An exploration of organic forms and material properties through 3D modeling, inspired by natural formations and fluid dynamics.",
      fr: "Une exploration des formes organiques et des propriétés matérielles à travers la modélisation 3D, inspirée par les formations naturelles et la dynamique des fluides.",
    },
    objective: {
      en: "Push the boundaries of digital sculpture by exploring complex geometries, realistic materials, and dramatic lighting.",
      fr: "Repousser les limites de la sculpture numérique en explorant des géométries complexes, des matériaux réalistes et un éclairage dramatique.",
    },
    tools: ["Blender", "Substance Painter", "Photoshop"],
    process: {
      en: "Experimented with Blender's geometry nodes and sculpting tools. Focused on achieving photorealistic materials using PBR textures and advanced lighting setups.",
      fr: "Expérimenté avec les nœuds de géométrie et les outils de sculpture de Blender. Concentration sur l'obtention de matériaux photoréalistes utilisant des textures PBR et des configurations d'éclairage avancées.",
    },
    result: {
      en: "A series of 10 unique sculptures showcasing mastery of form, material and lighting. Several pieces were featured in digital art exhibitions.",
      fr: "Une série de 10 sculptures uniques démontrant la maîtrise de la forme, du matériau et de l'éclairage. Plusieurs pièces ont été présentées dans des expositions d'art numérique.",
    },
  },*/
  "6": {
  title: { en: "Moodvent – Event Discovery by Mood", fr: "Moodvent – Découverte d'Événements par l'Humeur" },
  type: { en: "Web Development – Full Project", fr: "Développement Web – Projet Complet" },
  context: {
    en: "As part of a group project during my Erasmus year, we developed a complete website from scratch called Moodvent. The platform allows users to discover local events based on their mood, and even submit their own. All submissions are reviewed by an admin team.",
    fr: "Dans le cadre d’un projet de groupe pendant mon année Erasmus, nous avons développé de A à Z un site web appelé Moodvent. La plateforme permet aux utilisateurs de découvrir des événements locaux en fonction de leur humeur, et même de proposer les leurs. Chaque proposition est ensuite validée par une équipe d'administration.",
  },
  objective: {
    en: "Create an interactive and responsive website with a unique event recommendation system based on mood. The project was also an opportunity to deepen our understanding of frontend development and user interactions.",
    fr: "Créer un site web interactif et responsive avec un système original de recommandation d'événements basé sur l'humeur. Le projet a également permis d’approfondir notre maîtrise du développement frontend et des interactions utilisateur.",
  },
  tools: ["HTML", "CSS", "JavaScript", "GitHub"],
  process: {
    en: [
      "Brainstormed the concept and planned the structure of the platform.",
      "Coded the entire frontend using HTML, CSS, and JavaScript.",
      "Developed interactive features such as mood selection and event filtering.",
      "Implemented form submission for user-generated events.",
      "Created admin review logic to manage submitted content.",
      "Tested responsiveness and optimized for usability."
    ],
    fr: [
      "Brainstorming du concept et planification de la structure du site.",
      "Développement complet du frontend en HTML, CSS et JavaScript.",
      "Création de fonctionnalités interactives comme la sélection d’humeur et le filtrage d’événements.",
      "Mise en place de formulaires pour la soumission d’événements par les utilisateurs.",
      "Développement de la logique de validation côté admin.",
      "Tests de responsivité et optimisation de l’expérience utilisateur."
    ],
  },
  result: {
    en: "A fully functional website with a creative concept and real user interaction logic. Moodvent strengthened our frontend coding skills and gave us hands-on experience in building a full web project as a team.",
    fr: "Un site web entièrement fonctionnel avec un concept original et une vraie logique d’interaction utilisateur. Moodvent a renforcé nos compétences en développement frontend et nous a permis d'acquérir une expérience concrète de la création d’un projet web en équipe.",
  }
},

  "7": {
  title: { en: "VR Target Practice – Game Design Project", fr: "VR Target Practice – Projet de Game Design" },
  type: { en: "VR Game – Unity Prototype", fr: "Jeu VR – Prototype Unity" },
  context: {
    en: "As part of a game design course, we had to create a VR game prototype. I decided to focus on target shooting mechanics, using both hands to interact with weapons. The experience was built entirely in Unity using pre-made assets from the Asset Store.",
    fr: "Dans le cadre d’un cours de game design, nous devions réaliser un prototype de jeu en réalité virtuelle. J’ai choisi de me concentrer sur des mécaniques de tir sur cibles, avec une interaction à deux mains pour manipuler les armes. L’expérience a été développée entièrement dans Unity à l’aide d’assets préexistants provenant de l’Asset Store.",
  },
  objective: {
    en: "Design a simple and immersive VR experience focused on shooting targets, exploring dual-hand interaction and basic gameplay feedback.",
    fr: "Concevoir une expérience VR simple et immersive centrée sur le tir de cibles, avec une interaction à deux mains et un retour visuel de base.",
  },
  tools: ["Unity", "XR Toolkit", "Unity Asset Store", "C#"],
  process: {
    en: [
      "Defined core gameplay concept: dual-hand shooting in VR.",
      "Set up the VR project in Unity using XR Toolkit.",
      "Imported and configured assets from Unity Asset Store.",
      "Implemented grabbing, aiming, and shooting mechanics.",
      "Added interactive targets with basic feedback on hit.",
      "Created a visual guide showing both hands and controls for the demo."
    ],
    fr: [
      "Définition du concept de gameplay : tir en VR avec interaction à deux mains.",
      "Configuration du projet VR dans Unity avec XR Toolkit.",
      "Importation et configuration d’assets depuis l’Unity Asset Store.",
      "Implémentation des mécaniques de saisie, visée et tir.",
      "Ajout de cibles interactives avec retour visuel à l’impact.",
      "Création d’un visuel explicatif montrant les deux mains et les contrôles pour la démo."
    ],
  },
  result: {
    en: "A first functional VR game prototype, including the core interactions I wanted to explore, such as shooting and object handling. While the result remains simple, it achieves its purpose and gave me hands-on experience with Unity’s VR development fundamentals.",
    fr: "Un premier prototype de jeu VR fonctionnel, intégrant les interactions de base que je souhaitais tester, comme le tir et la manipulation d’objets. Bien que le résultat reste simple, il remplit son objectif et m’a permis de découvrir concrètement les fondamentaux du développement VR avec Unity.",
  }
}


}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [lang, setLang] = useState<"fr" | "en">("fr")
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  const project = projectData[resolvedParams.id] || projectData["1"]

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
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/works"
            className="text-sm text-gray-400 hover:text-white transition-colors mb-12 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToWorks}
          </Link>

          {/* Hero Image */}
          <div className="aspect-video bg-gray-900 mb-12 overflow-hidden">
            <img
              src={`/public/project-${resolvedParams.id}-hero.jpg`}
              alt={project.title[lang]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Type */}
          <h1 className="text-5xl md:text-7xl font-light mb-4">{project.title[lang]}</h1>
          <p className="text-xl text-gray-400 mb-20">{project.type[lang]}</p>

          {/* Context */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t.context}</h2>
            <p className="text-xl leading-relaxed">{project.context[lang]}</p>
          </div>

          {/* Objective */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t.objective}</h2>
            <p className="text-xl leading-relaxed">{project.objective[lang]}</p>
          </div>

          {/* Tools */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t.tools}</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool: string) => (
                <span key={tool} className="px-4 py-2 bg-gray-900 text-white text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

 {/* Visual Gallery */}
{!["6", "7"].includes(resolvedParams.id) && (
  <div className="flex flex-col items-center justify-center gap-6 mb-20">
    {["3", "5"].includes(resolvedParams.id) ? (
      // For projects 3 (9 images) and 5 (7 images)
      <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
        {Array.from({ length: resolvedParams.id === "3" ? 9 : 7 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden bg-black rounded-md"
          >
            <img
              src={`/project-${resolvedParams.id}-${i + 1}.jpg`}
              alt={`${project.title[lang]} image ${i + 1}`}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    ) : resolvedParams.id === "2" ? (
      // One centered image
      <div className="aspect-video w-full max-w-4xl overflow-hidden bg-black rounded-md">
        <img
          src={`/project-${resolvedParams.id}-1.jpg`}
          alt={`${project.title[lang]} image`}
          className="w-full h-full object-contain object-center"
        />
      </div>
    ) : resolvedParams.id === "1" ? (
      // Fixed layout for project 1 — same size, centered, no gaps
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mx-auto">
        {["1", "2"].map((num) => (
          <div key={num} className="w-[48%] aspect-square bg-black rounded-md overflow-hidden">
            <img
              src={`/project-${resolvedParams.id}-${num}.jpg`}
              alt={`${project.title[lang]} image ${num}`}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    ) : (
      // Default fallback layout for others
      <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
        <div className="aspect-square overflow-hidden bg-black rounded-md">
          <img
            src={`/project-${resolvedParams.id}-1.jpg`}
            alt={`${project.title[lang]} image 1`}
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="aspect-square overflow-hidden bg-black rounded-md">
          <img
            src={`/project-${resolvedParams.id}-2.jpg`}
            alt={`${project.title[lang]} image 2`}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    )}
  </div>
)}

       

{/* Process */}
<div className="mb-20">
  <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t.process}</h2>

  {/* Text or List first */}
  {Array.isArray(project.process[lang]) ? (
    <ul className="space-y-4 list-disc list-inside text-xl leading-relaxed mb-8">
      {project.process[lang].map((step: string, index: number) => (
        <li key={index}>{step}</li>
      ))}
    </ul>
  ) : (
    <p className="text-xl leading-relaxed mb-8">{project.process[lang]}</p>
  )}

  {/* Then video if applicable */}
  {["2", "4", "5", "6", "7"].includes(resolvedParams.id) && (
    <div className="aspect-video w-full max-w-5xl mx-auto">
      <video controls className="w-full h-full rounded-md">
        <source src={`/project-${resolvedParams.id}-process.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )}
</div>

{/* Large Process Image (Hide for projects with video) */}
{!["2", "4", "5", "6", "7"].includes(resolvedParams.id) && (
  <div className="aspect-video overflow-hidden mb-20">
    <img
      src={`/project-${resolvedParams.id}-process.jpg`}
      alt={`${project.title[lang]} – Process`}
      className="w-full h-full object-cover"
    />
  </div>
)}





          {/* Result */}
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">{t.result}</h2>
            <p className="text-xl leading-relaxed">{project.result[lang]}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
