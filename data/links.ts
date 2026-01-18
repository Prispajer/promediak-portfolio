export const siteConfig = {
    name: "ProMediak",
    tagline: "Film & Fotografia",
    description: "Profesjonalne usługi filmowe i fotograficzne. Tworzymy wyjątkowe wspomnienia z najważniejszych chwil Twojego życia.",
    email: "kontakt@promediak.pl",
    phone: "+48 123 456 789",
    location: "Polska — dojeżdżamy wszędzie",
    hours: "Pon-Sob: 9:00 - 20:00",
    social: {
        instagram: "https://instagram.com/promediak",
        youtube: "https://youtube.com/@promediak",
    },
} as const;

export const navLinks = [
    {name: "Strona Główna", path: "/"},
    {name: "Fotografia", path: "/fotografia"},
    {name: "Film", path: "/film"},
    {name: "O Nas", path: "/o-nas"},
    {name: "Kontakt", path: "/kontakt"},
] as const;

export const footerLinks = [
    {name: "Fotografia", path: "/fotografia"},
    {name: "Film", path: "/film"},
    {name: "O Nas", path: "/o-nas"},
    {name: "Kontakt", path: "/kontakt"},
] as const;
