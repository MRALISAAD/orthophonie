import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Suivi personnalisé — Aya Orthophonie",
  description: "Un suivi orthophonique adapté au rythme, aux besoins et aux objectifs de l'enfant, de l'adolescent ou de l'adulte.",
  openGraph: { title: "Suivi personnalisé — Aya Orthophonie", description: "Un accompagnement progressif et ajusté." },
};

export default function SuiviPage() {
  return (
    <>
      <PageHero
        label="Service"
        title="Suivi personnalisé"
        text="Le suivi personnalisé accompagne chaque personne selon ses besoins, son rythme et ses objectifs."
        cta="Nous contacter"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          <InfoSection title="Objectifs du suivi" tone="blue">
            <p>Le suivi vise des objectifs précis et réalistes, construits à partir des besoins observés et réajustés au fil des progrès.</p>
          </InfoSection>
          <InfoSection title="Exemples de besoins accompagnés">
            <p>Le travail peut concerner la compréhension, l'expression orale, la prononciation, la communication, la déglutition ou les habiletés liées à la lecture et à l'écriture.</p>
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
      <section className="bg-cream px-5 py-20 sm:px-8"><div className="mx-auto max-w-5xl"><FAQSection items={[{ question: "Comment les objectifs sont-ils définis ?", answer: "Ils sont construits à partir de la demande, des besoins observés et des priorités de la personne, puis ajustés au fil du suivi." }, { question: "Les proches peuvent-ils être associés ?", answer: "Lorsque cela est pertinent et avec l'accord de la personne concernée, les proches peuvent recevoir des repères pour soutenir le quotidien." }]} /></div></section>
      <CTASection button="Nous contacter" />
    </>
  );
}
