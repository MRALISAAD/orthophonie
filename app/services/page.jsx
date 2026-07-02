import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/site";

export const metadata = {
  title: "Services — Aya Orthophonie",
  description: "Bilan orthophonique, suivi personnalisé, conseils aux parents et ressources éducatives pour accompagner l'enfant avec clarté.",
  openGraph: { title: "Services — Aya Orthophonie", description: "Des services pour mieux comprendre et accompagner votre enfant." },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Des services pour mieux comprendre et accompagner votre enfant"
        text="Chaque accompagnement commence par une écoute attentive de votre situation, de vos questions et du rythme de votre enfant."
        cta="Prendre rendez-vous"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service) => <ServiceCard key={service.href} {...service} />)}
        </div>
      </section>
      <section className="bg-cream px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Comment se déroule l'accompagnement ?" text="L'objectif est de garder un cadre clair, humain et ajusté à votre demande." />
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {["Premier contact", "Compréhension de la demande", "Bilan ou orientation", "Plan d'accompagnement", "Suivi et conseils"].map((step, index) => (
              <article key={step} className="rounded-[26px] bg-white p-6 shadow-soft ring-1 ring-primary/8">
                <p className="text-sm font-extrabold text-accent">0{index + 1}</p>
                <h3 className="mt-3 font-heading text-xl font-black text-primary">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Vous ne savez pas par où commencer ?" text="Parlons-en. Un premier échange permet souvent de clarifier la situation avec douceur." />
    </>
  );
}
