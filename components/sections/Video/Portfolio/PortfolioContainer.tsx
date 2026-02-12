"use client";

import React from "react";
import { motion } from "framer-motion";
import { videoProjects } from "@/data/portfolio";
import { Play } from "lucide-react";
import Image from "next/image";

const PortfolioContainer = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videoProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo("PP4ONu9PU5g")}
              className={`group relative cursor-pointer overflow-hidden ${
                index === 0 ? "aspect-video lg:col-span-2" : "aspect-video"
              }`}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="bg-background/40 group-hover:bg-background/60 absolute inset-0 transition-all duration-500" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-foreground/50 group-hover:border-accent flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:scale-110">
                  <Play
                    size={32}
                    className="text-foreground/80 group-hover:text-accent ml-1"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                <p className="text-accent font-body mb-2 text-xs tracking-widest uppercase">
                  {project.category}
                </p>
                <h3 className="font-display text-foreground mb-2 text-xl md:text-2xl">
                  {project.title}
                </h3>
                <span className="text-muted-foreground font-body text-sm">
                  {project.duration}
                </span>
              </div>

              {/* Corner Accent */}
              <div className="border-accent/0 group-hover:border-accent absolute top-4 right-4 h-12 w-12 border-t border-r transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>

      {/* 🔥 Modal renderowany TYLKO RAZ */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            className="aspect-video w-full max-w-4xl rounded-xl"
            allowFullScreen
          />
          <button
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioContainer;
