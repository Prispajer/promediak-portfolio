import { Metadata } from "next";
import HomeContainer from "@/components/sections/Home/HomeContainer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Studio Filmowe i Fotografia | ProMediak realizacje video",
  description:
    "Tworzymy unikalne filmy ślubne, artystyczne teledyski oraz dynamiczne highlighty. Zobacz portfolio ProMediak i podejmij współpracę z nami już dziś.",
  robots: "index, follow",
  themeColor: "#18251f",
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
    canonical: "/",
  },
  openGraph: {
    title: "Studio Filmowe i Fotografia | ProMediak",
    description:
      "Profesjonalne realizacje wideo i fotografie, które wyróżnią Twoją markę.",
    type: "website",
    url: "/",
    locale: "pl_PL",
    siteName: "ProMediak",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Studio Filmowe ProMediak Portfolio",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <HomeContainer />
    </div>
  );
}
