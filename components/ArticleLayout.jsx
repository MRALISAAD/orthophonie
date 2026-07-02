import Link from "next/link";

export default function ArticleLayout({ title, intro, children }) {
  return (
    <article className="bg-white">
      <header className="bg-cream px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/ressources" className="focus-ring mb-6 inline-flex rounded-full font-extrabold text-primary hover:text-accent">
            ← Toutes les ressources
          </Link>
          <h1 className="font-heading text-4xl font-black leading-tight tracking-tight text-primary sm:text-6xl">{title}</h1>
          <p className="mt-6 text-xl leading-9 text-text-muted">{intro}</p>
          <p className="mt-6 rounded-[24px] bg-pale-blue p-5 font-semibold leading-7 text-primary">
            Cet article ne remplace pas une consultation professionnelle.
          </p>
        </div>
      </header>
      <div className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">{children}</div>
      </div>
    </article>
  );
}

export function ArticleSection({ title, children }) {
  return (
    <section>
      <h2 className="font-heading text-3xl font-black text-primary">{title}</h2>
      <div className="mt-4 space-y-4 text-lg leading-8 text-text-muted">{children}</div>
    </section>
  );
}
