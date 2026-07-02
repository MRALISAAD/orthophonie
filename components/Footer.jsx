import Link from "next/link";
import Logo from "./Logo";
import { articles, navLinks, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-primary px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo footer />
          <p className="mt-5 max-w-md leading-7 text-white/76">
            Aya Orthophonie accompagne les parents avec des repères clairs, une écoute attentive et une approche centrée sur le rythme de chaque enfant.
          </p>
          <p className="mt-6 rounded-3xl bg-white/10 p-5 text-sm leading-6 text-white/78">
            Ce site ne remplace pas une consultation professionnelle. En cas de doute, consultez un(e) orthophoniste.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Navigation" links={navLinks} />
          <FooterColumn title="Services" links={services.map((item) => ({ label: item.title, href: item.href }))} />
          <FooterColumn title="Ressources" links={articles.map((item) => ({ label: item.title, href: item.href }))} />
          <div>
            <h2 className="font-heading text-lg font-black">Réseaux</h2>
            <div className="mt-4 grid gap-3">
              {["Instagram", "Facebook", "TikTok"].map((name) => (
                <a key={name} href="#" className="focus-ring rounded-full text-white/76 transition hover:text-white">
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-sm text-white/65">
        © 2026 Aya Orthophonie — Guidance et Langage
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-black">{title}</h2>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="focus-ring rounded-full text-white/76 transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
