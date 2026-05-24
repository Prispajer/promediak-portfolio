import { Metadata } from "next";
import HomeContainer from "@/components/sections/Home/HomeContainer";

export const metadata: Metadata = {
  title: "Studio Filmowe i Fotografia | Poznaj Realizacje | ProMediak",
  description:
    "Tworzymy unikalne filmy ślubne, artystyczne teledyski oraz dynamiczne highlighty. Sprawdź portfolio ProMediak i zarezerwuj swój termin współpracy już dziś!",
};

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <HomeContainer />
    </div>
  );
}
