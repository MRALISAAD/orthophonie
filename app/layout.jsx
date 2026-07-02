import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ayaorthophonie.com"),
  title: {
    default: "Aya Orthophonie — Guidance et Langage",
    template: "%s",
  },
  description:
    "Aya Orthophonie accompagne les parents avec des repères clairs sur le langage, la parole, la communication, la lecture et l'écriture.",
  openGraph: {
    title: "Aya Orthophonie — Guidance et Langage",
    description:
      "Vous avez un doute sur le langage de votre enfant ? On vous aide à y voir plus clair.",
    type: "website",
    locale: "fr_FR",
    siteName: "Aya Orthophonie",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${nunito.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-cream font-body antialiased">
        <a
          href="#contenu"
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-primary focus:shadow-soft"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
