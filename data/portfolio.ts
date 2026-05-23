import { PhotoItem, VideoItem } from "@/types/portfolio";

export const photoItems: PhotoItem[] = Array.from({ length: 31 }, (_, i) => ({
  id: String(i + 1),
  image: `/assets/portfolio/${i + 1}.jpg`,
  title: `Zdjęcie ${i + 1}`,
  category: "Wybrane realizacje",
}));

export const videoItems: VideoItem[] = [
  {
    id: "BZPi0podLPo",
    thumbnail: "https://img.youtube.com/vi/BZPi0podLPo/maxresdefault.jpg",
    title: "Pierwsza Komunia Święta | Trailer",
    category: "Trailer",
  },
  {
    id: "Qy7w9jwO_6o",
    thumbnail: "https://img.youtube.com/vi/Qy7w9jwO_6o/maxresdefault.jpg",
    title: "Dagmara & Przemysław | Zakończenie Wesela na Wesoło",
    category: "Film Ślubny",
  },
  {
    id: "B_hOVrYjVWA",
    thumbnail: "https://img.youtube.com/vi/B_hOVrYjVWA/maxresdefault.jpg",
    title: "III LO Starachowice | Czołówka Klasy III A",
    category: "Czołówka",
  },
  {
    id: "VkiaNkcN6gs",
    thumbnail: "https://img.youtube.com/vi/VkiaNkcN6gs/maxresdefault.jpg",
    title: "III LO Starachowice | Czołówka Klasy III B",
    category: "Czołówka",
  },
  {
    id: "6SagEp5Ra7Q",
    thumbnail: "https://img.youtube.com/vi/6SagEp5Ra7Q/maxresdefault.jpg",
    title: "Studniówka III LO | Trailer",
    category: "Trailer",
  },
  {
    id: "SV5lYlSat4o",
    thumbnail: "https://img.youtube.com/vi/SV5lYlSat4o/maxresdefault.jpg",
    title: "Wesele w pigułce | Z Przymrużeniem Oka",
    category: "Parodia",
  },
];
