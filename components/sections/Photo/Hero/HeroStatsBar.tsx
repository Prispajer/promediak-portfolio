"use client";

import { motion } from "framer-motion";
import HeroScrollIndicator from "@/components/sections/Photo/Hero/HeroScrollIndicator";
import { stats } from "@/data/content";

const HeroStatsBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      role="region"
      aria-label="Statystyki sukcesu"
      className="border-accent/10 bg-background/80 absolute right-0 bottom-0 left-0 border-t backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between gap-20 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
            {stats.map((stat) => (
              <article key={stat.label}>
                <span
                  className="font-display text-accent text-3xl"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  {stat.number}
                </span>
                <p className="text-foreground/50 font-body mt-1 text-xs tracking-wider uppercase">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
          <HeroScrollIndicator />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStatsBar;
