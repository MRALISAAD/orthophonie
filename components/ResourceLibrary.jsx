"use client";

import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ResourceLibrary({ articles, categories }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const filteredArticles = useMemo(() => articles.filter((article) => {
    const matchesCategory = category === "Toutes" || article.category === category;
    const searchable = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return matchesCategory && searchable.includes(query.toLowerCase().trim());
  }), [articles, category, query]);

  return <>
    <div className="mx-auto grid max-w-7xl gap-4 rounded-[28px] bg-cream p-5 sm:grid-cols-[1fr_auto] sm:p-6">
      <label className="text-sm font-extrabold text-primary">Rechercher une ressource
        <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Ex. bilinguisme" className="focus-ring mt-2 w-full rounded-2xl border border-primary/12 bg-white px-4 py-3 font-normal text-text-dark" />
      </label>
      <label className="text-sm font-extrabold text-primary">Catégorie
        <select value={category} onChange={(event) => setCategory(event.target.value)} className="focus-ring mt-2 w-full rounded-2xl border border-primary/12 bg-white px-4 py-3 font-normal text-text-dark sm:min-w-52">
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    </div>
    <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-3">
      {filteredArticles.map((article) => <ArticleCard key={article.href} {...article} />)}
      {!filteredArticles.length ? <p className="rounded-[28px] bg-pale-blue p-7 text-text-muted lg:col-span-3">Aucune ressource ne correspond à votre recherche.</p> : null}
    </div>
  </>;
}
