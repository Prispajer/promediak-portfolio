import { Metadata } from "next";
import VideoContainer from "@/components/sections/Video/VideoContainer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Realizacje Video | Profesjonalne Filmy ProMediak",
  description:
    "Zobacz nasze portfolio wideo. Tworzymy unikalne filmy ślubne, dynamiczne highlighty oraz artystyczne teledyski, które zatrzymają Twoje najpiękniejsze emocje.",
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
