import Button from "./Button";

export default function PageHero({ label, title, text, cta, ctaHref = "/contact" }) {
  return (
    <section className="relative overflow-hidden bg-cream px-5 py-16 sm:px-8 lg:py-24">
      <div className="organic absolute -right-28 top-10 h-80 w-80 bg-pale-blue" />
      <div className="organic absolute -left-24 bottom-4 h-56 w-56 bg-sand/80" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {label ? <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-accent">{label}</p> : null}
          <h1 className="font-heading text-4xl font-black leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">{text}</p>
          {cta ? <Button href={ctaHref} className="mt-8">{cta}</Button> : null}
        </div>
      </div>
    </section>
  );
}
