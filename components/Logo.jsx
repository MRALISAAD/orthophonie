import Link from "next/link";

export default function Logo({ footer = false }) {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-2xl" aria-label="Aya Orthophonie - Accueil">
      <svg width="58" height="48" viewBox="0 0 58 48" fill="none" aria-hidden="true">
        <path d="M21 6h16c8.3 0 15 5.5 15 12.4S45.3 31 37 31h-5.8L22 39v-8h-1C12.7 31 6 25.4 6 18.4S12.7 6 21 6Z" fill="#22557A" />
        <path d="M30 17h8.5C45.4 17 51 21.5 51 27s-5.6 10-12.5 10h-2.8L28 43v-6.1c-5.7-.8-10-4.8-10-9.9 0-5.5 5.6-10 12-10Z" fill="#7CB9A0" />
        <circle cx="21" cy="19" r="2.3" fill="#FFFFFF" />
        <circle cx="29" cy="19" r="2.3" fill="#FFFFFF" />
        <circle cx="37" cy="28" r="2" fill="#FFFFFF" />
        <circle cx="31" cy="28" r="2" fill="#FFFFFF" />
      </svg>
      <span className="leading-tight">
        <span className={`block font-heading text-lg font-extrabold tracking-tight ${footer ? "text-white" : "text-primary"}`}>
          Aya Orthophonie
        </span>
        <span className={`block text-xs font-semibold ${footer ? "text-white/70" : "text-text-muted"}`}>
          Guidance et Langage
        </span>
      </span>
    </Link>
  );
}
