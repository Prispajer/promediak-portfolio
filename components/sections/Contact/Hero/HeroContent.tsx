"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroContent = () => {
  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <div className="via-accent mx-auto mb-8 h-16 w-px bg-gradient-to-b from-transparent to-transparent" />
        <h1 className="animate-fade-up hero-title mb-6">Kontakt</h1>
        <p className="hero-subtitle">
          Masz pytania lub chcesz omówić swój projekt? Napisz do nas — chętnie
          odpowiemy na wszystkie pytania.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroContent;
