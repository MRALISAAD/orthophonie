import ArticleLayout, { ArticleSection } from "@/components/ArticleLayout";

export const metadata = {
  title: "Bilinguisme et langage : ce qu'il faut savoir — Aya Orthophonie",
  description: "Comprendre le bilinguisme, les mélanges de langues et les situations qui méritent un avis.",
  openGraph: { title: "Bilinguisme et langage — Aya Orthophonie", description: "Un regard clair et non alarmiste sur le bilinguisme." },
};

export default function ArticleBilinguisme() {
  return (
    <ArticleLayout
      title="Bilinguisme et langage : ce qu'il faut savoir"
      intro="Grandir avec plusieurs langues est une richesse. Certaines étapes peuvent surprendre, mais elles ne sont pas automatiquement inquiétantes."
    >
      <ArticleSection title="Introduction rassurante">
        <p>Les parents d'enfants bilingues entendent parfois des conseils contradictoires. Le plus important est de regarder la communication globale de l'enfant dans toutes ses langues.</p>
      </ArticleSection>
      <ArticleSection title="Le bilinguisme n'est pas une cause automatique de trouble">
        <p>Le fait d'entendre ou d'utiliser plusieurs langues ne provoque pas à lui seul un trouble du langage. Un enfant bilingue peut toutefois avoir besoin d'un accompagnement, comme n'importe quel enfant.</p>
      </ArticleSection>
      <ArticleSection title="Mélanger les langues peut être normal">
        <p>Il est fréquent qu'un enfant utilise des mots de plusieurs langues dans une même phrase, surtout quand un mot lui vient plus vite dans une langue que dans l'autre.</p>
      </ArticleSection>
      <ArticleSection title="Quand observer davantage">
        <p>Une communication très limitée dans toutes les langues, une compréhension faible, peu de gestes ou une frustration importante peuvent justifier un avis professionnel.</p>
      </ArticleSection>
      <ArticleSection title="Comment soutenir un enfant bilingue">
        <p>Parlez dans la langue où vous êtes le plus à l'aise, gardez des échanges riches et naturels, lisez, chantez et valorisez les deux langues de l'enfant.</p>
      </ArticleSection>
      <ArticleSection title="Quand consulter">
        <p>Si votre inquiétude persiste, demander un avis peut aider à distinguer ce qui relève du bilinguisme habituel et ce qui mérite un accompagnement.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
