import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Suivi personnalisé — Aya Orthophonie",
  description: "Un suivi orthophonique adapté au rythme, aux besoins et aux objectifs de l'enfant.",
  openGraph: { title: "Suivi personnalisé — Aya Orthophonie", description: "Un accompagnement progressif et ajusté." },
};

export default function SuiviPage() {
  return (
    <>
      <PageHero
        label="Service"
        title="Suivi personnalisé"
        text="Le suivi personnalisé accompagne l'enfant selon ses besoins, son rythme et ses objectifs."
        cta="Planifier un premier échange"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          <InfoSection title="Objectifs du suivi" tone="blue">
            <p>Le suivi vise des objectifs précis et réalistes, construits à partir des besoins observés et réajustés au fil des progrès.</p>
          </InfoSection>
          <InfoSection title="Exemples de besoins accompagnés">
            <p>Le travail peut concerner la compréhension, l'expression orale, la prononciation, la communication, les habiletés liées à la lecture ou à l'écriture.</p>
          </InfoSection>
          <InfoSection title="Rôle des parents" tone="sand">
            <p>Les parents sont associés au parcours. Ils reçoivent des repères et des pistes simples pour soutenir l'enfant dans les situations du quotidien.</p>
          </InfoSection>
          <InfoSection title="Progression dans le temps">
            <p>Chaque enfant évolue à son rythme. Les progrès peuvent être visibles rapidement ou demander davantage de temps, selon les objectifs travaillés.</p>
          </InfoSection>
          <InfoSection title="Importance de la régularité" tone="blue">
            <p>La régularité aide l'enfant à consolider ses compétences. Le suivi reste adapté à la fatigue, à la motivation et à l'environnement de l'enfant.</p>
          </InfoSection>
        </div>
      </section>
      <CTASection button="Planifier un premier échange" />
    </>
  );
}
