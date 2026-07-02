export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Repères", href: "/reperes" },
  { label: "Ressources", href: "/ressources" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: "📋",
    title: "Bilan orthophonique",
    description:
      "Une évaluation structurée pour mieux comprendre les forces, les besoins et les priorités de votre enfant.",
    audience: "les parents qui observent une question autour du langage, de la parole, de la communication, de la lecture ou de l'écriture.",
    benefit: "clarifier la situation et définir les prochaines étapes, sans diagnostic posé en ligne.",
    href: "/services/bilan-orthophonique",
  },
  {
    icon: "🌱",
    title: "Suivi personnalisé",
    description:
      "Un accompagnement progressif avec des objectifs adaptés au rythme et aux besoins de l'enfant.",
    audience: "les enfants qui ont besoin d'un soutien régulier après un bilan ou une orientation professionnelle.",
    benefit: "travailler pas à pas, avec des repères concrets pour mesurer les progrès.",
    href: "/services/suivi-personnalise",
  },
  {
    icon: "💬",
    title: "Conseils aux parents",
    description:
      "Des recommandations simples pour soutenir la communication dans les moments du quotidien.",
    audience: "les parents qui veulent aider leur enfant sans pression et avec des gestes ajustés.",
    benefit: "renforcer la confiance parent-enfant et rendre les échanges plus naturels.",
    href: "/services/conseils-parents",
  },
  {
    icon: "📚",
    title: "Ressources éducatives",
    description:
      "Des articles et repères pour comprendre les étapes du langage avec un vocabulaire clair.",
    audience: "les familles qui cherchent des informations fiables, nuancées et accessibles.",
    benefit: "observer avec plus de sérénité et savoir quand demander un avis.",
    href: "/ressources",
  },
];

export const quickMilestones = [
  { age: "0–3 mois", text: "Bébé réagit aux sons et observe les visages." },
  { age: "4–7 mois", text: "Bébé babille, joue avec sa voix et réagit à son prénom." },
  { age: "8–12 mois", text: "Bébé comprend des mots simples et utilise des gestes." },
  { age: "13–24 mois", text: "Bébé dit ses premiers mots et comprend des consignes simples." },
  { age: "2–3 ans", text: "L'enfant fait de petites phrases et enrichit son vocabulaire." },
  { age: "3–5 ans", text: "L'enfant raconte, pose des questions et se fait comprendre." },
];

export const fullMilestones = [
  {
    age: "0–3 mois",
    text: "Bébé peut réagir aux sons, reconnaître certaines voix et observer les visages.",
    observe: "les réactions aux bruits, le contact visuel, les pleurs différenciés.",
    support: "parler doucement, chanter, répondre aux vocalisations et regarder bébé pendant les échanges.",
    advice: "si bébé ne réagit pas aux sons forts ou si vous avez une inquiétude persistante.",
  },
  {
    age: "4–7 mois",
    text: "Bébé joue avec sa voix, babille et peut réagir à son prénom.",
    observe: "les vocalisations, les sourires sociaux, l'attention aux voix familières.",
    support: "imiter ses sons, nommer les objets, laisser des temps de réponse.",
    advice: "si les échanges vocaux sont très rares ou si le contact semble difficile.",
  },
  {
    age: "8–12 mois",
    text: "Bébé comprend des mots simples, utilise des gestes et commence à associer mots et situations.",
    observe: "les gestes comme montrer, tendre les bras, dire au revoir, chercher un objet nommé.",
    support: "commenter les routines, jouer à coucou, nommer ce qu'il regarde.",
    advice: "si aucun geste de communication n'apparaît ou si la compréhension vous questionne.",
  },
  {
    age: "13–24 mois",
    text: "L'enfant dit ses premiers mots, comprend des consignes simples et enrichit progressivement son vocabulaire.",
    observe: "les mots utilisés, les demandes, la compréhension de petites consignes.",
    support: "reformuler, ajouter un mot à ses productions et lire de courts livres ensemble.",
    advice: "si les mots restent très rares ou si l'enfant semble peu chercher à communiquer.",
  },
  {
    age: "2–3 ans",
    text: "L'enfant assemble des mots, pose des questions simples et comprend davantage de consignes.",
    observe: "les petites phrases, le vocabulaire, la capacité à se faire comprendre par l'entourage.",
    support: "décrire les actions, proposer des choix, laisser le temps de répondre.",
    advice: "si les phrases n'apparaissent pas, si la compréhension est limitée ou si les frustrations sont fréquentes.",
  },
  {
    age: "3–5 ans",
    text: "L'enfant raconte, pose des questions, joue avec les mots et affine sa prononciation.",
    observe: "la clarté de la parole, les récits, la compréhension d'histoires courtes.",
    support: "lire régulièrement, discuter des émotions, encourager les jeux symboliques.",
    advice: "si l'enfant reste difficile à comprendre, évite de parler ou comprend difficilement les consignes.",
  },
  {
    age: "5 ans et plus",
    text: "L'enfant développe les bases de la lecture, de l'écriture et du langage plus élaboré.",
    observe: "l'intérêt pour les sons, les lettres, les histoires, la mémoire des consignes.",
    support: "jouer avec les rimes, lire à voix haute, valoriser les essais d'écriture.",
    advice: "si la lecture, l'écriture, l'attention aux sons ou la compréhension scolaire deviennent source de difficulté.",
  },
];

export const articles = [
  {
    category: "Consultation",
    title: "Quand consulter une orthophoniste ?",
    excerpt:
      "Des repères pour savoir quand demander un avis, sans dramatiser et sans attendre que l'inquiétude grandisse.",
    readTime: "6 min",
    href: "/ressources/quand-consulter-orthophoniste",
  },
  {
    category: "Conseils parents",
    title: "Stimuler le langage sans pression",
    excerpt:
      "Des gestes simples pendant les routines, les lectures et les jeux pour encourager la communication.",
    readTime: "7 min",
    href: "/ressources/stimuler-langage-maison",
  },
  {
    category: "Bilinguisme",
    title: "Bilinguisme et langage : ce qu'il faut savoir",
    excerpt:
      "Un article nuancé pour comprendre ce qui est fréquent chez un enfant bilingue et quand observer davantage.",
    readTime: "5 min",
    href: "/ressources/bilinguisme-langage",
  },
];
