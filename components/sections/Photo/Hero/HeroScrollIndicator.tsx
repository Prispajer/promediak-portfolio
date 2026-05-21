"use client";

import { motion } from "framer-motion";

const HeroScrollIndicator = () => {
  return (
    <div
      role="img"
      aria-label="Przewiń w dół"
      className="flex items-center gap-3 self-start"
    >
      <span className="text-foreground/40 hidden text-xs tracking-wider uppercase sm:block">
        Przewiń
      </span>
      <motion.div
        className="border-accent/30 flex h-10 w-6 items-start justify-center rounded-full border p-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="bg-accent h-2 w-1 rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};
export default HeroScrollIndicator;
