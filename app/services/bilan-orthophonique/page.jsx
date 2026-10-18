import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Bilan orthophonique — Aya Orthophonie",
  description: "Comprendre le rôle d'un bilan orthophonique, son déroulement et ce qu'il permet de clarifier.",
  openGraph: { title: "Bilan orthophonique — Aya Orthophonie", description: "Mieux comprendre les forces, les besoins et les difficultés éventuelles de l'enfant." },
};

export default function BilanPage() {
  return (
    <>
      <PageHero
        label="Service"
        title="Bilan orthophonique"
        text="Le bilan orthophonique permet de mieux comprendre les forces, les besoins et les difficultés éventuelles d'un enfant, d'un adolescent ou d'un adulte dans le langage, la parole, la communication, la lecture ou l'écriture."
        cta="Nous contacter"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          <InfoSection title="À quoi sert un bilan ?" tone="blue">
            <p>Il permet d'observer les compétences de la personne dans un cadre professionnel, de mettre en évidence ses points d'appui et de mieux comprendre ce qui peut la gêner.</p>
          </InfoSection>
          <InfoSection title="Quand demander un bilan ?">
            <p>Un bilan peut être demandé lorsque le langage, la compréhension, la prononciation, la communication, la lecture ou l'écriture questionnent les parents, l'école ou un professionnel de santé.</p>
          </InfoSection>
          <InfoSection title="Comment se déroule le bilan ?" tone="sand">
            <p>Le bilan commence par un échange avec la personne et, lorsque cela est pertinent, avec ses proches, puis par des observations et des activités adaptées à l'âge. Le rythme et le confort de chacun sont pris en compte.</p>
          </InfoSection>
          <InfoSection title="Ce que les parents reçoivent après le bilan">
            <p>Les parents repartent avec des explications claires, des priorités et, si nécessaire, une proposition de suivi ou d'orientation. Les informations sont formulées sans jargon inutile.</p>
          </InfoSection>
          <InfoSection title="Ce que le bilan ne fait pas en ligne" tone="blue">
            <p>Un formulaire ou un échange à distance ne remplace pas une évaluation complète. Aucun diagnostic n'est posé en ligne par Aya Orthophonie.</p>
          </InfoSection>
        </div>
      </section>
      <section className="bg-cream px-5 py-20 sm:px-8"><div className="mx-auto max-w-5xl"><FAQSection items={[{ question: "À qui s'adresse un bilan ?", answer: "Il peut concerner un enfant, un adolescent ou un adulte lorsque le langage, la communication, la parole, la lecture, l'écriture ou la déglutition questionnent." }, { question: "Le bilan pose-t-il un diagnostic en ligne ?", answer: "Non. Un échange en ligne ne remplace pas une évaluation complète et aucun diagnostic n'est posé via le site." }]} /></div></section>
      <CTASection button="Nous contacter" />
    </>
  );
}
