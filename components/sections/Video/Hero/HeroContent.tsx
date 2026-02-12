"use client";

import { motion } from "framer-motion";

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
        <h1 className="animate-fade-up hero-title mb-6">Film</h1>
        <p className="hero-subtitle">
          Kinowe produkcje, które opowiadają Waszą historię. Każdy kadr, każdy
          dźwięk — wszystko dopracowane w najdrobniejszych szczegółach.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroContent;
