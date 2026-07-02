import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import BentoCard from "@/components/BentoCard";
import CTASection from "@/components/CTASection";

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
        text="Aya Orthophonie est née pour offrir aux parents un espace d'écoute, de repères et d'accompagnement autour du langage et des apprentissages de leur enfant."
        cta="Prendre rendez-vous"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] bg-pale-blue p-8">
            <h2 className="font-heading text-3xl font-black text-primary">Notre mission</h2>
            <p className="mt-5 leading-8 text-text-muted">
              Aider les parents à transformer une inquiétude floue en questions claires, avec une information prudente et une orientation adaptée. Aucun diagnostic n'est posé en ligne.
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
      <CTASection />
    </>
  );
}
