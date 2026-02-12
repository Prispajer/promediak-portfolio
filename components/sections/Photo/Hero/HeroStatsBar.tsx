"use client";

import { motion } from "framer-motion";
import HeroScrollIndicator from "@/components/sections/Photo/Hero/HeroScrollIndicator";

const HeroStatsBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="border-accent/10 bg-background/80 absolute right-0 bottom-0 left-0 border-t backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-6">
          <div className="flex gap-12">
            <div>
              <span className="font-display text-accent text-3xl">500+</span>
              <p className="text-foreground/50 mt-1 text-xs tracking-wider uppercase">
                Realizacji
              </p>
            </div>
            <div className="hidden md:block">
              <span className="font-display text-accent text-3xl">8</span>
              <p className="text-foreground/50 mt-1 text-xs tracking-wider uppercase">
                Lat doświadczenia
              </p>
            </div>
            <div className="hidden md:block">
              <span className="font-display text-accent text-3xl">100%</span>
              <p className="text-foreground/50 mt-1 text-xs tracking-wider uppercase">
                Zadowolonych klientów
              </p>
            </div>
          </div>
          <HeroScrollIndicator />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStatsBar;
