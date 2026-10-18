import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Nous contacter — Aya Orthophonie",
  description: "Contactez Aya Orthophonie pour une question générale sur le langage et la communication.",
  openGraph: { title: "Nous contacter — Aya Orthophonie", description: "Envoyez un message, nous vous répondrons avec attention." },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Nous contacter"
        text="Vous avez une question générale concernant un enfant, un adolescent ou un adulte ? Envoyez un message, sans donnée de santé confidentielle. Une demande de contact ne vaut pas confirmation de rendez-vous."
      />
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-6">
            <div className="rounded-[32px] bg-pale-blue p-8">
              <h2 className="font-heading text-3xl font-black text-primary">Informations</h2>
              <div className="mt-6 space-y-4 leading-7 text-text-muted">
                <p><strong className="text-text-dark">Nom :</strong> Aya Lakhsadi</p>
                <p><strong className="text-text-dark">Email :</strong> <a className="focus-ring rounded text-primary underline" href="mailto:Lakhsadi.aya1@gmail.com">Lakhsadi.aya1@gmail.com</a></p>
                <p><strong className="text-text-dark">Téléphone :</strong> <a className="focus-ring rounded text-primary underline" href="tel:+33491891396">04 91 89 13 96</a></p>
                <p><strong className="text-text-dark">Instagram :</strong> <a className="focus-ring rounded text-primary underline" href="https://www.instagram.com/aya_orthophoniste_/" target="_blank" rel="noreferrer">@aya_orthophoniste_</a></p>
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
