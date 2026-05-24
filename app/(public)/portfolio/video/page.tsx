import { Metadata } from "next";
import VideoContainer from "@/components/sections/Video/VideoContainer";

export const metadata: Metadata = {
  title: "Realizacje Wideo | Profesjonalne Filmy | ProMediak",
  description:
    "Portfolio Video ProMediak: Unikalne emocje. Każdy projekt to indywidualna historia. Zobacz nasze realizacje i przekonaj się o jakości, którą oferujemy.",
};

export default function VideoPage() {
  return (
    <div className="bg-background min-h-screen">
      <VideoContainer />
    </div>
  );
}
