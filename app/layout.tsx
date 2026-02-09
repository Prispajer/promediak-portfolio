import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "ProMediak – Produkcja wideo i fotografia | Filmy reklamowe, eventy, social media",
  description:
    "ProMediak tworzy profesjonalne filmy reklamowe, materiały wideo dla social media, relacje z eventów oraz sesje foto. Kreatywna produkcja, nowoczesny montaż i wysoka jakość obrazu dla firm i marek.",
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
