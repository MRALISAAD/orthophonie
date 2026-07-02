import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import CTASection from "@/components/CTASection";

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
        text="Le bilan orthophonique permet de mieux comprendre les forces, les besoins et les difficultés éventuelles de votre enfant dans le langage, la parole, la communication, la lecture ou l'écriture."
        cta="Demander un rendez-vous"
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          <InfoSection title="À quoi sert un bilan ?" tone="blue">
            <p>Il permet d'observer les compétences de l'enfant dans un cadre professionnel, de mettre en évidence ses points d'appui et de mieux comprendre ce qui peut le gêner.</p>
          </InfoSection>
          <InfoSection title="Quand demander un bilan ?">
            <p>Un bilan peut être demandé lorsque le langage, la compréhension, la prononciation, la communication, la lecture ou l'écriture questionnent les parents, l'école ou un professionnel de santé.</p>
          </InfoSection>
          <InfoSection title="Comment se déroule le bilan ?" tone="sand">
            <p>Le bilan commence par un échange avec les parents, puis par des observations et des activités adaptées à l'âge de l'enfant. Le rythme et le confort de l'enfant sont pris en compte.</p>
          </InfoSection>
          <InfoSection title="Ce que les parents reçoivent après le bilan">
            <p>Les parents repartent avec des explications claires, des priorités et, si nécessaire, une proposition de suivi ou d'orientation. Les informations sont formulées sans jargon inutile.</p>
          </InfoSection>
          <InfoSection title="Ce que le bilan ne fait pas en ligne" tone="blue">
            <p>Un formulaire ou un échange à distance ne remplace pas une évaluation complète. Aucun diagnostic n'est posé en ligne par Aya Orthophonie.</p>
          </InfoSection>
        </div>
      </section>
      <CTASection button="Demander un rendez-vous" />
    </>
  );
}
