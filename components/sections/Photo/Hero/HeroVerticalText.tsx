"use client";

import { motion } from "framer-motion";

const HeroVerticalText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute top-1/2 right-8 hidden -translate-y-1/2 lg:block"
    >
      <span
        className="text-accent/30 font-body text-xs tracking-[0.5em] uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        ProMediak Studio
      </span>
    </motion.div>
  );
};

export default HeroVerticalText;
