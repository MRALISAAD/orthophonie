import ArticleLayout, { ArticleSection } from "@/components/ArticleLayout";

export const metadata = {
  title: "Quand consulter une orthophoniste ? — Aya Orthophonie",
  description: "Signes qui peuvent questionner, repères selon l'âge et intérêt de demander un avis orthophonique.",
  openGraph: { title: "Quand consulter une orthophoniste ? — Aya Orthophonie", description: "Un article rassurant pour savoir quand demander un avis." },
};

export default function ArticleQuandConsulter() {
  return (
    <ArticleLayout
      title="Quand consulter une orthophoniste ?"
      intro="Quand une question revient souvent dans le quotidien, il peut être utile d'en parler avec un professionnel. Demander un avis ne signifie pas dramatiser."
    >
      <ArticleSection title="Introduction rassurante">
        <p>Beaucoup de parents hésitent entre attendre et consulter. Cette hésitation est normale. L'objectif d'un avis orthophonique est d'éclairer la situation, pas d'étiqueter l'enfant.</p>
      </ArticleSection>
      <ArticleSection title="Les signes qui peuvent questionner">
        <p>Un enfant qui parle très peu, comprend difficilement les consignes, se fait rarement comprendre, bloque souvent en parlant ou rencontre des difficultés marquées en lecture ou en écriture peut bénéficier d'un avis.</p>
      </ArticleSection>
      <ArticleSection title="Ce qui peut être normal selon l'âge">
        <p>Le langage se développe progressivement. Certains sons arrivent plus tard, le vocabulaire varie beaucoup et chaque enfant évolue à son rythme. C'est la combinaison des observations qui compte.</p>
      </ArticleSection>
      <ArticleSection title="Pourquoi demander un avis tôt peut aider">
        <p>Un avis précoce peut rassurer, proposer des gestes simples ou orienter vers un bilan si nécessaire. Il permet d'éviter que l'inquiétude reste seule pendant des mois.</p>
      </ArticleSection>
      <ArticleSection title="Ce qu'une consultation permet de clarifier">
        <p>La consultation aide à comprendre ce qui relève du développement habituel, ce qui mérite d'être observé et ce qui peut nécessiter un accompagnement plus structuré.</p>
      </ArticleSection>
      <ArticleSection title="Conclusion douce">
        <p>Vous n'avez pas besoin d'être certain qu'il existe une difficulté pour demander un avis. Une question posée avec calme peut déjà ouvrir un chemin plus clair.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
