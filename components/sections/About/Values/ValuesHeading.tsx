"use client";

import { motion } from "framer-motion";

const ValuesHeading = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="font-display text-foreground mb-16 text-center text-3xl md:text-4xl"
    >
      Nasze Wartości
    </motion.h2>
  );
};

export default ValuesHeading;
