"use client";

import React from "react";
import { motion } from "framer-motion";
import PortfolioLightbox from "@/components/sections/Video/Portfolio/PortfolioLightbox";
import { videoItems } from "@/data/portfolio";
import { Play } from "lucide-react";

export default function PortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {videoItems.map((project, index) => (
          <motion.a
            key={project.id}
            href={`https://www.youtube.com/watch?v=${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setSelectedVideo(project.id);
            }}
            aria-label={`Odtwórz film: ${project.title}`}
            aria-haspopup="dialog"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            viewport={{ once: true }}
            className={`group relative block cursor-pointer overflow-hidden ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <img
              src={project.thumbnail}
              alt={`Miniatura filmu: ${project.title}`}
              width={400}
              height={400}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="bg-background/40 group-hover:bg-background/60 absolute inset-0 transition-all duration-500" />
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="border-foreground/50 group-hover:border-accent flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:scale-110">
                <Play
                  size={32}
                  className="text-foreground/80 group-hover:text-accent ml-1"
                />
              </div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 p-4 md:p-8">
              <p className="text-accent font-body mb-2 text-xs tracking-widest uppercase">
                {project.category}
              </p>
              <h3 className="font-display text-foreground mb-2 text-[18px] sm:text-xl md:text-2xl">
                {project.title}
              </h3>
            </div>
            <div
              className="border-accent/0 group-hover:border-accent absolute top-4 right-4 h-12 w-12 border-t border-r transition-all duration-500"
              aria-hidden="true"
            />
          </motion.a>
        ))}
        <PortfolioLightbox
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </>
  );
}
