import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
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
      <section className="bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {["Langage", "Parole", "Lecture", "Écriture", "Bilinguisme", "Conseils parents"].map((cat) => (
            <span key={cat} className="rounded-full bg-pale-blue px-4 py-2 text-sm font-extrabold text-primary">{cat}</span>
          ))}
        </div>
      </section>
      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {articles.map((article) => <ArticleCard key={article.href} {...article} />)}
        </div>
      </section>
    </>
  );
}
