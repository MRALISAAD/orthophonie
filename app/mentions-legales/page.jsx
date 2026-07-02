import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";

export const metadata = {
  title: "Mentions légales — Aya Orthophonie",
  description: "Mentions légales, note de responsabilité et absence de diagnostic en ligne.",
  openGraph: { title: "Mentions légales — Aya Orthophonie", description: "Informations légales et note de prudence." },
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        label="Mentions légales"
        title="Mentions légales et note de prudence"
        text="Cette page précise le cadre informatif du site Aya Orthophonie et les informations à compléter."
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-6">
          <InfoSection title="Responsabilité" tone="blue">
            <p>Les informations présentes sur ce site sont fournies à titre informatif. Elles ne remplacent pas une évaluation, un diagnostic ou un suivi réalisé par un(e) professionnel(le) qualifié(e).</p>
          </InfoSection>
          <InfoSection title="Absence de diagnostic en ligne">
            <p>Aya Orthophonie ne pose aucun diagnostic en ligne. Les contenus, formulaires et échanges initiaux servent à orienter la réflexion et à préparer une éventuelle consultation.</p>
          </InfoSection>
          <InfoSection title="Contenu informatif">
            <p>Les repères de développement sont généraux. Chaque enfant évolue à son rythme et une situation individuelle demande une analyse professionnelle.</p>
          </InfoSection>
          <InfoSection title="Confidentialité à compléter">
            <p>Les modalités de collecte, de traitement et de conservation des données personnelles seront à compléter selon les outils réellement utilisés pour le formulaire de contact.</p>
          </InfoSection>
          <InfoSection title="Coordonnées à compléter">
            <p>Responsable du site : à compléter. Adresse professionnelle : à compléter. Email : contact@ayaorthophonie.com.</p>
          </InfoSection>
        </div>
      </section>
    </>
  );
}
