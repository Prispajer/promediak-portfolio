"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PortfolioLightbox from "@/components/sections/Photo/Portfolio/PortfolioLightbox";
import { PhotoItem } from "@/types/portfolio";

interface PortfolioGridProps {
  items: PhotoItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [selectedImage, setSelectedImage] = React.useState<PhotoItem | null>(
    null,
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <motion.a
            key={item.id}
            href={item.image as string}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setSelectedImage(item);
            }}
            aria-haspopup="dialog"
            aria-label={`Powiększ zdjęcie: ${item.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] cursor-pointer overflow-hidden"
          >
            <Image
              src={item.image}
              alt={`Fotografia: ${item.title} - Kategoria: ${item.category}`}
              fill
              loading="eager"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="from-background/90 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 left-0 translate-y-full transform p-6 transition-transform duration-500 group-hover:translate-y-0"
            >
              <p className="text-accent font-body mb-2 text-xs tracking-widest uppercase">
                {item.category}
              </p>
              <h3 className="font-body text-foreground text-xl">
                {item.title}
              </h3>
            </div>
          </motion.a>
        ))}
        <PortfolioLightbox
          items={items}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </>
  );
}
