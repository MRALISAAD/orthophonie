"use client";

import { useState } from "react";
import Button from "./Button";

const initialValues = { parentName: "", email: "", phone: "", subject: "", message: "", privacy: false, website: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Le message n’a pas pu être envoyé.");
      setValues(initialValues);
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Le message n’a pas pu être envoyé." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[32px] bg-white p-6 shadow-soft ring-1 ring-primary/8 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="parentName" label="Nom du parent" value={values.parentName} onChange={updateField} required maxLength={100} />
        <Field id="email" label="Email" type="email" value={values.email} onChange={updateField} required maxLength={254} />
        <Field id="phone" label="Téléphone (facultatif)" type="tel" value={values.phone} onChange={updateField} maxLength={30} />
        <Field id="subject" label="Motif du contact" value={values.subject} onChange={updateField} required maxLength={160} className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-extrabold text-primary">Message <span aria-hidden="true">*</span></label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            maxLength={2000}
            value={values.message}
            onChange={updateField}
            className="focus-ring w-full resize-y rounded-2xl border border-primary/12 bg-cream px-4 py-3 text-text-dark placeholder:text-text-muted/60"
            placeholder="Décrivez votre question en quelques lignes, sans donnée de santé confidentielle."
          />
          <p className="mt-1 text-xs text-text-muted">2 000 caractères maximum.</p>
        </div>
        <div className="sr-only" aria-hidden="true"><label htmlFor="website">Ne pas remplir ce champ</label><input id="website" name="website" value={values.website} onChange={updateField} tabIndex={-1} autoComplete="off" /></div>
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-text-muted">
        <input type="checkbox" name="privacy" checked={values.privacy} onChange={updateField} required className="focus-ring mt-1 h-4 w-4 rounded border-primary/30 text-primary" />
        <span>J’accepte que ces informations soient utilisées uniquement pour répondre à ma demande. <span aria-hidden="true">*</span></span>
      </label>
      <Button type="submit" disabled={submitting} className="mt-6 w-full sm:w-auto">{submitting ? "Envoi en cours…" : "Envoyer la demande"}</Button>
      <div aria-live="polite" role="status" className={`mt-4 rounded-2xl p-4 text-sm leading-6 ${status.type === "success" ? "bg-soft-green/20 text-primary" : status.type === "error" ? "bg-red-50 text-red-800" : "hidden"}`}>
        {status.message}
      </div>
      <p className="mt-4 text-sm leading-6 text-text-muted">
        Les demandes ne constituent pas une confirmation de rendez-vous. N’envoyez pas de dossier médical ou de diagnostic via ce formulaire.
      </p>
    </form>
  );
}

function Field({ id, label, type = "text", value, onChange, required = false, maxLength, className = "" }) {
  return <div className={className}>
    <label htmlFor={id} className="mb-2 block text-sm font-extrabold text-primary">{label} {required ? <span aria-hidden="true">*</span> : null}</label>
    <input id={id} name={id} type={type} required={required} maxLength={maxLength} value={value} onChange={onChange} className="focus-ring w-full rounded-2xl border border-primary/12 bg-cream px-4 py-3 text-text-dark placeholder:text-text-muted/60" />
  </div>;
}
