import React, { useState } from "react";

/**
 * Aya Orthophonie — Landing Page
 * React (JSX) + Tailwind CSS — single-file component
 *
 * Google Fonts (add to your document head or _document.js):
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true">
 * <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
 *
 * Tailwind theme suggestion (tailwind.config.js):
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

export default function AyaOrthophonie() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Ressources", href: "#ressources" },
    { label: "À propos", href: "#a-propos" },
    { label: "Contact", href: "#contact" },
  ];

  const worries = [
    {
      icon: "🗣️",
      title: "Mon enfant parle peu pour son âge",
      text: "Le rythme d'acquisition du langage varie beaucoup d'un enfant à l'autre. En parler permet d'y voir plus clair.",
    },
    {
      icon: "🔤",
      title: "Il ne prononce pas certains sons correctement",
      text: "Certains sons se mettent en place progressivement jusqu'à 5-6 ans. Un accompagnement peut aider si besoin.",
    },
    {
      icon: "🤔",
      title: "Il ne comprend pas toujours les consignes",
      text: "La compréhension se construit avec le temps. Des repères simples permettent de mieux l'accompagner au quotidien.",
    },
    {
      icon: "😶",
      title: "Il hésite, bloque ou bégaie en parlant",
      text: "Ces moments sont fréquents dans le développement du langage. Un avis professionnel rassure et guide.",
    },
    {
      icon: "📖",
      title: "Il a du mal avec la lecture ou l'écriture",
      text: "Chaque enfant apprend à son propre rythme. Un suivi adapté peut faciliter ces apprentissages.",
    },
    {
      icon: "❓",
      title: "Je ne sais pas si c'est normal pour son âge",
      text: "C'est une question que se posent de nombreux parents. Nous sommes là pour vous donner des repères clairs.",
    },
  ];

  const services = [
    {
      icon: "📋",
      title: "Bilan orthophonique",
      text: "Une évaluation complète pour comprendre les forces et les besoins de votre enfant.",
    },
    {
      icon: "🤝",
      title: "Suivi personnalisé",
      text: "Des séances adaptées au rythme de votre enfant, avec des objectifs clairs.",
    },
    {
      icon: "💡",
      title: "Conseils aux parents",
      text: "Des outils simples et concrets pour stimuler le langage à la maison.",
    },
    {
      icon: "📚",
      title: "Ressources éducatives",
      text: "Des articles, guides et repères pour mieux comprendre le développement du langage.",
    },
  ];

  const milestones = [
    { age: "0–3 mois", text: "Bébé réagit aux sons et observe les visages." },
    { age: "4–7 mois", text: "Bébé babille, joue avec sa voix et réagit à son prénom." },
    { age: "8–12 mois", text: "Bébé comprend des mots simples et utilise des gestes." },
    { age: "13–24 mois", text: "Bébé dit ses premiers mots et comprend des consignes simples." },
    { age: "2–3 ans", text: "L'enfant fait des petites phrases et enrichit son vocabulaire." },
    { age: "3–5 ans", text: "L'enfant raconte, pose des questions et se fait comprendre." },
  ];

  const values = [
    {
      icon: "💛",
      title: "Bienveillance",
      text: "Nous ne jugeons jamais. Notre rôle est d'accompagner, pas d'inquiéter.",
    },
    {
      icon: "🎓",
      title: "Expertise",
      text: "Une approche fondée sur les connaissances actuelles en orthophonie.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Accessibilité",
      text: "Un langage clair, sans jargon, pour que chaque parent se sente compris.",
    },
  ];

  const articles = [
    {
      title: "Quand consulter une orthophoniste ?",
      excerpt:
        "Les signes qui peuvent alerter, et pourquoi un avis professionnel n'est jamais une décision à prendre à la légère.",
      gradient: "from-primary to-soft-green",
    },
    {
      title: "Comment stimuler le langage à la maison",
      excerpt:
        "Des activités simples du quotidien pour encourager la communication de votre enfant, en douceur.",
      gradient: "from-accent to-sand",
    },
    {
      title: "Langage bilingue : faut-il s'inquiéter ?",
      excerpt:
        "Le bilinguisme n'est pas un frein au développement du langage. On vous explique pourquoi.",
      gradient: "from-soft-green to-pale-blue",
    },
  ];

  const testimonials = [
    {
      text: "J'avais peur que mon fils ait un retard. Aya m'a aidée à comprendre et à accompagner ses progrès.",
      author: "Sarah, maman de Léo, 3 ans",
    },
    {
      text: "Enfin un espace qui explique les choses simplement, sans me faire paniquer.",
      author: "Karim, papa de Nour, 2 ans",
    },
    {
      text: "Les conseils m'ont donné confiance pour stimuler le langage à la maison.",
      author: "Marie, maman de Chloé, 18 mois",
    },
  ];

  return (
    <div className="font-body text-text-dark bg-cream">
      {/* ============ HEADER / NAVIGATION ============ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-3" aria-label="Aya Orthophonie - Accueil">
              <LogoMark />
              <div className="leading-tight">
                <p className="font-heading font-extrabold text-lg sm:text-xl text-primary">
                  Aya Orthophonie
                </p>
                <p className="text-[11px] sm:text-xs text-text-muted tracking-wide">
                  Guidance et Language
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-dark font-medium hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-block bg-accent text-white font-heading font-bold px-6 py-3 rounded-2xl shadow-sm hover:bg-accent/90 hover:shadow-md transition-all duration-200"
              >
                Prendre rendez-vous
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-xl text-primary hover:bg-pale-blue transition-colors"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className="md:hidden bg-white border-t border-pale-blue px-4 pb-6 pt-2 space-y-1"
            aria-label="Navigation mobile"
          >
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
              className="block text-center mt-3 bg-accent text-white font-heading font-bold px-6 py-3 rounded-2xl hover:bg-accent/90 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* ============ HERO SECTION ============ */}
        <section id="accueil" className="bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
                  Vous avez un doute sur le langage de votre enfant ?
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-xl">
                  Aya Orthophonie vous accompagne avec des repères simples et un
                  accompagnement professionnel pour mieux comprendre les besoins de
                  votre enfant.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="text-center bg-accent text-white font-heading font-bold px-8 py-4 rounded-2xl shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Prendre rendez-vous
                  </a>
                  <a
                    href="#ressources"
                    className="text-center border-2 border-primary text-primary font-heading font-bold px-8 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Découvrir les ressources
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="text-soft-green">✓</span> Approche bienveillante
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-soft-green">✓</span> Sans diagnostic
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-soft-green">✓</span> Pour tous les parents
                  </span>
                </div>
              </div>

              {/* Illustration */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] bg-gradient-to-br from-pale-blue via-cream to-sand flex items-center justify-center shadow-inner">
                  <span className="text-[7rem] sm:text-[9rem]" role="img" aria-label="Parent et enfant qui discutent">
                    👩‍👧
                  </span>
                </div>
                <div className="absolute -top-4 -right-2 sm:right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                  <span className="text-2xl" role="img" aria-hidden="true">💬</span>
                  <span className="text-sm font-medium text-text-dark">On en parle ?</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SECTION "VOUS VOUS RECONNAISSEZ ?" ============ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Ces situations vous parlent ?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {worries.map((item) => (
                <div
                  key={item.title}
                  className="bg-pale-blue rounded-3xl p-6 sm:p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="text-4xl" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 font-heading font-bold text-lg text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-text-muted text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-sand rounded-3xl px-6 py-6 sm:py-8 max-w-3xl mx-auto">
              <p className="text-text-dark font-medium">
                Chaque enfant évolue à son rythme. Ces situations sont fréquentes et
                un accompagnement adapté peut faire toute la différence.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION "COMMENT AYA VOUS ACCOMPAGNE" ============ */}
        <section id="services" className="bg-pale-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Un accompagnement doux et professionnel
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <span className="text-4xl" role="img" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-heading font-bold text-lg text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-text-muted text-sm leading-relaxed">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION "REPÈRES DU DÉVELOPPEMENT" ============ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Les grandes étapes du développement du langage
              </h2>
            </div>

            <div className="relative">
              {/* Connector line - desktop */}
              <div
                className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-soft-green/30"
                aria-hidden="true"
              />
              <div className="grid gap-8 lg:grid-cols-6">
                {milestones.map((m, i) => (
                  <div key={m.age} className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center">
                    <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center shadow-md lg:mx-auto">
                      {i + 1}
                    </div>
                    <div className="lg:mt-4 bg-pale-blue rounded-2xl p-4 flex-1">
                      <p className="font-heading font-bold text-primary text-sm">
                        {m.age}
                      </p>
                      <p className="mt-1 text-text-muted text-sm leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center bg-cream border border-sand rounded-3xl px-6 py-6 max-w-3xl mx-auto">
              <p className="text-text-dark font-medium">
                ⚡ Chaque enfant évolue à son rythme. En cas de doute, il est
                toujours préférable de demander l'avis d'un professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION "POURQUOI NOUS FAIRE CONFIANCE" ============ */}
        <section id="a-propos" className="bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Une approche pensée pour vous
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="text-center px-4">
                  <div className="mx-auto w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <span className="text-4xl" role="img" aria-hidden="true">
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading font-bold text-xl text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION BLOG / RESSOURCES ============ */}
        <section id="ressources" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Ressources pour les parents
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="rounded-3xl overflow-hidden bg-white border border-pale-blue shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className={`h-40 bg-gradient-to-br ${article.gradient}`} aria-hidden="true" />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-text-muted text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-accent font-semibold hover:underline"
                    >
                      Lire l'article →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-block border-2 border-primary text-primary font-heading font-bold px-8 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-200"
              >
                Voir toutes les ressources
              </a>
            </div>
          </div>
        </section>

        {/* ============ SECTION TÉMOIGNAGES ============ */}
        <section className="bg-pale-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                Ce que disent les parents
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col"
                >
                  <span className="text-3xl text-accent" aria-hidden="true">
                    "
                  </span>
                  <p className="mt-2 text-text-dark leading-relaxed flex-1">
                    {t.text}
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-primary">
                    — {t.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTION CTA FINAL ============ */}
        <section id="contact" className="bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Un doute ? Parlons-en.
            </h2>
            <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
              Un doute vaut mieux qu'une inquiétude silencieuse. Le premier pas,
              c'est d'en parler.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-accent text-white font-heading font-bold px-8 py-4 rounded-2xl shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#ressources"
                className="text-white font-semibold underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                Ou découvrez nos ressources gratuites
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-pale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <a href="#accueil" className="flex items-center gap-3">
                <LogoMark />
                <div className="leading-tight">
                  <p className="font-heading font-extrabold text-primary">
                    Aya Orthophonie
                  </p>
                  <p className="text-xs text-text-muted">Guidance et Language</p>
                </div>
              </a>
            </div>

            <div>
              <h3 className="font-heading font-bold text-primary mb-3">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
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

          <div className="mt-10 pt-6 border-t border-primary/10 text-center space-y-2">
            <p className="text-sm text-text-muted">
              © 2026 Aya Orthophonie — Guidance et Language
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

/* ============ Logo: two overlapping speech bubbles with face silhouettes ============ */
function LogoMark() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 12a6 6 0 016-6h14a6 6 0 016 6v8a6 6 0 01-6 6H16l-6 5v-5a6 6 0 01-6-6v-8z"
        fill="#EDF4F8"
        stroke="#22557A"
        strokeWidth="1.5"
      />
      <circle cx="15" cy="15" r="3" fill="#22557A" />
      <path
        d="M18 20c0-3 3-3 3-3s3 0 3 3"
        stroke="#22557A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 20a5 5 0 00-5-5H23a5 5 0 00-5 5v6a5 5 0 005 5h9l5 4v-4a5 5 0 005-5v-6z"
        fill="#7CB9A0"
        fillOpacity="0.85"
        stroke="#22557A"
        strokeWidth="1.5"
      />
      <circle cx="29" cy="23" r="2.6" fill="#FAF7F2" />
      <path
        d="M32 27.5c0-2.5 2.5-2.5 2.5-2.5s2.5 0 2.5 2.5"
        stroke="#FAF7F2"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
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
