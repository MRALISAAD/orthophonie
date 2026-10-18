"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { navLinks } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/8 bg-white/86 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-full text-sm font-extrabold text-text-dark transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">Nous contacter</Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pale-blue text-primary lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-5 w-6">
            <span className={`absolute left-0 top-1 h-0.5 w-6 rounded bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-6 rounded bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-5 h-0.5 w-6 rounded bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="border-t border-primary/8 bg-white px-5 pb-6 pt-3 lg:hidden" aria-label="Navigation mobile">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 font-extrabold text-primary hover:bg-pale-blue"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Nous contacter
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
