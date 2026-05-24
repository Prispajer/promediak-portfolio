import { Metadata } from "next";
import ContactContainer from "@/components/sections/Contact/ContactContainer";
export const metadata: Metadata = {
  title: "Kontakt | Zarezerwuj Termin Współpracy z ProMediak",
  description:
    "Masz pytania dotyczące filmu lub sesji? Skontaktuj się z ProMediak już dziś. Napisz lub zadzwoń, zapytaj o wolny termin i stwórzmy razem coś pięknego.",
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <ContactContainer />
    </div>
  );
}
