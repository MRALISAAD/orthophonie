import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";

export const metadata = {
  title: "Politique de confidentialité — Aya Orthophonie",
  description: "Informations sur les données transmises via le site Aya Orthophonie.",
};

export default function PrivacyPage() {
  return <>
    <PageHero label="Confidentialité" title="Politique de confidentialité" text="Cette page décrit le fonctionnement du formulaire de contact. Elle doit être relue et adaptée à la juridiction et aux outils réellement utilisés avant la mise en production." />
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-4xl gap-6">
        <InfoSection title="Données collectées" tone="blue"><p>Le formulaire demande le nom du parent, une adresse email, un numéro de téléphone facultatif, un motif et un court message. Il ne doit pas être utilisé pour transmettre le nom complet de l’enfant, un dossier médical, un diagnostic ou toute autre donnée de santé.</p></InfoSection>
        <InfoSection title="Finalité et transmission"><p>Ces informations servent uniquement à répondre à la demande de contact. Lorsque la messagerie est configurée, elles sont transmises au prestataire d’envoi indiqué dans la configuration serveur et à l’adresse professionnelle destinataire. La clé d’API reste côté serveur.</p></InfoSection>
        <InfoSection title="Conservation et droits" tone="sand"><p>La durée de conservation, le responsable du traitement, les modalités d’accès, de rectification et de suppression doivent être confirmés par le responsable du site selon le pays d’exercice et le prestataire choisi. Aucun délai légal n’est inventé sur cette page.</p></InfoSection>
        <InfoSection title="Avant la mise en ligne"><p>Le domaine, l’identité professionnelle, l’adresse de contact, le prestataire d’email, les durées de conservation et les mentions exigées localement doivent être validés. Le formulaire ne constitue jamais une confirmation de rendez-vous.</p></InfoSection>
      </div>
    </section>
  </>;
}
