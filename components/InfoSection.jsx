export default function InfoSection({ title, children, tone = "white" }) {
  const bg = tone === "blue" ? "bg-pale-blue" : tone === "sand" ? "bg-sand" : "bg-white";
  return (
    <section className={`rounded-[30px] ${bg} p-6 shadow-soft ring-1 ring-primary/8 sm:p-8`}>
      <h2 className="font-heading text-2xl font-black text-primary sm:text-3xl">{title}</h2>
      <div className="prose-content mt-4 space-y-4 leading-8 text-text-muted">{children}</div>
    </section>
  );
}
