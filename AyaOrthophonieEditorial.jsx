import React, { useState } from "react";

/**
 * Aya Orthophonie — Landing Page "Éditoriale / Premium"
 * React (JSX) + Tailwind CSS — composant unique
 *
 * Google Fonts (à ajouter dans le <head> du document) :
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true">
 * <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
 *
 * tailwind.config.js (suggestion) :
 * theme: {
 *   extend: {
 *     fontFamily: {
 *       heading: ['Nunito', 'sans-serif'],
 *       body: ['Inter', 'sans-serif'],
 *     },
 *     colors: {
 *       primary: '#22557A',
 *       accent: '#EA764B',
 *       cream: '#FAF7F2',
 *       'pale-blue': '#EDF4F8',
 *       'text-dark': '#2D3436',
 *       'text-muted': '#636E72',
 *       'soft-green': '#7CB9A0',
 *       sand: '#F0E6D3',
 *     },
 *   },
 * }
 */

export default function AyaOrthophonieEditorial() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Accompagnement", href: "#accompagnement" },
    { label: "Repères", href: "#reperes" },
    { label: "Ressources", href: "#ressources" },
    { label: "Contact", href: "#contact" },
  ];

  const storySteps = [
    {
      num: "01",
      title: "Observer",
      text: "Repérer ce qui vous questionne sans dramatiser.",
      color: "bg-pale-blue",
    },
    {
      num: "02",
      title: "Comprendre",
      text: "Mettre des mots simples sur les étapes du langage.",
      color: "bg-sand",
    },
    {
      num: "03",
      title: "Agir",
      text: "Savoir quand stimuler à la maison et quand demander un avis.",
      color: "bg-white",
    },
  ];

  const worries = [
    {
      icon: "🗣️",
      title: "Mon enfant parle peu pour son âge",
      text: "Le rythme d'acquisition varie beaucoup d'un enfant à l'autre.",
      size: "lg:col-span-2 lg:row-span-2",
      bg: "bg-primary text-white",
    },
    {
      icon: "🔤",
      title: "Il ne prononce pas certains sons",
      text: "Certains sons se mettent en place jusqu'à 5-6 ans.",
      size: "",
      bg: "bg-white",
    },
    {
      icon: "🤔",
      title: "Il ne comprend pas toujours les consignes",
      text: "La compréhension se construit avec le temps.",
      size: "",
      bg: "bg-pale-blue",
    },
    {
      icon: "😶",
      title: "Il bloque ou bégaie",
      text: "Des moments fréquents dans le développement du langage.",
      size: "lg:col-span-2",
      bg: "bg-sand",
    },
    {
      icon: "📖",
      title: "La lecture ou l'écriture est difficile",
      text: "Chaque enfant apprend à son propre rythme.",
      size: "",
      bg: "bg-white",
    },
    {
      icon: "❓",
      title: "Je ne sais pas si je dois m'inquiéter",
      text: "Une question que se posent beaucoup de parents.",
      size: "",
      bg: "bg-soft-green/20",
    },
  ];

  const journey = [
    {
      title: "Premier échange",
      text: "On écoute votre question et votre contexte.",
      icon: "💬",
    },
    {
      title: "Bilan orthophonique",
      text: "On identifie les forces, les besoins et les priorités.",
      icon: "📋",
    },
    {
      title: "Suivi personnalisé",
      text: "On avance avec des objectifs adaptés au rythme de l'enfant.",
      icon: "🌱",
    },
    {
      title: "Conseils aux parents",
      text: "Vous repartez avec des outils simples pour le quotidien.",
      icon: "🏡",
    },
  ];

  const milestones = [
    { age: "0–3 mois", text: "Bébé réagit aux sons et observe les visages." },
    { age: "4–7 mois", text: "Bébé babille, joue avec sa voix et réagit à son prénom." },
    { age: "8–12 mois", text: "Bébé comprend des mots simples et utilise des gestes." },
    { age: "13–24 mois", text: "Bébé dit ses premiers mots et comprend des consignes simples." },
    { age: "2–3 ans", text: "L'enfant fait de petites phrases et enrichit son vocabulaire." },
    { age: "3–5 ans", text: "L'enfant raconte, pose des questions et se fait comprendre." },
  ];

  const pillars = [
    {
      icon: "🔍",
      title: "Clarté",
      text: "Des explications simples, sans jargon.",
      accent: "text-accent",
    },
    {
      icon: "💛",
      title: "Bienveillance",
      text: "Un espace où les parents peuvent poser leurs questions sans peur d'être jugés.",
      accent: "text-soft-green",
    },
    {
      icon: "🎓",
      title: "Professionnalisme",
      text: "Une approche sérieuse, centrée sur les besoins réels de l'enfant.",
      accent: "text-accent",
    },
  ];

  const articles = [
    {
      category: "Consultation",
      title: "Quand consulter une orthophoniste ?",
      excerpt: "Les signes qui peuvent alerter, et pourquoi demander un avis n'est jamais anodin.",
      gradient: "from-primary via-primary/80 to-soft-green",
    },
    {
      category: "Quotidien",
      title: "Stimuler le langage sans pression",
      excerpt: "Des gestes simples du quotidien pour encourager la communication en douceur.",
      gradient: "from-accent via-accent/70 to-sand",
    },
    {
      category: "Bilinguisme",
      title: "Bilinguisme et langage : ce qu'il faut savoir",
      excerpt: "Le bilinguisme n'est pas un frein au développement du langage. On vous explique pourquoi.",
      gradient: "from-soft-green via-pale-blue to-primary/60",
    },
  ];

  const testimonials = [
    {
      text: "Je suis arrivée avec beaucoup d'inquiétude. Je suis repartie avec des repères clairs.",
      author: "Sarah, maman de Léo",
    },
    {
      text: "Les explications étaient simples, humaines et vraiment rassurantes.",
      author: "Karim, papa de Nour",
    },
    {
      text: "J'ai compris comment aider ma fille sans lui mettre de pression.",
      author: "Marie, maman de Chloé",
    },
  ];

  return (
    <div className="font-body text-text-dark bg-cream overflow-x-hidden">
      {/* Local keyframes for soft floating / pulse micro-animations */}
      <style>{`
        @keyframes aya-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes aya-float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .aya-anim-float { animation: aya-float 7s ease-in-out infinite; }
        .aya-anim-float-slow { animation: aya-float-slow 9s ease-in-out infinite; }
      `}</style>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <a href="#accueil" className="flex items-center gap-3" aria-label="Aya Orthophonie - Accueil">
              <LogoMark />
              <div className="leading-tight">
                <p className="font-heading font-extrabold text-lg text-primary">Aya Orthophonie</p>
                <p className="text-[11px] text-text-muted tracking-wide">Guidance et Langage</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-9" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-text-dark font-medium hover:text-primary transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-block bg-accent text-white font-heading font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-accent/90 transition-all duration-200"
              >
                Prendre rendez-vous
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-xl text-primary hover:bg-pale-blue transition-colors"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-pale-blue px-5 pb-6 pt-2 space-y-1" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 rounded-xl text-text-dark font-medium hover:bg-pale-blue hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-3 bg-accent text-white font-heading font-bold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* ============ HERO — split asymétrique + composition abstraite ============ */}
        <section id="accueil" className="relative bg-cream pt-16 pb-28 sm:pt-20 sm:pb-36">
          {/* decorative organic blob in background */}
          <div
            className="pointer-events-none absolute -top-24 -left-32 w-[28rem] h-[28rem] bg-sand/50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              {/* Left column */}
              <div className="relative z-10">
                <span className="inline-block bg-pale-blue text-primary text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
                  Orthophonie · Parents · Enfants
                </span>
                <h1 className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.08]">
                  Vous avez un doute sur le langage de votre enfant ?
                </h1>
                <p className="mt-6 text-lg text-text-muted max-w-lg leading-relaxed">
                  Aya Orthophonie vous aide à comprendre les signaux, poser les
                  bonnes questions et avancer avec des repères simples.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="text-center bg-accent text-white font-heading font-bold px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Prendre rendez-vous
                  </a>
                  <a
                    href="#reperes"
                    className="text-center border-2 border-primary text-primary font-heading font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Explorer les repères
                  </a>
                </div>

                <p className="mt-6 text-sm text-text-muted italic">
                  Sans diagnostic en ligne. Sans jugement. Avec bienveillance.
                </p>
              </div>

              {/* Right column — abstract composition */}
              <div className="relative h-[26rem] sm:h-[30rem] lg:h-[34rem]" aria-hidden="true">
                {/* large organic pale-blue shape */}
                <div className="absolute inset-0 bg-pale-blue rounded-[55%_45%_65%_35%/45%_55%_45%_55%]" />
                <div className="absolute inset-6 bg-white/50 rounded-[45%_55%_60%_40%/55%_45%_55%_45%]" />

                {/* parent bubble */}
                <div className="aya-anim-float absolute top-10 left-6 sm:left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-primary shadow-xl flex items-center justify-center text-5xl">
                  🧑
                </div>
                {/* child bubble */}
                <div className="aya-anim-float-slow absolute bottom-16 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-soft-green shadow-xl flex items-center justify-center text-4xl">
                  🧒
                </div>

                {/* floating mini-card 1 */}
                <div className="aya-anim-float-slow absolute top-6 right-0 sm:right-4 bg-white rounded-3xl shadow-lg px-4 py-3 max-w-[11rem]">
                  <p className="text-xs font-semibold text-primary leading-snug">
                    🌱 Chaque enfant évolue à son rythme
                  </p>
                </div>

                {/* floating mini-card 2 */}
                <div className="aya-anim-float absolute bottom-4 left-0 sm:left-4 bg-white rounded-3xl shadow-lg px-4 py-3 max-w-[12rem]">
                  <p className="text-xs font-semibold text-primary leading-snug">
                    💬 On observe, on comprend, on accompagne
                  </p>
                </div>

                {/* small floating icons */}
                <span className="aya-anim-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
                  👂
                </span>
                <span className="aya-anim-float-slow absolute top-4 left-1/2 text-2xl">📚</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION "LE DOUTE DES PARENTS" — storytelling en escalier ============ */}
        <section className="relative bg-white py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary leading-tight">
                Parfois, le doute commence par une petite question.
              </h2>
              <p className="mt-5 text-text-muted text-lg leading-relaxed">
                Est-ce normal qu'il parle peu&nbsp;? Est-ce qu'elle devrait mieux
                prononcer&nbsp;? Est-ce que je dois attendre ou consulter&nbsp;? Ces
                questions sont fréquentes, et elles méritent une réponse claire.
              </p>
            </div>

            {/* Staggered "escalier" blocks */}
            <div className="mt-16 space-y-6">
              {storySteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`${step.color} rounded-[2rem] p-8 sm:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6`}
                  style={{ marginLeft: `${i * 0}px` }}
                >
                  <div
                    className={`shrink-0 ${
                      i === 0 ? "sm:ml-0" : i === 1 ? "sm:ml-10 lg:ml-20" : "sm:ml-20 lg:ml-40"
                    }`}
                  >
                    <span className="font-heading font-extrabold text-5xl sm:text-6xl text-primary/15">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-muted text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION SITUATIONS FRÉQUENTES — bento asymétrique ============ */}
        <section className="bg-pale-blue py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary max-w-xl">
              Ce que les parents remarquent souvent
            </h2>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[10rem] gap-5">
              {worries.map((item) => (
                <div
                  key={item.title}
                  className={`${item.size} ${item.bg} rounded-[1.75rem] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                >
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="mt-4">
                    <h3 className="font-heading font-bold text-base sm:text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="inline-block bg-white rounded-full px-6 py-4 shadow-sm text-text-dark font-medium max-w-2xl">
                Chaque enfant évolue à son rythme. Le rôle d'un accompagnement est
                d'éclairer, pas d'inquiéter.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION ACCOMPAGNEMENT — parcours avec connecteurs ============ */}
        <section id="accompagnement" className="bg-white py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Un accompagnement pensé comme un chemin
              </h2>
            </div>

            <div className="relative mt-16">
              {/* vertical connector line - mobile */}
              <div
                className="lg:hidden absolute left-7 top-6 bottom-6 w-0.5 bg-soft-green/30"
                aria-hidden="true"
              />
              {/* horizontal connector line - desktop */}
              <div
                className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-0.5 bg-soft-green/30"
                aria-hidden="true"
              />

              <div className="grid gap-10 lg:grid-cols-4">
                {journey.map((step, i) => (
                  <div key={step.title} className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                    <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-primary text-white shadow-md flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div className="lg:mt-6 bg-cream rounded-2xl p-5 flex-1 lg:flex-none">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        Étape {i + 1}
                      </span>
                      <h3 className="mt-1 font-heading font-bold text-lg text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION REPÈRES D'ÂGE ============ */}
        <section id="reperes" className="bg-sand/40 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary max-w-xl">
              Des repères pour mieux comprendre
            </h2>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="mt-12 flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
              {milestones.map((m, i) => (
                <div
                  key={m.age}
                  className="snap-start shrink-0 w-64 md:w-auto bg-white rounded-[1.75rem] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pale-blue text-primary font-heading font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="mt-4 font-heading font-bold text-primary">{m.age}</p>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white border border-primary/10 rounded-3xl px-6 py-6 max-w-3xl">
              <p className="text-text-dark font-medium">
                Ces repères ne remplacent pas une évaluation. Ils servent à mieux
                observer et à poser les bonnes questions.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION DIFFÉRENCE AYA — fond bleu profond ============ */}
        <section className="relative bg-primary py-20 sm:py-28 overflow-hidden">
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-soft-green/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white max-w-xl">
              Ce qui rend Aya Orthophonie différent
            </h2>

            <div className="mt-14 grid sm:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-cream rounded-[2rem] p-8 shadow-lg hover:-translate-y-1.5 transition-transform duration-200"
                >
                  <span className={`text-4xl ${pillar.accent}`} role="img" aria-hidden="true">
                    {pillar.icon}
                  </span>
                  <h3 className="mt-5 font-heading font-bold text-xl text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-text-muted leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION RESSOURCES — style magazine ============ */}
        <section id="ressources" className="bg-white py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Des ressources pour continuer à comprendre
              </h2>
              <a href="#" className="text-accent font-semibold hover:underline whitespace-nowrap">
                Voir toutes les ressources →
              </a>
            </div>

            <div className="mt-14 grid lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <article
                  key={article.title}
                  className={`group rounded-[2rem] overflow-hidden bg-cream shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                    i === 0 ? "lg:row-span-1" : ""
                  }`}
                >
                  <div className={`relative h-48 bg-gradient-to-br ${article.gradient} overflow-hidden`} aria-hidden="true">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                    <div className="absolute bottom-4 left-5 text-white/90 text-4xl">
                      {i === 0 ? "📋" : i === 1 ? "🌱" : "🌍"}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                      {article.category}
                    </span>
                    <h3 className="mt-2 font-heading font-bold text-lg text-primary leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-text-muted text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1 text-accent font-semibold group-hover:gap-2 transition-all duration-200"
                    >
                      Lire l'article →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION TÉMOIGNAGES ============ */}
        <section className="bg-pale-blue py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary text-center">
              Des parents rassurés, mieux guidés
            </h2>

            <div className="mt-14 grid sm:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <blockquote
                  key={t.author}
                  className={`relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                    i === 1 ? "sm:-translate-y-4" : ""
                  }`}
                >
                  <span
                    className="absolute -top-4 left-6 text-7xl text-accent/20 font-heading select-none"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p className="relative text-text-dark leading-relaxed">{t.text}</p>
                  <footer className="mt-5 text-sm font-heading font-bold text-primary">
                    — {t.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL — visuel fort ============ */}
        <section id="contact" className="relative bg-primary py-24 sm:py-32 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-accent/20 rounded-[55%_45%_65%_35%/45%_55%_45%_55%] blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 bg-soft-green/20 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              Un doute ne doit pas rester seul.
            </h2>
            <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto">
              Parlons-en avec douceur, clarté et professionnalisme.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#"
                className="bg-accent text-white font-heading font-bold px-9 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#ressources"
                className="text-white font-semibold underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                Découvrir les ressources gratuites
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <a href="#accueil" className="flex items-center gap-3">
                <LogoMark />
                <div className="leading-tight">
                  <p className="font-heading font-extrabold text-primary">Aya Orthophonie</p>
                  <p className="text-xs text-text-muted">Guidance et Langage</p>
                </div>
              </a>
              <p className="mt-4 text-sm text-text-muted leading-relaxed max-w-xs">
                Un accompagnement doux et professionnel pour aider les parents à
                comprendre le langage de leur enfant.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-text-muted hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Suivez-nous</h3>
              <div className="flex gap-3">
                <SocialIcon label="Instagram">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </SocialIcon>
                <SocialIcon label="Facebook">
                  <path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5A1 1 0 0115 9h2V8z" fill="currentColor" stroke="none" />
                </SocialIcon>
                <SocialIcon label="TikTok">
                  <path d="M14 3v10.5a2.5 2.5 0 11-2.2-2.48V8.5A5 5 0 1017 13V7.5a5.5 5.5 0 003-1V4.5a3.5 3.5 0 01-3-1.5H14z" />
                </SocialIcon>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Contact</h3>
              <p className="text-text-muted text-sm">contact@aya-orthophonie.fr</p>
              <p className="text-text-muted text-sm mt-1">Sur rendez-vous uniquement</p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-primary/10 text-center space-y-2">
            <p className="text-sm text-text-muted">
              © 2026 Aya Orthophonie — Guidance et Langage
            </p>
            <p className="text-xs text-text-muted max-w-2xl mx-auto">
              Ce site ne remplace pas une consultation professionnelle. En cas de
              doute, consultez un(e) orthophoniste.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============ Logo : deux bulles de dialogue superposées avec silhouettes ============ */
function LogoMark() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M6 12a6 6 0 016-6h14a6 6 0 016 6v8a6 6 0 01-6 6H16l-6 5v-5a6 6 0 01-6-6v-8z"
        fill="#EDF4F8"
        stroke="#22557A"
        strokeWidth="1.5"
      />
      <circle cx="15" cy="15" r="3" fill="#22557A" />
      <path d="M18 20c0-3 3-3 3-3s3 0 3 3" stroke="#22557A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path
        d="M42 20a5 5 0 00-5-5H23a5 5 0 00-5 5v6a5 5 0 005 5h9l5 4v-4a5 5 0 005-5v-6z"
        fill="#7CB9A0"
        fillOpacity="0.85"
        stroke="#22557A"
        strokeWidth="1.5"
      />
      <circle cx="29" cy="23" r="2.6" fill="#FAF7F2" />
      <path d="M32 27.5c0-2.5 2.5-2.5 2.5-2.5s2.5 0 2.5 2.5" stroke="#FAF7F2" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors duration-200"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  );
}
