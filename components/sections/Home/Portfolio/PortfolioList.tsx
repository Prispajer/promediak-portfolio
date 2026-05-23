"use client";

import preview1 from "@/public/assets/portfolio/20.jpg";
import preview2 from "@/public/assets/portfolio/19.jpg";
import preview3 from "@/public/assets/portfolio/15.jpg";
import preview4 from "@/public/assets/portfolio/10.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioList = () => {
  const previewArray = [
    {
      src: preview1,
      alt: "Filmowa sesja portretowa w studio - zbliżenie na detale",
    },
    {
      src: preview2,
      alt: "Backstage z planu teledysku - profesjonalny sprzęt oświetleniowy",
    },
    {
      src: preview3,
      alt: "Dynamiczne ujęcie z drona - architektura nowoczesnego biurowca",
    },
    {
      src: preview4,
      alt: "Reportaż z wydarzenia korporacyjnego - prelegent na scenie",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {previewArray.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="aspect-[4/5] overflow-hidden"
        >
          <Image
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioList;
