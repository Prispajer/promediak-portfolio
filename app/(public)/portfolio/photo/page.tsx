import { Metadata } from "next";
import PhotoContainer from "@/components/sections/Photo/PhotoContainer";

export const metadata: Metadata = {
  title: "Sesje Fotograficzne | Artystyczne Kadry | ProMediak",
  description:
    "Portfolio Fotografia ProMediak: Artystyczne sesje i profesjonalny reportaż. Zobacz nasze ujęcia, które zatrzymają Twoje najpiękniejsze wspomnienia na lata.",
};

export default function PhotoPage() {
  return (
    <div className="bg-background min-h-screen">
      <PhotoContainer />
    </div>
  );
}
