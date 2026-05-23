import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio Filmowe i Fotografia ProMediak",
    short_name: "ProMediak",
    description:
      "Tworzymy unikalne filmy ślubne, artystyczne teledyski plenerowe oraz dynamiczne highlighty.",
    start_url: "/",
    display: "standalone",
    background_color: "#070d0a",
    theme_color: "#18251f",
    icons: [
      {
        src: "/assets/branding/android-144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/branding/android-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/branding/android-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/branding/maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
