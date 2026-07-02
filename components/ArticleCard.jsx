import Link from "next/link";

export default function ArticleCard({ category, title, excerpt, readTime, href }) {
  return (
    <article className="group overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-primary/8 transition duration-200 hover:-translate-y-1">
      <div className="h-28 bg-pale-blue">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(240,230,211,1),transparent_35%),linear-gradient(135deg,rgba(237,244,248,1),rgba(255,255,255,1)_50%,rgba(124,185,160,0.35))]" />
      </div>
      <div className="p-7">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
          <span>{category}</span>
          {readTime ? <span className="rounded-full bg-pale-blue px-3 py-1 tracking-normal text-primary">{readTime}</span> : null}
        </div>
        <h3 className="font-heading text-2xl font-black leading-tight text-primary">{title}</h3>
        <p className="mt-3 leading-7 text-text-muted">{excerpt}</p>
        <Link href={href} className="focus-ring mt-6 inline-flex rounded-full font-extrabold text-primary transition group-hover:text-accent">
          Lire l'article →
        </Link>
      </div>
    </article>
  );
}
