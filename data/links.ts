export const siteConfig = {
  name: "ProMediak",
  tagline: "Film & Fotografia",
  description:
    "Profesjonalne usługi filmowe i fotograficzne. Tworzymy wyjątkowe wspomnienia z najważniejszych chwil Twojego życia.",
  email: "promediak.studio@gmail.com",
  phone: "+48 796 642 213",
  location: "Polska — dojeżdżamy wszędzie",
  hours: "Pon-Sob: 9:00 - 20:00",
  social: {
    facebook: "https://www.facebook.com/ProMediak",
    youtube: "https://www.youtube.com/@promediakstudio4737",
  },
} as const;

export const navLinks = [
  { name: "Strona Główna", path: "/" },
  { name: "Fotografia", path: "/portfolio/photo" },
  { name: "Film", path: "/portfolio/video" },
  { name: "O Nas", path: "/about" },
  { name: "Kontakt", path: "/contact" },
] as const;

export const footerLinks = [
  { name: "Fotografia", path: "/portfolio/photo" },
  { name: "Film", path: "/portfolio/video" },
  { name: "O Nas", path: "/about" },
  { name: "Kontakt", path: "/contact" },
] as const;
