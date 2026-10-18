import PageHero from "@/components/PageHero";
import AgeMilestoneCard from "@/components/AgeMilestoneCard";
import CTASection from "@/components/CTASection";
import { fullMilestones } from "@/data/site";
import Image from "next/image";

export const metadata = {
  title: "Repères du développement du langage — Aya Orthophonie",
  description: "Des repères par âge pour observer le développement du langage sans comparer ni poser de diagnostic.",
  openGraph: { title: "Repères du développement du langage — Aya Orthophonie", description: "Chaque enfant évolue à son rythme." },
};

export default function ReperesPage() {
  return (
    <>
      <PageHero
        label="Repères"
        title="Repères du développement du langage"
        text="Ces repères aident à guider l'observation. Ils ne remplacent pas une évaluation professionnelle et ne servent pas à poser un diagnostic."
      />
      <section className="bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-pale-blue p-7 text-center shadow-soft">
          <p className="font-heading text-2xl font-black text-primary">Chaque enfant évolue à son rythme. Un repère sert à guider l'observation, pas à comparer les enfants.</p>
        </div>
      </section>
      <section className="bg-white px-5 pb-4 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[32px] bg-cream p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative h-56 overflow-hidden rounded-[24px] sm:h-64"><Image src="/images/child-reading.jpg" alt="Enfant concentré pendant une activité de lecture" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div>
          <p className="max-w-2xl text-lg leading-8 text-text-muted">Observer les échanges, le jeu et les apprentissages peut aider à formuler une question. Ces images sont illustratives et ne constituent pas une représentation de situations cliniques précises.</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {fullMilestones.map((item) => <AgeMilestoneCard key={item.age} {...item} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
