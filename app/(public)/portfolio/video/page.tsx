import { Metadata, Viewport } from "next";
import VideoContainer from "@/components/sections/Video/VideoContainer";

export const viewport: Viewport = {
  themeColor: "#18251f",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Realizacje Video | Profesjonalne Filmy ProMediak",
  description:
    "Portfolio Video ProMediak: Unikalne emocje. Każdy projekt to indywidualna historia. Zobacz nasze realizacje i przekonaj się o jakości, którą oferujemy.",
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
    canonical: "/portfolio/video",
  },
  openGraph: {
    title: "Realizacje Video | ProMediak",
    description:
      "Artystyczne teledyski, filmy ślubne i dynamiczne highlighty. Sprawdź nasze unikalne portfolio wideo.",
    type: "website",
    url: "/portfolio/video",
    locale: "pl_PL",
    siteName: "ProMediak",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "ProMediak Realizacje Video Portfolio",
      },
    ],
  },
};

export default function VideoPage() {
  return (
    <div className="bg-background min-h-screen">
      <VideoContainer />
    </div>
  );
}
