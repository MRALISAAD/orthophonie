import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BentoCard from "@/components/BentoCard";
import CTASection from "@/components/CTASection";
import { interventionDomains } from "@/data/site";
import Image from "next/image";

export const metadata = {
  title: "À propos — Aya Orthophonie",
  description: "Découvrez la mission, l'approche et les valeurs d'Aya Orthophonie : bienveillance, clarté et professionnalisme.",
  openGraph: { title: "À propos — Aya Orthophonie", description: "Une approche douce, claire et professionnelle." },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="À propos"
        title="Une approche douce, claire et professionnelle"
        text="Aya Orthophonie propose un espace d'écoute, de repères et d'accompagnement autour du langage, de la communication et des apprentissages, pour les enfants, les adolescents et les adultes."
        cta="Nous contacter"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] bg-pale-blue p-8">
            <h2 className="font-heading text-3xl font-black text-primary">Notre mission</h2>
            <p className="mt-5 leading-8 text-text-muted">
              Aider les personnes et leurs proches à transformer une inquiétude floue en questions claires, avec une information prudente et une orientation adaptée. Aucun diagnostic n'est posé en ligne.
            </p>
          </div>
          <div>
            <SectionHeader title="Notre approche" text="Nous avançons avec le parent et l'enfant, en respectant le rythme de chacun. L'objectif n'est pas de comparer, mais de comprendre ce qui peut soutenir la communication." />
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Bienveillance", "Vous pouvez poser vos questions sans peur d'être jugé.", "🤍"],
            ["Clarté", "Les explications restent simples, utiles et concrètes.", "🔍"],
            ["Professionnalisme", "L'accompagnement garde un cadre sérieux et responsable.", "🎓"],
            ["Respect du rythme de l'enfant", "Chaque enfant évolue à son rythme, avec ses forces et ses besoins.", "🌱"],
            ["Collaboration avec les parents", "Les parents sont des partenaires essentiels du parcours.", "🤝"],
            ["Pour les enfants", "L'enfant est accueilli dans sa globalité, pas réduit à une difficulté.", "💬"],
          ].map(([title, text, icon]) => <BentoCard key={title} title={title} text={text} icon={icon} />)}
        </div>
      </section>
      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="À propos d'Aya" title="Mon parcours" text="Un parcours construit dans des environnements variés, au plus près des besoins de chaque personne." />
          <div className="rounded-[32px] bg-white p-7 leading-8 text-text-muted shadow-soft ring-1 ring-primary/8 sm:p-10">
            <div className="relative mb-8 h-56 overflow-hidden rounded-[24px]"><Image src="/images/learning-session.jpg" alt="Adulte et enfant réunis autour d'une activité d'apprentissage" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div>
            <p>Aya Lakhsadi est orthophoniste, titulaire d'une licence en orthophonie obtenue au Maroc et d'un master obtenu en Belgique.</p>
            <p className="mt-5">Elle possède une expérience dans différents environnements : pédopsychiatrie, ORL, pédiatrie, cabinet libéral, association et hôpital.</p>
            <p className="mt-5">Elle a accompagné des enfants, des adolescents et des adultes présentant différentes difficultés de communication, de langage et de développement.</p>
            <p className="mt-5 font-semibold text-primary">Son approche s'appuie sur l'écoute, la personnalisation de l'accompagnement et la collaboration avec les familles.</p>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Accompagnement" title="Mes domaines d'intervention" text="Chaque situation est accueillie avec bienveillance et étudiée selon les besoins de la personne, son contexte et les échanges avec son entourage." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interventionDomains.map((domain) => <BentoCard key={domain.title} title={domain.title} text={domain.text} icon="•" />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
