import PageHero from "@/components/PageHero";
import ResourceLibrary from "@/components/ResourceLibrary";
import { articles } from "@/data/site";

export const metadata = {
  title: "Ressources pour les parents — Aya Orthophonie",
  description: "Articles simples et rassurants pour comprendre le langage, la communication et les apprentissages.",
  openGraph: { title: "Ressources pour les parents — Aya Orthophonie", description: "Des ressources éducatives pour les parents." },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Magazine parents"
        title="Ressources pour les parents"
        text="Des articles simples et rassurants pour mieux comprendre le langage, la communication et les apprentissages."
      />
      <section className="bg-white px-5 py-16 sm:px-8">
        <ResourceLibrary articles={articles} categories={["Toutes", ...new Set(articles.map((article) => article.category))]} />
      </section>
    </>
  );
}
