import React from "react";
import "./globals.css";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#18251f",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  robots: "index, follow",
  applicationName: "ProMediak",
  appleWebApp: {
    title: "ProMediak",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      { url: "/assets/branding/favicon.svg", type: "image/svg+xml" },
      {
        url: "/assets/branding/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/branding/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/branding/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/assets/branding/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/branding/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/branding/og-image.png"],
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
        url: "/assets/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Filmowe ProMediak Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
