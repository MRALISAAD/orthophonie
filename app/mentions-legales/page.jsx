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
        text="Cette page précise le cadre informatif du site Aya Orthophonie et les informations professionnelles communiquées."
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
          <InfoSection title="Données personnelles">
            <p>Le formulaire de contact ne doit recevoir que les informations nécessaires à une réponse générale. Les modalités détaillées figurent dans la <a className="font-bold text-primary underline" href="/politique-confidentialite">politique de confidentialité</a> et doivent être validées selon la juridiction concernée.</p>
          </InfoSection>
          <InfoSection title="Coordonnées professionnelles">
            <p>Aya Lakhsadi. Email : <a className="font-bold text-primary underline" href="mailto:Lakhsadi.aya1@gmail.com">Lakhsadi.aya1@gmail.com</a>. Téléphone : <a className="font-bold text-primary underline" href="tel:+33491891396">04 91 89 13 96</a>. Instagram : <a className="font-bold text-primary underline" href="https://www.instagram.com/aya_orthophoniste_/" target="_blank" rel="noreferrer">@aya_orthophoniste_</a>. Aucune adresse professionnelle n'est publiée ici.</p>
          </InfoSection>
        </div>
      </section>
    </>
  );
}
