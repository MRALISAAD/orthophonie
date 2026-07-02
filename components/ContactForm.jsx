import Button from "./Button";

export default function ContactForm() {
  const fields = [
    ["parentName", "Nom du parent", "text"],
    ["email", "Email", "email"],
    ["phone", "Téléphone", "tel"],
    ["childAge", "Âge de l'enfant", "text"],
    ["subject", "Sujet", "text"],
  ];

  return (
    <form className="rounded-[32px] bg-white p-6 shadow-soft ring-1 ring-primary/8 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(([id, label, type]) => (
          <div key={id} className={id === "subject" ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="mb-2 block text-sm font-extrabold text-primary">{label}</label>
            <input
              id={id}
              name={id}
              type={type}
              className="focus-ring w-full rounded-2xl border border-primary/12 bg-cream px-4 py-3 text-text-dark placeholder:text-text-muted/60"
              placeholder={label}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-extrabold text-primary">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="focus-ring w-full resize-y rounded-2xl border border-primary/12 bg-cream px-4 py-3 text-text-dark placeholder:text-text-muted/60"
            placeholder="Décrivez votre question en quelques lignes. Aucun diagnostic ne sera posé en ligne."
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">Envoyer la demande</Button>
      <p className="mt-4 text-sm leading-6 text-text-muted">
        Ce formulaire est statique pour le moment et prêt à être connecté à un service d'envoi.
      </p>
    </form>
  );
}
