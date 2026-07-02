export default function AgeMilestoneCard({ age, text, observe, support, advice }) {
  return (
    <article className="rounded-[26px] bg-white p-6 shadow-soft ring-1 ring-primary/8">
      <p className="mb-4 inline-flex rounded-full bg-soft-green/18 px-4 py-2 font-heading text-lg font-black text-primary">{age}</p>
      <p className="leading-7 text-text-muted">{text}</p>
      {observe || support || advice ? (
        <div className="mt-5 space-y-3 text-sm leading-6 text-text-muted">
          {observe ? <p><strong className="text-text-dark">Observer :</strong> {observe}</p> : null}
          {support ? <p><strong className="text-text-dark">Soutenir :</strong> {support}</p> : null}
          {advice ? <p><strong className="text-text-dark">Demander un avis :</strong> {advice}</p> : null}
        </div>
      ) : null}
    </article>
  );
}
