"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import parallax from "@/public/images/7.jpg";

const QuoteContainer = () => {
  return (
    <ParallaxSection backgroundImage={parallax} height="50vh">
      <div className="container mx-auto px-6 py-20">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="bg-accent mx-auto mb-8 h-12 w-px" />
          <p className="font-display text-foreground mb-6 text-2xl italic md:text-3xl">
            "Każde zdjęcie to zatrzymana chwila, każdy film to opowiedziana
            historia"
          </p>
          <p className="text-accent font-body text-sm tracking-widest uppercase">
            — Filozofia ProMediak
          </p>
        </motion.blockquote>
      </div>
    </ParallaxSection>
  );
};

export default QuoteContainer;
