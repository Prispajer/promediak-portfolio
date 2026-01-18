import { Camera, Film, Star, Heart, Award } from "lucide-react";

export const stats = [
    { icon: Heart, number: "200+", label: "Szczęśliwych Par" },
    { icon: Award, number: "8", label: "Lat Doświadczenia" },
    { icon: Star, number: "100%", label: "Zadowolonych Klientów" },
] as const;

export const services = [
    {
        icon: Camera,
        title: "Fotografia",
        description: "Uwieczniamy najważniejsze momenty z artystycznym podejściem i dbałością o każdy detal.",
        link: "/fotografia",
    },
    {
        icon: Film,
        title: "Film",
        description: "Tworzymy kinowe produkcje, które opowiadają Waszą historię w poruszający sposób.",
        link: "/film",
    },
] as const;

export const testimonials = [
    {
        text: "Absolutnie zachwyceni! Zdjęcia i film z naszego ślubu to prawdziwe dzieła sztuki.",
        author: "Anna & Marek",
        role: "Ślub 2024",
    },
    {
        text: "Profesjonalizm na najwyższym poziomie. Polecam każdemu!",
        author: "Katarzyna",
        role: "Sesja portretowa",
    },
    {
        text: "Perfekcyjne uchwycenie emocji. Każde zdjęcie opowiada historię.",
        author: "Tomasz & Julia",
        role: "Plener ślubny",
    },
] as const;

export const photographyCategories = [
    {
        title: "Śluby",
        desc: "Ceremonie, wesela, plenery",
        details: "Dokumentujemy każdy moment Waszego wyjątkowego dnia"
    },
    {
        title: "Portrety",
        desc: "Sesje indywidualne i rodzinne",
        details: "Profesjonalne sesje w studio lub plenerze"
    },
    {
        title: "Eventy",
        desc: "Imprezy firmowe i prywatne",
        details: "Reportaże z wydarzeń każdego rodzaju"
    },
] as const;

export const filmServices = [
    { title: "Film Ślubny", desc: "Pełna relacja z ceremonii i wesela", details: "4K, dron, multi-kamera" },
    { title: "Highlight", desc: "Dynamiczny skrót najlepszych momentów", details: "3-5 minut emocji" },
    { title: "Teledysk", desc: "Artystyczny klip z sesji plenerowej", details: "Kinowa jakość" },
    { title: "SDE", desc: "Same Day Edit — film na wesele", details: "Pokaz tego samego wieczoru" },
] as const;

export const values = [
    {
        title: "Autentyczność",
        desc: "Uchwycamy prawdziwe emocje, nie wymuszone pozy. Każde zdjęcie jest szczere i naturalne.",
    },
    {
        title: "Jakość",
        desc: "Każdy projekt realizujemy na najwyższym poziomie. Nie idziemy na kompromisy.",
    },
    {
        title: "Pasja",
        desc: "Kochamy to, co robimy — i widać to w naszych pracach. To nie jest dla nas tylko praca.",
    },
] as const;
