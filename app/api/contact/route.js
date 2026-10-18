import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact";

export const runtime = "nodejs";
const requests = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function getClientKey(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function originAllowed(request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return true;
  try { return new URL(request.url).origin === new URL(configured).origin || request.headers.get("origin") === new URL(configured).origin; } catch { return false; }
}

export async function POST(request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12000) return NextResponse.json({ error: "La requête est trop volumineuse." }, { status: 413 });
  if (!originAllowed(request)) return NextResponse.json({ error: "Requête non autorisée." }, { status: 403 });
  const now = Date.now();
  const key = getClientKey(request);
  const recent = (requests.get(key) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return NextResponse.json({ error: "Trop de demandes. Réessayez plus tard." }, { status: 429 });
  recent.push(now);
  requests.set(key, recent);

  let payload;
  try { payload = await request.json(); } catch { return NextResponse.json({ error: "Le format de la requête est invalide." }, { status: 400 }); }
  const validation = validateContactPayload(payload);
  if (validation.spam) return NextResponse.json({ message: "Votre demande a été reçue." });
  if (validation.error) return NextResponse.json({ error: validation.error }, { status: 400 });
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
    return NextResponse.json({ error: "Le formulaire est temporairement indisponible. La messagerie doit être configurée avant tout envoi." }, { status: 503 });
  }

  const { values } = validation;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: controller.signal,
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: values.email,
        subject: `[Aya Orthophonie] ${values.subject}`,
        text: `Nom du parent : ${values.parentName}\nEmail : ${values.email}\nTéléphone : ${values.phone || "Non renseigné"}\n\nMessage :\n${values.message}`,
      }),
    });
    if (!response.ok) return NextResponse.json({ error: "Le service de messagerie n’a pas accepté la demande. Réessayez plus tard." }, { status: 502 });
    return NextResponse.json({ message: "Votre demande a bien été envoyée. Elle ne vaut pas confirmation de rendez-vous." });
  } catch { return NextResponse.json({ error: "Le service de messagerie est momentanément indisponible." }, { status: 502 }); }
  finally { clearTimeout(timeout); }
}
