import Button from "./Button";

export default function ServiceCard({ icon, title, description, audience, benefit, href }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-primary/8 transition duration-200 hover:-translate-y-1">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pale-blue text-2xl transition group-hover:bg-sand">
        {icon}
      </div>
      <h3 className="font-heading text-2xl font-black text-primary">{title}</h3>
      <p className="mt-3 leading-7 text-text-muted">{description}</p>
      <div className="mt-6 space-y-4 text-sm leading-6">
        {audience ? <p><strong className="text-text-dark">Pour qui :</strong> {audience}</p> : null}
        {benefit ? <p><strong className="text-text-dark">Cela permet de :</strong> {benefit}</p> : null}
      </div>
      {href ? <Button href={href} variant="ghost" className="mt-7 w-fit">En savoir plus</Button> : null}
    </article>
  );
}
