import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";

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
        text="Les parents jouent un rôle essentiel dans le développement du langage. De petits gestes du quotidien peuvent soutenir la communication de l'enfant."
        cta="Recevoir des conseils adaptés"
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
      <CTASection button="Recevoir des conseils adaptés" />
    </>
  );
}
