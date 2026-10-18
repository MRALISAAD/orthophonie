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
            Aya Lakhsadi accompagne les enfants, les adolescents et les adultes avec une approche attentive, personnalisée et collaborative.
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
            <h2 className="font-heading text-lg font-black">Contact</h2>
            <div className="mt-4 grid gap-3">
              <p className="text-white/76">Aya Lakhsadi</p>
              <a href="mailto:Lakhsadi.aya1@gmail.com" className="focus-ring rounded-full text-white/76 transition hover:text-white">Lakhsadi.aya1@gmail.com</a>
              <a href="tel:+33491891396" className="focus-ring rounded-full text-white/76 transition hover:text-white">04 91 89 13 96</a>
              <a href="https://www.instagram.com/aya_orthophoniste_/" target="_blank" rel="noreferrer" className="focus-ring rounded-full text-white/76 transition hover:text-white">Instagram · @aya_orthophoniste_</a>
              <Link href="/mentions-legales" className="focus-ring rounded-full text-white/76 transition hover:text-white">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="focus-ring rounded-full text-white/76 transition hover:text-white">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-sm text-white/65">
        © 2026 Aya Orthophonie — Guidance et Langage
        <p className="mt-3 max-w-3xl text-xs leading-5 text-white/50">Visuels illustratifs : <a className="underline hover:text-white" href="https://www.pexels.com/photo/photo-of-a-child-reading-a-book-with-her-parents-4874928/" target="_blank" rel="noreferrer">Antoni Shkraba</a>, <a className="underline hover:text-white" href="https://www.pexels.com/photo/hands-child-childhood-carpet-6692841/" target="_blank" rel="noreferrer">Tara Winstead</a>, <a className="underline hover:text-white" href="https://www.pexels.com/photo/child-learning-with-teacher-in-classroom-34708272/" target="_blank" rel="noreferrer">Caleb Oquendo</a> et <a className="underline hover:text-white" href="https://www.pexels.com/photo/child-and-adult-learning-interaction-at-school-35745625/" target="_blank" rel="noreferrer">Ahmet Kurt</a> via Pexels. Ils ne représentent pas Aya Lakhsadi ni des patients suivis.</p>
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
