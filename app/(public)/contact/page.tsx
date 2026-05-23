import { Metadata, Viewport } from "next";
import ContactContainer from "@/components/sections/Contact/ContactContainer";

export const viewport: Viewport = {
  themeColor: "#18251f",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Kontakt | Zarezerwuj Termin Współpracy z ProMediak",
  description:
    "Masz pytania dotyczące filmu lub sesji? Skontaktuj się z ProMediak już dziś. Napisz lub zadzwoń, zapytaj o wolny termin i stwórzmy razem coś pięknego.",
  robots: "index, follow",
  applicationName: "ProMediak",
  appleWebApp: {
    title: "ProMediak",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontakt | Podejmij Współpracę z ProMediak",
    description:
      "Skontaktuj się z nami, sprawdź dostępność terminów i zapytaj o indywidualną ofertę na foto i video.",
    type: "website",
    url: "/contact",
    locale: "pl_PL",
    siteName: "ProMediak",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Formularz Kontaktowy ProMediak",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <ContactContainer />
    </div>
  );
}
