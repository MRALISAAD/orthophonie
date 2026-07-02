import ArticleLayout, { ArticleSection } from "@/components/ArticleLayout";

export const metadata = {
  title: "Stimuler le langage sans pression — Aya Orthophonie",
  description: "Conseils pratiques pour encourager le langage à la maison pendant les routines, la lecture et le jeu.",
  openGraph: { title: "Stimuler le langage sans pression — Aya Orthophonie", description: "Des gestes simples pour le quotidien." },
};

export default function ArticleStimuler() {
  return (
    <ArticleLayout
      title="Stimuler le langage sans pression"
      intro="Le langage se nourrit des échanges du quotidien. Il n'est pas nécessaire de transformer la maison en séance d'exercices."
    >
      <ArticleSection title="Introduction">
        <p>Stimuler le langage, c'est créer des moments où l'enfant peut écouter, regarder, essayer, répondre et être compris. La relation reste plus importante que la performance.</p>
      </ArticleSection>
      <ArticleSection title="Parler pendant les routines">
        <p>Pendant le bain, le repas ou l'habillage, décrivez ce qui se passe avec des mots simples. Ces moments répétés aident l'enfant à associer les mots aux actions.</p>
      </ArticleSection>
      <ArticleSection title="Lire ensemble">
        <p>Vous pouvez lire le texte, commenter les images, imiter les personnages ou laisser l'enfant tourner les pages. Une lecture vivante vaut mieux qu'une lecture parfaite.</p>
      </ArticleSection>
      <ArticleSection title="Laisser le temps de répondre">
        <p>Après une question ou un commentaire, attendez quelques secondes. Ce temps donne à l'enfant l'occasion de prendre sa place dans l'échange.</p>
      </ArticleSection>
      <ArticleSection title="Reformuler sans corriger brutalement">
        <p>Si l'enfant dit un mot ou une phrase incomplète, vous pouvez reprendre naturellement la forme correcte. Il entend le modèle sans se sentir mis en échec.</p>
      </ArticleSection>
      <ArticleSection title="Jouer pour communiquer">
        <p>Les jeux de faire semblant, de construction ou de cache-cache créent des occasions de demander, commenter, protester, rire et raconter.</p>
      </ArticleSection>
      <ArticleSection title="Conclusion">
        <p>De petits gestes réguliers peuvent soutenir le langage. Si vous avez un doute persistant, un professionnel pourra vous aider à adapter les conseils à votre enfant.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
