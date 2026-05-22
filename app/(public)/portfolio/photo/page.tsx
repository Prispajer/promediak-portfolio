import { Metadata } from "next";
import PhotoContainer from "@/components/sections/Photo/PhotoContainer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Sesje Fotograficzne | ProMediak artystyczne zdjęcia",
  description:
    "Profesjonalna fotografia ślubna, artystyczne sesje plenerowe oraz reportaże okolicznościowe. Zobacz zdjęcia ProMediak, które zatrzymają Twoje najpiękniejsze wspomnienia.",
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
    canonical: "/portfolio/photo",
  },
  openGraph: {
    title: "Sesje Fotograficzne i Reportaże | ProMediak",
    description:
      "Artystyczna fotografia. Sprawdź nasze pełne portfolio zdjęciowe.",
    type: "website",
    url: "/portfolio/photo",
    locale: "pl_PL",
    siteName: "ProMediak",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "ProMediak Portfolio Fotograficzne",
      },
    ],
  },
};

export default function PhotoPage() {
  return (
    <div className="bg-background min-h-screen">
      <PhotoContainer />
    </div>
  );
}
