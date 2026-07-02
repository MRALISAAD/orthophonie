import Button from "./Button";

export default function CTASection({ title = "Un doute ne doit pas rester seul.", text = "Parlons-en avec douceur, clarté et professionnalisme.", button = "Prendre rendez-vous" }) {
  return (
    <section className="bg-primary px-5 py-20 text-white sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-primary px-6 py-14 ring-1 ring-white/15 sm:px-10 lg:px-16">
        <div className="organic absolute -right-20 -top-24 h-72 w-72 bg-soft-green/25" />
        <div className="organic absolute -bottom-24 left-10 h-56 w-56 bg-accent/20" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{text}</p>
          <Button href="/contact" variant="primary" className="mt-8">{button}</Button>
        </div>
      </div>
    </section>
  );
}
