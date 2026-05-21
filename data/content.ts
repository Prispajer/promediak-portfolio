import { Camera, Film, Star, Heart, Award } from "lucide-react";

export const stats = [
  { icon: Heart, number: "150+", label: "Wykonanych Realizacji" },
  { icon: Award, number: "15", label: "Lat Doświadczenia" },
  { icon: Star, number: "100%", label: "Zadowolonych Klientów" },
] as const;

export const services = [
  {
    icon: Camera,
    title: "Fotografia",
    description:
      "Uwieczniamy najważniejsze momenty z artystycznym podejściem i dbałością o każdy detal.",
    link: "/portfolio/photo",
  },
  {
    icon: Film,
    title: "Film",
    description:
      "Tworzymy kinowe produkcje, które opowiadają Waszą historię w poruszający sposób.",
    link: "/portfolio/video",
  },
] as const;

export const philosophy = [
  {
    title: "Autentyczność ponad pozory",
    description:
      "Niezależnie od okazji — ślub, studniówka czy teledysk — ujęcia, które oddają prawdziwe emocje i energię chwili, pozostawiając po sobie autentyczną historię.",
  },
  {
    title: "Spokój ponad codzienny chaos",
    description:
      "Niezależnie od miejsca i sytuacji — spokojna, dyskretna atmosfera — przestrzeń bez presji, sztuczności i stresu, sprzyjająca naturalnym ujęciom.",
  },
  {
    title: "Klimat ponad dokumentację",
    description:
      "Bez względu na charakter projektu — intymny, dynamiczny czy pełen emocji — materiał z duszą, który opowiada historię i buduje wyraźny, zapadający w pamięć klimat.",
  },
] as const;

export const photoServices = [
  {
    title: "Śluby",
    desc: "Ceremonie, wesela, plenery",
    details: "Dokumentujemy każdy moment Waszego wyjątkowego dnia",
  },
  {
    title: "Portrety",
    desc: "Sesje indywidualne i rodzinne",
    details: "Profesjonalne sesje w studio lub plenerze",
  },
  {
    title: "Eventy",
    desc: "Imprezy firmowe i prywatne",
    details: "Reportaże z wydarzeń każdego rodzaju",
  },
] as const;

export const filmServices = [
  {
    title: "Film Ślubny",
    desc: "Pełna relacja z ceremonii i wesela",
    details: "4K, dron, multi-kamera",
  },
  {
    title: "Highlight",
    desc: "Dynamiczny skrót najlepszych momentów",
    details: "3-5 minut emocji",
  },
  {
    title: "Teledysk",
    desc: "Artystyczny klip z sesji plenerowej",
    details: "Kinowa jakość",
  },
  {
    title: "SDE",
    desc: "Same Day Edit — film na wesele",
    details: "Pokaz tego samego wieczoru",
  },
] as const;
