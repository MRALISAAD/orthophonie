const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactLimits = { parentName: 100, email: 254, phone: 30, subject: 160, message: 2000 };

export function validateContactPayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return { error: "Données invalides." };
  if (typeof payload.website === "string" && payload.website.trim()) return { spam: true };
  const values = Object.fromEntries(Object.keys(contactLimits).map((key) => [key, typeof payload[key] === "string" ? payload[key].trim() : ""]));
  if (!values.parentName || !values.email || !values.subject || !values.message || payload.privacy !== true) return { error: "Veuillez remplir les champs obligatoires et accepter la politique de confidentialité." };
  if (!emailPattern.test(values.email)) return { error: "Veuillez indiquer une adresse email valide." };
  const exceeded = Object.entries(contactLimits).find(([key, limit]) => values[key].length > limit);
  if (exceeded) return { error: `Le champ ${exceeded[0]} est trop long.` };
  return { values };
}
