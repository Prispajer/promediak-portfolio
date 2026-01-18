import wedding1 from "@/assets/portfolio-wedding-1.jpg";
import wedding2 from "@/assets/portfolio-wedding-2.jpg";
import event1 from "@/assets/portfolio-event-1.jpg";
import portrait1 from "@/assets/portfolio-portrait-1.jpg";
import heroFilm from "@/assets/hero-film.jpg";
import {StaticImageData} from "next/image";

export interface PortfolioItem {
    id: string;
    image: StaticImageData;
    title: string;
    category: string;
}

export interface VideoProject {
    id: string;
    thumbnail: StaticImageData;
    title: string;
    category: string;
    duration: string;
}

export const portfolioPreview: PortfolioItem[] = [
    { id: "1", image: wedding1, title: "Ślub Anny & Marka", category: "Fotografia Ślubna" },
    { id: "2", image: wedding2, title: "Sesja w Lesie", category: "Portret" },
    { id: "3", image: event1, title: "Gala Firmowa", category: "Eventy" },
    { id: "4", image: portrait1, title: "Portret Artystyczny", category: "Studio" },
];

export const photographyPortfolio: PortfolioItem[] = [
    { id: "1", image: wedding1, title: "Ślub Anny & Marka", category: "Fotografia Ślubna" },
    { id: "2", image: wedding2, title: "Sesja w Lesie", category: "Plener Ślubny" },
    { id: "3", image: event1, title: "Gala Firmowa", category: "Eventy" },
    { id: "4", image: portrait1, title: "Portret Artystyczny", category: "Studio" },
    { id: "5", image: wedding1, title: "Ceremonia", category: "Ślub" },
    { id: "6", image: wedding2, title: "Detale", category: "Fotografia" },
];

export const videoProjects: VideoProject[] = [
    {
        id: "1",
        thumbnail: heroFilm,
        title: "Ślub Karoliny & Piotra",
        category: "Film Ślubny",
        duration: "8:32",
    },
    {
        id: "2",
        thumbnail: heroFilm,
        title: "Highlight Reel 2024",
        category: "Showreel",
        duration: "3:45",
    },
    {
        id: "3",
        thumbnail: heroFilm,
        title: "Ceremonia w Górach",
        category: "Film Ślubny",
        duration: "12:15",
    },
];
