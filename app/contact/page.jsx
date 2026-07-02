import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Prendre rendez-vous — Aya Orthophonie",
  description: "Contactez Aya Orthophonie pour une question ou une demande de rendez-vous.",
  openGraph: { title: "Prendre rendez-vous — Aya Orthophonie", description: "Envoyez un message, nous vous répondrons avec attention." },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Prendre rendez-vous"
        text="Vous avez une question ou vous souhaitez être accompagné ? Envoyez un message, nous vous répondrons avec attention."
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-6">
            <div className="rounded-[32px] bg-pale-blue p-8">
              <h2 className="font-heading text-3xl font-black text-primary">Informations</h2>
              <div className="mt-6 space-y-4 leading-7 text-text-muted">
                <p><strong className="text-text-dark">Email :</strong> <a className="focus-ring rounded text-primary" href="mailto:contact@ayaorthophonie.com">contact@ayaorthophonie.com</a></p>
                <p><strong className="text-text-dark">Téléphone :</strong> à compléter</p>
                <p><strong className="text-text-dark">Localisation :</strong> à compléter</p>
                <p><strong className="text-text-dark">Réseaux sociaux :</strong> Instagram · Facebook · TikTok</p>
              </div>
            </div>
            <div className="rounded-[28px] bg-sand p-6 leading-7 text-text-dark">
              En cas d'urgence médicale ou de préoccupation importante, contactez un professionnel de santé ou les services appropriés.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
