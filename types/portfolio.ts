import { StaticImageData } from "next/image";

export interface PhotoItem {
  id: string;
  image: StaticImageData | string;
  title: string;
  category: string;
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
}
