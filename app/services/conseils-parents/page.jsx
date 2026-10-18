import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Conseils aux parents — Aya Orthophonie",
  description: "Des gestes simples pour soutenir le langage et la communication de l'enfant à la maison.",
  openGraph: { title: "Conseils aux parents — Aya Orthophonie", description: "Stimuler sans pression, avec des conseils adaptés." },
};

export default function ConseilsPage() {
  return (
    <>
      <PageHero
        label="Service"
        title="Conseils aux parents"
        text="Les proches jouent un rôle important dans les échanges du quotidien. De petits gestes peuvent soutenir la communication de l'enfant, de l'adolescent ou de l'adulte accompagné."
        cta="Nous contacter"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          <InfoSection title="Conseils simples à la maison" tone="blue">
            <p>Nommer ce que vous faites, commenter les routines et suivre l'intérêt de l'enfant créent des occasions naturelles de communication.</p>
          </InfoSection>
          <InfoSection title="Comment parler avec son enfant">
            <p>Utilisez des phrases courtes, laissez des silences, reformulez ses essais et valorisez son intention de communiquer.</p>
          </InfoSection>
          <InfoSection title="Comment lire une histoire" tone="sand">
            <p>Lire, c'est aussi regarder les images, poser des questions simples, faire des pauses et laisser l'enfant participer à sa manière.</p>
          </InfoSection>
          <InfoSection title="Comment stimuler sans pression">
            <p>L'objectif n'est pas de faire répéter à tout prix, mais de créer des échanges agréables où l'enfant a envie de communiquer.</p>
          </InfoSection>
          <InfoSection title="Ce qu'il vaut mieux éviter" tone="blue">
            <p>Évitez les corrections brusques, les comparaisons avec d'autres enfants et les questions répétées qui peuvent mettre l'enfant en difficulté.</p>
          </InfoSection>
        </div>
      </section>
      <section className="bg-cream px-5 py-20 sm:px-8"><div className="mx-auto max-w-5xl"><FAQSection items={[{ question: "Faut-il faire travailler l'enfant à la maison ?", answer: "L'objectif est surtout de créer des échanges naturels et agréables. Les conseils sont adaptés au quotidien et ne remplacent pas un suivi lorsqu'il est nécessaire." }, { question: "Les conseils concernent-ils uniquement les enfants ?", answer: "Cette page est centrée sur les familles et les enfants. Pour un adolescent ou un adulte, un échange permet de définir les repères les plus adaptés." }]} /></div></section>
      <CTASection button="Nous contacter" />
    </>
  );
}
