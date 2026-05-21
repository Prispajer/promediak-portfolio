"use client";

import { motion } from "framer-motion";

const HeroOverlay = () => {
  return (
    <div className="bg-background relative w-1/3 md:w-2/5" aria-hidden="true">
      <div className="from-background via-background absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="via-accent/40 absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent to-transparent" />
      <motion.div
        className="border-accent/20 absolute top-1/4 left-1/4 h-32 w-32 border"
        animate={{ rotate: [45, 50, 55, 60, 55, 50, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="border-accent/10 absolute bottom-1/3 left-1/3 h-20 w-20 border"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HeroOverlay;
