import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import BentoCard from "@/components/BentoCard";
import ServiceCard from "@/components/ServiceCard";
import AgeMilestoneCard from "@/components/AgeMilestoneCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import { articles, faqs, interventionDomains, quickMilestones, services } from "@/data/site";

export const metadata = {
  title: "Aya Orthophonie — Guidance et Langage",
  description: "Vous avez un doute sur le langage de votre enfant ? Aya Orthophonie vous aide à y voir plus clair avec douceur et professionnalisme.",
  openGraph: {
    title: "Aya Orthophonie — Guidance et Langage",
    description: "Des repères clairs pour les parents, sans diagnostic en ligne et sans jugement.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-[0.16em] text-accent shadow-sm">
              Orthophonie · Parents · Enfants
            </p>
            <h1 className="font-heading text-4xl font-black leading-[1.03] tracking-tight text-primary sm:text-5xl lg:text-7xl">
              Un accompagnement autour du langage, à chaque âge
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              Aya Orthophonie accompagne les enfants, les adolescents et les adultes autour du langage, de la communication et des apprentissages, avec des repères simples et une écoute attentive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services">Découvrir les services</Button>
              <Button href="/contact" variant="secondary">Nous contacter</Button>
            </div>
            <p className="mt-6 font-semibold text-primary">Sans diagnostic en ligne. Sans jugement. Avec bienveillance.</p>
          </div>
          <div className="relative min-h-[420px] sm:min-h-[520px]">
            <div className="organic absolute -right-6 top-4 h-80 w-80 bg-pale-blue sm:right-0" />
            <div className="organic absolute bottom-0 left-0 h-64 w-64 bg-sand" />
            <div className="absolute inset-x-6 top-8 h-[360px] overflow-hidden rounded-[38px] shadow-soft ring-8 ring-white sm:inset-x-10 sm:h-[440px]">
              <Image src="/images/family-reading.jpg" alt="Parent et enfant partagent un moment de lecture" fill priority sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-heading text-2xl font-black text-white sm:text-3xl">Écouter, comprendre et avancer ensemble.</p>
            </div>
            <div className="absolute bottom-1 right-0 rounded-full bg-soft-green px-5 py-3 text-sm font-extrabold text-white shadow-soft sm:bottom-4 sm:right-2">Une approche humaine</div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Parfois, le doute commence par une petite question."
            text="Est-ce normal qu'il parle peu ? Est-ce qu'elle devrait mieux prononcer ? Est-ce que je dois attendre ou consulter ? Ces questions sont fréquentes, et elles méritent une réponse claire."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Observer", "Repérer ce qui vous questionne sans dramatiser.", "bg-pale-blue md:mt-0"],
              ["Comprendre", "Mettre des mots simples sur les étapes du langage.", "bg-sand md:mt-10"],
              ["Agir", "Savoir quand stimuler à la maison et quand demander un avis.", "bg-white md:mt-20"],
            ].map(([title, text, cls], index) => (
              <article key={title} className={`rounded-[30px] p-7 shadow-soft ring-1 ring-primary/8 ${cls}`}>
                <p className="mb-4 text-sm font-extrabold text-accent">0{index + 1}</p>
                <h3 className="font-heading text-3xl font-black text-primary">{title}</h3>
                <p className="mt-4 leading-7 text-text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pale-blue px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[36px] bg-primary p-8 text-white shadow-soft sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">À propos</p>
            <h2 className="mt-4 font-heading text-3xl font-black leading-tight sm:text-4xl">Faites connaissance avec Aya</h2>
            <p className="mt-5 leading-8 text-white/80">Orthophoniste, Aya Lakhsadi a étudié au Maroc et en Belgique et a évolué dans des environnements hospitaliers, associatifs et libéraux.</p>
            <Button href="/a-propos" variant="light" className="mt-7">Découvrir son parcours</Button>
          </div>
          <div>
            <SectionHeader title="Une approche personnalisée à chaque âge" text="Enfants, adolescents et adultes sont accueillis avec écoute, bienveillance et des objectifs adaptés à leur situation." />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {["Écoute de la demande", "Objectifs personnalisés", "Collaboration avec les proches", "Repères concrets"].map((item) => <div key={item} className="rounded-2xl bg-white p-5 font-heading font-black text-primary shadow-sm">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Domaines d'intervention" title="Des réponses adaptées à chaque parcours" text="Les domaines d'intervention sont abordés avec prudence, dans une démarche personnalisée et collaborative." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {interventionDomains.slice(0, 6).map((domain) => <article key={domain.title} className="rounded-[26px] bg-cream p-6 ring-1 ring-primary/8"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pale-blue font-heading font-black text-primary">{domain.icon}</div><h3 className="mt-5 font-heading text-xl font-black text-primary">{domain.title}</h3><p className="mt-3 leading-7 text-text-muted">{domain.text}</p></article>)}
          </div>
          <Button href="/a-propos" variant="secondary" className="mt-10">Voir tous les domaines</Button>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Ce que les parents remarquent souvent" />
          <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
            <BentoCard icon="🗣️" title="Mon enfant parle peu pour son âge" text="Un échange peut aider à situer ce que vous observez." dark className="lg:col-span-2 lg:row-span-2" />
            <BentoCard icon="🔤" title="Il ne prononce pas certains sons" text="Certains sons arrivent progressivement, d'autres méritent un avis." />
            <BentoCard icon="🤔" title="Il ne comprend pas toujours les consignes" text="On regarde le contexte, l'âge et les situations du quotidien." className="bg-pale-blue" />
            <BentoCard icon="😶" title="Il bloque ou bégaie" text="On accueille votre inquiétude avec nuance et sans alarmer." className="bg-sand lg:col-span-2" />
            <BentoCard icon="📚" title="La lecture ou l'écriture est difficile" text="Des repères peuvent aider à comprendre les besoins." />
            <BentoCard icon="❓" title="Je ne sais pas si je dois m'inquiéter" text="Votre question mérite une réponse claire et prudente." />
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-[28px] bg-white p-6 text-center text-lg font-semibold leading-8 text-primary shadow-soft">
            Chaque enfant évolue à son rythme. Le rôle d'un accompagnement est d'éclairer, pas d'inquiéter.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Un accompagnement pensé comme un chemin" />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {[
              ["Premier échange", "On écoute votre question et votre contexte.", "💬"],
              ["Bilan orthophonique", "On identifie les forces, les besoins et les priorités.", "📋"],
              ["Suivi personnalisé", "On avance avec des objectifs adaptés au rythme de l'enfant.", "🌱"],
              ["Conseils aux parents", "Vous repartez avec des outils simples pour le quotidien.", "🏡"],
            ].map(([title, text, icon], index) => (
              <article key={title} className="relative rounded-[30px] bg-cream p-7 ring-1 ring-primary/8">
                <p className="text-3xl">{icon}</p>
                <p className="mt-6 text-sm font-extrabold text-accent">Étape {index + 1}</p>
                <h3 className="mt-2 font-heading text-2xl font-black text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-text-muted">{text}</p>
              </article>
            ))}
          </div>
          <Button href="/services" variant="secondary" className="mt-10">Découvrir les services</Button>
        </div>
      </section>

      <section className="bg-pale-blue px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Des repères pour mieux comprendre" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickMilestones.map((item) => <AgeMilestoneCard key={item.age} {...item} />)}
          </div>
          <Button href="/reperes" className="mt-10">Voir tous les repères</Button>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Un accompagnement pour chaque parcours" text="Enfants, adolescents et adultes peuvent être accompagnés avec une approche personnalisée, bienveillante et construite en collaboration avec les familles." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Clarté", "Des explications simples, sans jargon.", "🔍"],
              ["Bienveillance", "Un espace où les parents peuvent poser leurs questions sans peur d'être jugés.", "🤍"],
              ["Professionnalisme", "Une approche sérieuse, centrée sur les besoins réels de l'enfant.", "🎓"],
            ].map(([title, text, icon]) => <BentoCard key={title} icon={icon} title={title} text={text} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Des ressources pour continuer à comprendre" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => <ArticleCard key={article.href} {...article} />)}
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl"><FAQSection items={faqs.slice(0, 5)} /><div className="mt-8 text-center"><Button href="/contact" variant="secondary">Poser une question</Button></div></div>
      </section>

      <CTASection />
    </>
  );
}
